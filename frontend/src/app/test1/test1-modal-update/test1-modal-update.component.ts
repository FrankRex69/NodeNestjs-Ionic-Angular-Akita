import { Component } from '@angular/core';
import { IupdateFormDTO } from '@commons/interfaces/test1.interface';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Test1Service } from '../test1.service';

@Component({
  selector: 'app-test1-modal-update',
  templateUrl: './test1-modal-update.component.html',
  styleUrls: ['./test1-modal-update.component.scss'],
})
export class Test1ModalUpdateComponent {

  test1ToBeUpdated: IupdateFormDTO;
  isUpdateActivated = false;
  updateTest1Sub: Subscription;

  constructor(
    private test1Service: Test1Service,
    private modalController: ModalController
    ) {}

  async updateTest1Modal(updateForm: { value: IupdateFormDTO }){
    this.updateTest1Sub = this.test1Service.updateTest1(
      updateForm.value.id, updateForm.value).subscribe(result => console.log(result)
    );
    this.closeModal();
  }

  async closeModal() {
    const onClosedData = 'Wrapped Up!';
    await this.modalController.dismiss(onClosedData);
  }

}
