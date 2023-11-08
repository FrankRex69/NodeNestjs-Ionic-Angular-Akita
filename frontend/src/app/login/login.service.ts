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

// async checkLoginService(credentialLogin) {
//   this.http.post<any[]>(`${environment.apiUrl}/auth/checkLoginPost`, credentialLogin)
//     .subscribe(data => console.log('Response', data)
//       // {
//       //   this.data = data;
//       //   return this.data;
//       // }
//       ,
//     error => { console.log('qq' + error.message); }
//   );
// }

  async checkLoginService(credentialLogin) {
    this.http.post<any[]>(`${environment.apiUrl}/auth/checkLoginPost`, credentialLogin, {withCredentials: true})
      //.subscribe(data => this.router.navigate(['/test1']),
      .subscribe((data: any) => localStorage.setItem('Token', data.access_token),
      error => { console.log('qq' + error.message); }
    );
  }


}


