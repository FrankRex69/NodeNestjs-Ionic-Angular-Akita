import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { Test1PageRoutingModule } from './test1-routing.module';
import { Test1Page } from './test1.page';
import { Test1Service } from './test1.service';
import { HttpClientModule } from '@angular/common/http';
import { Test1Modal } from './test1-modal/test1-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Test1PageRoutingModule,
    HttpClientModule
  ],
  declarations: [Test1Page, Test1Modal],
  providers: [Test1Service],
  exports: [Test1Page]
})
export class Test1PageModule {}

