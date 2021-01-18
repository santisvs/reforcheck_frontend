import { Component, OnInit} from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { AlertController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private loginForm: any;
  
  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private alertCtrl: AlertController,
    private storage: Storage,
    private navCtrl: NavController
  ) { 
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  ngOnInit() {
  }

  async sendLogin(loginData) {
    if (!loginData.password) {
      this.presentAlert('Comprobar que los campos obligatorios esten rellenos correctamente');
    } else {
      /*this.loginService.loginUser(loginData).subscribe(
        (result:any) => {
          this.saveStorage(result);
          this.navCtrl.navigateRoot('/home');
        },
        error => {
          this.storage.clear();
          this.presentAlert("Error en el login. Revise los datos y vuelva a intentarlo");
        }
      );*/

      let result = this.loginService.loginUser(loginData);
      if(true){
        this.navCtrl.navigateRoot('/');
      } else {
        this.presentAlert("Login incorrecto");
      }
      
    }
  }

  async saveStorage(token){
          /*await this.storage.set('access_token', token.access_token);
          await this.storage.set('type_token', token.token_type);
          await this.storage.set('refresh_token', token.refresh_token);*/
          await localStorage.setItem('access_token', token.access_token);
          await localStorage.setItem('type_token', token.token_type);
          await localStorage.setItem('access_token', token.refresh_token);
  }

  async presentAlert(texto: any) {
    const alert = await this.alertCtrl.create({
      message: '',
      subHeader: texto,
      buttons: ['Ok']
    });
    await alert.present();
  }

}
