import { Component, OnInit } from '@angular/core';
import { Propiedad } from '../../models/propiedad';
import { PresupuestoService } from 'src/app/services/presupuesto/presupuesto.service';
import { CommonsService } from 'src/app/services/commons/commons.service';
import { Observable } from 'rxjs';
import { OpcionMenu } from 'src/app/models/interfaces/opcion-menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit  {

  public propiedades: Array<Propiedad>;
  opcionesMenu : Observable<OpcionMenu[]>;
  enVista: string;
  usuario: string;
  

  constructor(
    private commonsService:CommonsService,
    private presupuestoService: PresupuestoService,
    private router: Router
  ) {
    this.propiedades = this.presupuestoService.getAllPropiedades();
  }

  ngOnInit() {
    this.usuario = localStorage.getItem('type_token');
    this.enVista = "home";
    this.opcionesMenu = this.commonsService.getMenuOpciones();
  }

  addPresupuesto(){
    this.propiedades = this.presupuestoService.addPropiedad();
  }

  mostrarContenidoMenu(opcion: string){
      if(opcion=="usuario"){
        this.enVista = "usuario";
      }
      if(opcion=="Presupuesto"){
        this.enVista = "presupuesto";
      }
      if(opcion=="Home"){
        this.enVista = "home";
      }
      if(opcion=="Salir"){
        this.router.navigate(['login']);
      }
  }
  

}
