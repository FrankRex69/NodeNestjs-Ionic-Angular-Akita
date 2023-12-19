import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Inject,
    Param,
    Post,
    Req,
    Request,
    UseGuards
  } from '@nestjs/common';

  import { ReadAuthDto } from './dto/read-auth.dto';
  
  import { AuthGuard } from './auth.guard';  
  import { Public } from './decorators/public.decorator';

  import { AuthService } from './auth.service';
  import { GetAuthTokenDto, ReadAuthTokenDto } from './dto/read-auth-token.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
  
  
  @Controller('auth')
  export class AuthController {

    @Inject(AuthService) public readonly service: AuthService;

    constructor(private authService: AuthService) {}  

    @Public()
    @Get('getLoginToken')
    getLoginToken(): Promise<GetAuthTokenDto> {
      return this.service.signInLogin();
    }

    @Post('checkLoginToken')
    @ApiBearerAuth('access-token')
    @UseGuards(AuthGuard)
    // @HttpCode(HttpStatus.OK)    
    async getAccessToken(@Body() dataBody: ReadAuthDto): Promise<ReadAuthTokenDto | String> {
      try {        
        return await this.service.signIn(dataBody);      
      } catch (error) {       
        console.log("error");
      }
    }

    @UseGuards(AuthGuard)
    @Get('testProfile')
    getProfile(@Request() req) {
      return req.user;
    }
    
  }