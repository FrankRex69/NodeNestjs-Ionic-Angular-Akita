/* eslint-disable @angular-eslint/use-lifecycle-interface */
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { IresponseTest1 } from '@commons/interfaces/test1.interface';
import { Test1Query } from './test1.query';
import { Test1Service } from './test1.service';
import { Test1State } from './test1.store';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'test1',
  templateUrl: './test1.page.html',
})
export class Test1Page implements OnInit {

  listTest1sSub: Subscription;
  deleteTest1Sub: Subscription;
  updateTest1Sub: Subscription;

  cstate: Test1State;

  test1s$: Observable<IresponseTest1[]> = this.test1Query.selectAll();

  constructor(private test1Service: Test1Service, private test1Query: Test1Query) {
  }

  ngOnInit() {
    this.listTest1sSub = this.test1Query.selectAreTest1sLoaded$.pipe(
      filter(areTest1sLoaded => !areTest1sLoaded),
      switchMap(areTest1sLoaded => {
        if (!areTest1sLoaded) {
          return this.test1Service.getAllTest1s();
        }
      })
    ).subscribe(result => {});
  }

  deleteTest1(test1Id: string) {
    this.deleteTest1Sub = this.test1Service.deleteTest1(test1Id).subscribe(result => {
      console.log(result);
    });
  }

  ngOnDestroy() {
    if (this.listTest1sSub) {
      this.listTest1sSub.unsubscribe();
    }

    if (this.deleteTest1Sub) {
      this.deleteTest1Sub.unsubscribe();
    }

    if (this.updateTest1Sub) {
      this.updateTest1Sub.unsubscribe();
    }
  }



}
