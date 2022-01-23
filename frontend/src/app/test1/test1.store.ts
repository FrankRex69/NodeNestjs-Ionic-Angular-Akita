/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { Injectable } from '@angular/core';
import { IresponseTest1 } from '@commons/interfaces/test1.interface';
import { EntityStore, StoreConfig } from '@datorama/akita';
import { EntityState } from '@datorama/akita/src/lib/types';

export interface Test1State extends EntityState<IresponseTest1, number> {
  areTest1sLoaded: boolean;
}

export function createInitialState(): Test1State {
  return {
    areTest1sLoaded: false
  };
}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'test1' })
export class Test1Store extends EntityStore<Test1State> {

    constructor() {
        super(createInitialState());
    }

    loadTest1s(test1s: IresponseTest1[], areTest1sLoaded: boolean) {
      this.set(test1s);
      this.update(state => ({
        ...state,
        areTest1sLoaded
      }));
    }
}
