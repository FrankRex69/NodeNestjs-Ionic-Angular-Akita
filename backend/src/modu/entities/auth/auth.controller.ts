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
  
  
  @Controller('auth')
  export class AuthController {

    @Inject(AuthService) public readonly service: AuthService;

    constructor(private authService: AuthService) {}
  
    @Public()
    @HttpCode(HttpStatus.OK)
    @Post('login')
    async signIn(@Body() signInDto: ReadAuthDto): Promise <string | any> {
      // console.log('controller: ' + this.authService.signIn(signInDto));
      // return this.authService.signIn(signInDto);
      return {
        "qq": 333
      } 
    }

    @Public()
    @UseGuards(AuthGuard)
    @Get('logintest1')
    getTest1(@Request() req) {     
      //return this.authService.getTest(req);
      console.log(req);
      
      return req;
    }

    @Public()
    @UseGuards(AuthGuard)
    @Get('logintest')
    getTest(@Param('id') id: string) {
      console.log(id);
      
      return id;
    }
  



    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
      return req.user;
    }

    //-------------------
    // prove
    
    // @Public()
    // @Post('checkLogin')
    // readAuth(@Body() dto: ReadAuthDto): Promise<ReadAuthDto> {
    //   return this.service.readAuth(dto);
    // }

    @Public()
    @Get('checkLoginGet')
    findOne(): string {
      console.log("params.id");
      return `This action returns a cat`;
    }
    
    @Public()
    @Post('checkLoginPost')
    readAuth(@Body() dataBody: ReadAuthDto): Promise<ReadAuthTokenDto> {           
      return this.service.signIn(dataBody);
    }

    // @Public()
    // @Post('getLoginToken')
    // getLoginToken(): Promise<ReadAuthTokenDto> {
    //   const data = {
    //     userLogin: '',
    //     passLogin: ''
    //   }
    //   return this.service.signIn(data);
    // }

    

    // @Public()
    // @Post('getLoginToken')
    // getLoginToken(@Body() dataBody: ReadAuthDto): Promise<GetAuthTokenDto> {           
    //   return this.service.signInLogin(dataBody);
    // }

    @Public()
    @Get('getLoginToken')
    getLoginToken(): Promise<GetAuthTokenDto> {
      return this.service.signInLogin();
    }

    
    
  }