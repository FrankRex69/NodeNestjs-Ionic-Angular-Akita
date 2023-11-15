import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      username: 'fra',
      password: 'rex',
      role: 'admin'
    },
    {
      username: 'maria',
      password: 'guess',
      role: 'customer'
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}
