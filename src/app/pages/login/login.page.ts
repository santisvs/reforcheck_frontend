import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private loginForm: any;
  private token: any;

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router,
    private alertCtrl: AlertController,
    private storage: Storage
  ) { 
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  ngOnInit() {
  }

  sendLogin(loginData) {
    if (!loginData.password) {
      this.presentAlert('Comprobar que los campos obligatorios esten rellenos correctamente');
    } else {
      this.loginService.loginUser(loginData).subscribe(
        result => {
          console.log("token: " + result)
        },
        error => {
          this.presentAlert(<any>error);
        }
      );
      console.log("token: " + this.token )
    }
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
