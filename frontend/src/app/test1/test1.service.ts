import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Test1Store } from './test1.store';
import { IresponseTest1 } from '@commons/interfaces/test1.interface';
import { environment } from '../../environments/environment';


@Injectable()
export class Test1Service {

  http: HttpClient;
  store: Test1Store;

  constructor(http: HttpClient, store: Test1Store) {
    this.http = http;
    this.store = store;
  }

  getAllTest1s(): Observable<IresponseTest1[]> {
    //`${environment.apiUrl}/comune/`
    //return this.http.get<IresponseTest1[]>('/api/test1').pipe(
    return this.http.get<IresponseTest1[]>(`${environment.apiUrl}/Test1/`).pipe(
      tap(test1 => {
        this.store.loadTest1s(test1, true);
      })
    );
  }

  updateTest1(test1Id: number, test1: IresponseTest1): Observable<any> {
    return this.http.patch(`${environment.apiUrl}/Test1/${test1Id}`, test1).pipe(
      tap(result => {
        this.store.update(test1Id, test1);
      })
    );
  }

  deleteTest1(test1Id: number): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/Test1/${test1Id}`).pipe(
      tap(result => {
        this.store.remove(test1Id);
      })
    );
  }


}
