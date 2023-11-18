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
    console.log('11: ', credentialLogin);
    console.log('22: ', token);
    axios.post(`${environment.apiUrl}/auth/checkLoginToken`, credentialLogin, { headers: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      Authorization: `Bearer ${token}`
      }})
      .then(response => {
        console.log('wrwr: ', response);
        if(response.data.status===200){
          localStorage.setItem('access_token', response.data.access_token);
          this.router.navigate(['/list-item']);
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

}
