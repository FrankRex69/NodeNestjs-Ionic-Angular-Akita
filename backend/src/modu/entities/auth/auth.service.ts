import { Catch, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { ReadAuthDto } from './dto/read-auth.dto';
import { Auth } from './entity-file/auth.entity';
import { GetAuthTokenDto, ReadAuthTokenDto } from './dto/read-auth-token.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async signIn(signInDto: ReadAuthDto): Promise<ReadAuthTokenDto> {
    try {
      const username = await this.usersService.findOne(signInDto.userLogin);
      if (username?.password !== signInDto.passLogin) {
        throw new UnauthorizedException();
      }
      const payload = { username: signInDto.userLogin };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    } catch (error) {
      return error.response;
    }
  }

  async signInLogin(): Promise<GetAuthTokenDto> {
    try {
      const payload = { username: '' };
      return {
        login_token: await this.jwtService.signAsync(payload),
      };
    } catch (error) {
      return error.response;
    }
  }
  
}