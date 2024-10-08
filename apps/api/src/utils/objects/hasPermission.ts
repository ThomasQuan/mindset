import { Permission } from 'src/@generated/prisma-nestjs-graphql/permission/permission.model';

export type PermissionTuple = [string, string];

export const hasPermission = (
  providedPermissions: Permission[],
  requiredPermissions: PermissionTuple[],
) => {
  if (providedPermissions.length === 0) {
    return false;
  }
  if (requiredPermissions.length === 0) {
    return true;
  }

  return requiredPermissions.every(([reqAction, reqModel]) => {
    return providedPermissions.some(
      (permission) =>
        permission.action === reqAction &&
        permission.referenceModel === reqModel,
    );
  });
};
