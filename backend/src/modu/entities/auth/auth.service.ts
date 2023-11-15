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

  async signIn(signInData: ReadAuthDto): Promise<ReadAuthTokenDto | String> {
    try {
      const username = await this.usersService.findOne(signInData.userLogin);      
      
      if (username?.password !== signInData.passLogin) {              
        return {
          status: 401,  
          access_token: '',
        };    
      }
      const payload = { username: signInData.userLogin, password: signInData.passLogin, role: username.role };      
      return {
        status: 200,  
        access_token: await this.jwtService.signAsync(payload),
      };
    } catch (error) {
      console.log(error);
      
    }
  }  
  
}