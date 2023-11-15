// import { SetMetadata } from '@nestjs/common';
// import { Role } from '../../../../commons/interfaces/login.interface';

// export const ROLES_KEY = 'roles';
// export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);


import { SetMetadata } from '@nestjs/common';

export const Roles = (...args: string[]) => SetMetadata('roles', args);