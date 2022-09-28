import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { Test1PageRoutingModule } from './test1-routing.module';
import { Test1Page } from './test1.page';
import { Test1Service } from './test1.service';
import { HttpClientModule } from '@angular/common/http';
import { Test1Modal } from './test1-modal/test1-modal.component';
import { Test1ModalUpdateComponent } from './test1-modal-update/test1-modal-update.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Test1PageRoutingModule,
    HttpClientModule
  ],
  declarations: [Test1Page, Test1Modal, Test1ModalUpdateComponent],
  providers: [Test1Service],
  exports: [Test1Page],
  entryComponents: [ Test1ModalUpdateComponent ]
})
export class Test1PageModule {}

