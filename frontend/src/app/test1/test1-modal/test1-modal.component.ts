import { Component, OnInit, ViewChild } from '@angular/core';
import { IresponseTest1 } from '@commons/interfaces/test1.interface';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Test1Service } from '../test1.service';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'test1.modal',
  templateUrl: './test1-modal.component.html',
  styleUrls: ['./test1-modal.component.scss'],
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class Test1Modal implements OnInit {

  modalTitle: string;
  modelId: number;

  createTest1Sub: Subscription;
  isCreateActivated: boolean;
  test1ToBeCreated: IresponseTest1;

  constructor(
    private modalController: ModalController,
    private test1Service: Test1Service
  ) { }

  ngOnInit() {}

  async closeModal() {
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    const onClosedData: string = 'Wrapped Up!';
    await this.modalController.dismiss(onClosedData);
  }

  createTest1(createForm) {
    console.log(createForm.value.campo1);
    console.log(createForm.value.campo2);
    this.createTest1Sub = this.test1Service.createTest1(createForm).subscribe(result => {});
    this.closeModal();
  }

}
