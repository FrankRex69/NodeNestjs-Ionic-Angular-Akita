import { Injectable } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IresponseLogin } from '@commons/interfaces/login.interface';

import axios from 'axios';
import { Observable, throwError } from 'rxjs';
import { catchError, take, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

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

  // --- GET
  // getLoginToken() {
  //   this.http.get<any[]>(`${environment.apiUrl}/auth/getLoginToken`)
  //     .subscribe((data: any) => localStorage.setItem('login_token', data.login_token),
  //     error => { console.log('Error get login_token: ' + error.message); }
  //   );
  // }

  getLoginToken() {
    axios.get(`${environment.apiUrl}/auth/getLoginToken`)
      .then(response => {
        localStorage.setItem('login_token', response.data.login_token);
      })
      .catch(error => {
        console.error(error);
      });
  }

  // --- POST
  async checkLoginService(credentialLogin: any) {
    const token = localStorage.getItem('login_token');
    axios.post(`${environment.apiUrl}/auth/checkLoginToken`, credentialLogin, { headers: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      Authorization: `Bearer ${token}`
      }})
      .then(response => {
        localStorage.setItem('access_token', response.data.access_token);
        // axios.post(`${environment.apiUrl}/test1`, credentialLogin, { headers: {
        //   // eslint-disable-next-line @typescript-eslint/naming-convention
        //   Authorization: `Bearer ${response.data.access_token}`
        // }});
        this.router.navigate(['/test1']);
      })
      .catch(error => {
        console.error(error);
      });
  }

}
