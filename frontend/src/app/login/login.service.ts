import { Injectable } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { IresponseLogin } from '@commons/interfaces/login.interface';
import { environment } from 'src/environments/environment';
import { catchError, take, tap } from 'rxjs/operators';

@Injectable()
export class LoginService {

  http: HttpClient;
  data: any[];

  constructor(
    http: HttpClient,
    private router: Router
    ) {
    this.http = http;
  }

  //----------- methods
  // public getLoginToken(data) {
  //   this.http.post<any[]>(`${environment.apiUrl}/auth/getLoginToken`)
  //     .subscribe((data: any) => localStorage.setItem('login_Token', data.access_token),
  //     error => { console.log('Error get login token:' + error.message); }
  //   );
  // }

  getLoginToken() {
    this.http.get<any[]>(`${environment.apiUrl}/auth/getLoginToken`)
      .subscribe((data: any) => localStorage.setItem('login_token', data.login_token),
      error => { console.log('Error get login token' + error.message); }
    );
  }

  async checkLoginService(credentialLogin) {
    this.http.post<any[]>(`${environment.apiUrl}/auth/checkLoginPost`, credentialLogin, {withCredentials: true})
      //.subscribe(data => this.router.navigate(['/test1']),
      .subscribe((data: any) => localStorage.setItem('Token', data.access_token),
      error => { console.log('Error check login token' + error.message); }
    );
  }


}


