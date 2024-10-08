import { ActionSlug, PrismaClient, ReferenceModelSlug } from '@prisma/client';
import { blue, red, green, yellow } from 'colorette';
import { permissions, roles, tags, users } from './seed.data';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  try {
    console.log(blue('🔌 Creating permissions...'));
    for (const permission of permissions) {
      const existingPermission = await prisma.permission.findUnique({
        where: { slug: permission.slug },
      });
      if (existingPermission) {
        console.log(yellow('⚠️ Permission already exists, skipping creation'));
      } else {
        await prisma.permission.create({
          data: {
            ...permission,
            referenceModel: permission.referenceModel as ReferenceModelSlug,
            action: permission.action as ActionSlug,
          },
        });
        console.log(
          green(`✅ Permission ${permission.title} created successfully 🚀`),
        );
      }
    }

    console.log(blue('🔌 Creating roles...'));
    for (const role of roles) {
      const existingRole = await prisma.role.findUnique({
        where: { slug: role.slug },
      });
      if (existingRole) {
        console.log(yellow('⚠️ Role already exists, skipping creation'));
      } else {
        await prisma.role.create({
          data: {
            title: role.title,
            slug: role.slug,
            description: role.description,
          },
        });
        console.log(green(`✅ Role ${role.title} created successfully 🚀`));
      }

      console.log(blue('🔌 Assigning permissions to roles...'));
      const adminRole = await prisma.role.findUnique({
        where: { slug: 'administrator' },
      });
      if (adminRole) {
        const allPermissions = await prisma.permission.findMany();
        await prisma.role.update({
          where: { id: adminRole.id },
          data: {
            permissions: { connect: allPermissions.map((p) => ({ id: p.id })) },
          },
        });
        console.log(
          green(`✅ All permissions assigned to admin role successfully 🚀`),
        );
      }

      console.log(blue('🔌 Assigning permissions to roles...'));
      const regularUserRole = await prisma.role.findUnique({
        where: { slug: 'regular-user' },
      });
      if (regularUserRole) {
        const readPermissions = await prisma.permission.findMany({
          where: { action: 'read' },
        });
        await prisma.role.update({
          where: { id: regularUserRole.id },
          data: {
            permissions: {
              connect: readPermissions.map((p) => ({ id: p.id })),
            },
          },
        });
        console.log(
          green(
            `✅ All read permissions assigned to regular user role successfully 🚀`,
          ),
        );
      }

      console.log(blue('🔌 Creating users...'));
      for (const user of users) {
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email },
        });
        if (existingUser) {
          console.log(
            yellow(`⚠️ User ${user.email} already exists, skipping creation`),
          );
        } else {
          await prisma.user.create({
            data: {
              ...user,
              status: 'ACTIVE',
              password: await bcrypt.hash(user.password, 10),
            },
          });
        }
        console.log(green('✅ Admin user created successfully 🚀'));
      }
    }

    console.log(blue('🔌 Creating tags...'));
    for (const tag of tags) {
      const existingTag = await prisma.tag.findUnique({
        where: { slug: tag.slug },
      });
      if (existingTag) {
        console.log(
          yellow(`⚠️ Tag ${tag.title} already exists, skipping creation`),
        );
      } else {
        await prisma.tag.create({
          data: {
            ...tag,
          },
        });
        console.log(green(`✅ Tag ${tag.title} created successfully 🚀`));
      }
    }
  } catch (error) {
    console.error(red('❌ Error during seed operation 💥'));
    console.error(error);
    process.exit(1);
  }
}

main()
  .catch((e) => {
    console.error(red('❌ Error creating seed data 💥'));
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    console.log(blue('🔌 Disconnecting from database...'));
    await prisma.$disconnect();
  });
