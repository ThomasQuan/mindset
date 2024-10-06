import { SetMetadata } from '@nestjs/common';

export const PERMISSION_KEY = 'permission';

// Define a type for the permission tuple
type PermissionTuple = [string, string];

// Update the Permission decorator to accept an array of PermissionTuples
export const Permission = (...permissions: PermissionTuple[]) =>
  SetMetadata(PERMISSION_KEY, permissions);
