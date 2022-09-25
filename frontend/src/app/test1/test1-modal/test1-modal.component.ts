import { Component, OnInit } from '@angular/core';
import {
ModalController,
NavParams
} from '@ionic/angular';

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

  constructor(
    private modalController: ModalController,
    private navParams: NavParams
  ) { }

  ngOnInit() {
    console.table(this.navParams);
    this.modelId = this.navParams.data.paramID;
    this.modalTitle = this.navParams.data.paramTitle;
  }

  async closeModal() {
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    const onClosedData: string = 'Wrapped Up!';
    await this.modalController.dismiss(onClosedData);
  }

}
