import { Component, OnInit, Input } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  public appPages = [
    {
      title: 'Unidades',
      url: '/unit',
      icon: 'list',
      rol: 'both'
    },
    {
      title: 'Presupuestos',
      url: '/budget',
      icon: 'create',
      rol: 'anunciante'
    },
    {
      title: 'Info Usuario',
      url: '/info-usuario',
      icon: 'person',
      rol: 'usuario'
    },
    {
      title: 'Logout',
      url: '/logout',
      icon: 'person',
      rol: 'both'
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'person',
      rol: 'inicio'
    },
    {
      title: 'Info Anunciante',
      url: '/info-anunciante',
      icon: 'person',
      rol: 'anunciante'
    },
  ];
  rol: any;
  menuSubscription: any;

  name : any;

  constructor(
    private router: Router,
    private storage: Storage
  ) {
    
  }

  ngOnInit() {
  }



  

}
