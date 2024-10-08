import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectWhereInput } from './project-where.input';
import { Type } from 'class-transformer';
import { ProjectOrderByWithRelationInput } from './project-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProjectScalarFieldEnum } from './project-scalar-field.enum';

@ArgsType()
export class FindManyProjectArgs {

    @Field(() => ProjectWhereInput, {nullable:true})
    @Type(() => ProjectWhereInput)
    where?: ProjectWhereInput;

    @Field(() => [ProjectOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProjectOrderByWithRelationInput>;

    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ProjectScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProjectScalarFieldEnum>;
}
