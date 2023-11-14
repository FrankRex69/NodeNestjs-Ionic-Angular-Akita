import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, take, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { Test1Store } from './test1-store/test1.store';
import { IcreateFormDTO, IresponseTest1 } from '@commons/interfaces/test1.interface';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';


@Injectable()
export class Test1Service {

  http: HttpClient;
  store: Test1Store;

  corsHeaders = new HttpHeaders({
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'Content-Type': 'application/json',
  });

  constructor(http: HttpClient, store: Test1Store, private router: Router) {
    this.http = http;
    this.store = store;
  }


  getAllTest1s(): Observable<IresponseTest1[]> {
    const accessToken = localStorage.getItem('access_token');
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const headers = { Authorization: 'Bearer ' + accessToken};
    console.log('headers: ' , headers);

    return this.http.get<IresponseTest1[]>(`${environment.apiUrl}/Test1/`, { headers }).pipe(
    //return this.http.get<IresponseTest1[]>(`${environment.apiUrl}/Test1/`).pipe(
      tap(test1 => {
        this.store.loadTest1s(test1, true);
      })
    );
  }

  updateTest1(test1Id: number, test1: IresponseTest1): Observable<any> {
    const token = localStorage.getItem('access_token');
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const headers = {Authorization: `Bearer ${token}`};
    return this.http.patch(`${environment.apiUrl}/Test1/${test1Id}`, test1, { headers }).pipe(
      tap(result => {
        this.store.update(test1Id, test1);
      })
    );
  }

  createTest1(dto) {
    const token = localStorage.getItem('access_token');
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const headers = {Authorization: `Bearer ${token}`};
    this.store.setLoading(true);
    return this.http.post<IresponseTest1>(`${environment.apiUrl}/Test1/`, dto.value, { headers }).pipe(
      take(1),
      catchError((err: HttpErrorResponse) => {
        console.log('🐱‍👤 : err', err);
        return throwError(
          () => new Error(`${err.error.error}: ${err.error.message[0]}`)
        );
      }),
      tap((value: IresponseTest1) => {
        console.log('🐱‍👤 : value', value);
        this.store.add(value);
        this.store.setLoading(false);
      })
    );
  }


  deleteTest1(test1Id: number): Observable<any> {
    const token = localStorage.getItem('access_token');
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const headers = {Authorization: `Bearer ${token}`};
    return this.http.delete(`${environment.apiUrl}/Test1/${test1Id}`, { headers }).pipe(
      tap(result => {
        this.store.remove(test1Id);
      })
    );
  }

  logOut(){
    localStorage.removeItem('access_token');
    this.router.navigate(['/login']);
  }

}
