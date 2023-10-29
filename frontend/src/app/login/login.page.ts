import { Component, OnInit } from '@angular/core';
import { IresponseLogin } from '@commons/interfaces/login.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  async checkLogin(loginForm: { value: IresponseLogin }){
    console.log(loginForm.value.userLogin);
    console.log(loginForm.value.passLogin);
  }




  // async openModalUpdate(test1: IresponseTest1) {
  //   const modal = await this.modalController.create({
  //     component: Test1ModalUpdateComponent,
  //     componentProps: {
  //       id: test1.id,
  //       campo1: test1.campo1,
  //       campo2: test1.campo2
  //     }
  //   });
  //   return await modal.present();
  // }

}
