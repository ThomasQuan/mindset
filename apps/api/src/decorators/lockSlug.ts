import { SetMetadata } from '@nestjs/common';

/**
 * A decorator to lock the slug field from being updated.
 * This is useful when you want to ensure that the slug is not changed once it is set.
 */
export const LockSlug = () => SetMetadata('lockSlug', true);
