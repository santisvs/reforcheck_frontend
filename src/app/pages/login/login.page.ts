import { Component, OnInit , Input} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { LoginService } from '../../services/login/login.service';

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
    private storage: Storage,
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
        (result:any) => {
          this.storage.set('access_token', result.access_token);
          this.storage.set('type_token', result.token_type);
          this.storage.set('refresh_token', result.refresh_token);
          this.router.navigate(['/unit']);
        },
        error => {
          this.presentAlert("Error en el login. Revise los datos y vuelva a intentarlo");
        }
      );
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
