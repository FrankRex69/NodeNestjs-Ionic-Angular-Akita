import { Component, OnInit } from '@angular/core';
import { IcreateFormDTO, IresponseTest1 } from '@commons/interfaces/test1.interface';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-test1-modal-update',
  templateUrl: './test1-modal-update.component.html',
  styleUrls: ['./test1-modal-update.component.scss'],
})
export class Test1ModalUpdateComponent implements OnInit {

  // public campo1 = this.navParams.get('campo1');
  // public campo2 = this.navParams.get('campo1');

  test1ToBeUpdated: IresponseTest1;

  constructor(
    private modalController: ModalController,
    private navParams: NavParams
    ) {}

  ngOnInit() {}

  async updateTest1Modal(updateForm) {
    console.log(updateForm.value.campo1);
    console.log(updateForm.value.campo2);




    // this.updateTest1Sub = this.test1Service.updateTest1(
    //   this.test1ToBeUpdated.id, updateForm.value).subscribe(result => console.log(result)
    // );
    // this.isUpdateActivated = false;
    // this.test1ToBeUpdated = null;
  }


  async closeModal() {
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    const onClosedData: string = 'Wrapped Up!';
    await this.modalController.dismiss(onClosedData);
  }

}
