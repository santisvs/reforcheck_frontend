import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSelect } from '@ionic/angular';
import { PropiedadInterface } from 'src/app/models/propiedad';
import { PresupuestoService } from 'src/app/services/presupuesto/presupuesto.service';

@Component({
  selector: 'app-plantas',
  templateUrl: './plantas.page.html',
  styleUrls: ['./plantas.page.scss'],
})
export class PlantasPage implements OnInit {

  @ViewChild('selectEstancia', { static: false }) selectRef: IonSelect;

  public propiedad: PropiedadInterface;

  constructor(
    private presupuestoService: PresupuestoService
  ) { }

  ngOnInit() {
    this.propiedad = this.presupuestoService.getPropiedad();
    console.log("PLANTAS");
    console.log(this.propiedad);
  }

  openSelect(){
    this.selectRef.open();
  }

  crearPlanta(){
    this.presupuestoService.crearPlanta();
  }

  crearEstancia(_planta, _tipo){
    this.presupuestoService.crearEstancia(_planta, _tipo);
  }

  crearBanera(_planta, _estancia){
    this.presupuestoService.crearBanera(_planta, _estancia);
  }

}
