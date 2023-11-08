import { Component, OnInit } from '@angular/core';

import { IresponseLogin } from '@commons/interfaces/login.interface';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login-template-html/login.page.html',
  styleUrls: ['./login-template-html/login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private loginService: LoginService,
  ) {}

  ngOnInit() {
    this.loginService.getLoginToken();
  }


  async checkLogin(loginForm: { value: IresponseLogin }){
    const credentialLogin = {
      userLogin: loginForm.value.userLogin,
      passLogin: loginForm.value.passLogin
    };
    console.log(await this.loginService.checkLoginService(credentialLogin));
  }


}
