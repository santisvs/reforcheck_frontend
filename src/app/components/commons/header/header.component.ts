import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { OpcionMenu } from 'src/app/models/interfaces/opcion-menu';
import { CommonsService } from 'src/app/services/commons/commons.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  opcionesMenu : Observable<OpcionMenu[]>;

  constructor( 
    private menuCtrl:MenuController,
    private commonsService:CommonsService

  ) { }

  ngOnInit() {
    this.opcionesMenu = this.commonsService.getMenuOpciones();
  }

  mostrarMenu(){
    this.menuCtrl.open('first');
  }

}
