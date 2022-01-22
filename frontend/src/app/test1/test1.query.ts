/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
/* eslint-disable arrow-body-style */
import { Injectable } from '@angular/core';
import { Test1State, Test1Store } from './test1.store';
import { QueryEntity } from '@datorama/akita';

@Injectable({
    providedIn: 'root'
  })
  export class Test1Query extends QueryEntity<Test1State> {
  
    selectAreTest1sLoaded$ = this.select(state => {
      return state.areTest1sLoaded;
    });
  
    constructor(protected store: Test1Store) {
      super(store);
    }
  }