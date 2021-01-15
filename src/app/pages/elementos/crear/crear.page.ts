import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Estancia } from 'src/app/models/estancia';
import { SelectElemento } from 'src/app/models/estancia/select-elemento';
import { PresupuestoService } from 'src/app/services/presupuesto/presupuesto.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {

  @Input() s_idPropiedad: string;
  @Input() s_idPlanta: string;
  @Input() s_idEstancia: string;

  public elementos: SelectElemento;
  public estancia: Estancia;

  constructor(
    private presupuestoService: PresupuestoService,
    private modalCtrl: ModalController
  ) {
    this.elementos = new SelectElemento();
  }

  ngOnInit() {
    this.estancia = <Estancia>this.presupuestoService.getEstanciaById(this.s_idPropiedad, this.s_idPlanta, this.s_idEstancia);
  }

  addElementos(){
    if(this.elementos.mobiliario_obra){
      this.presupuestoService.crearElementoById(this.s_idPropiedad, this.s_idPlanta, this.s_idEstancia, "mobiliario_obra");
    }
    if(this.elementos.techo){
      this.presupuestoService.crearElementoById(this.s_idPropiedad, this.s_idPlanta, this.s_idEstancia, "techo");
    }
    if(this.elementos.revestimiento){
      this.presupuestoService.crearElementoById(this.s_idPropiedad, this.s_idPlanta, this.s_idEstancia, "revestimiento");
    }
    if(this.elementos.solado){
      this.presupuestoService.crearElementoById(this.s_idPropiedad, this.s_idPlanta, this.s_idEstancia, "solado");
    }
    if(this.elementos.rodapie){
      this.presupuestoService.crearElementoById(this.s_idPropiedad, this.s_idPlanta, this.s_idEstancia, "rodapie");
    }
    if(this.elementos.pintura){
      this.presupuestoService.crearElementoById(this.s_idPropiedad, this.s_idPlanta, this.s_idEstancia, "pintura");
    }
    if(this.elementos.instalacion){
      this.presupuestoService.crearElementoById(this.s_idPropiedad, this.s_idPlanta, this.s_idEstancia, "instalacion");
    }
    if(this.elementos.iluminacion){
      this.presupuestoService.crearElementoById(this.s_idPropiedad, this.s_idPlanta, this.s_idEstancia, "iluminacion");
    }
    if(this.elementos.ventanas > 0){
      for (let index = 0; index < this.elementos.ventanas; index++) {
        this.presupuestoService.crearElementoById(this.s_idPropiedad, this.s_idPlanta, this.s_idEstancia, "ventana");
      }
    }
    if(this.elementos.puertas > 0){
      for (let index = 0; index < this.elementos.puertas; index++) {
        this.presupuestoService.crearElementoById(this.s_idPropiedad, this.s_idPlanta, this.s_idEstancia, "puerta");
      }
    }
    if(this.elementos.armarios > 0){
      for (let index = 0; index < this.elementos.armarios; index++) {
        this.presupuestoService.crearElementoById(this.s_idPropiedad, this.s_idPlanta, this.s_idEstancia, "armario");
      }
    }
    if(this.elementos.radiadores > 0){
      for (let index = 0; index < this.elementos.radiadores; index++) {
        this.presupuestoService.crearElementoById(this.s_idPropiedad, this.s_idPlanta, this.s_idEstancia, "radiador");
      }
    }
    if(this.elementos.climatizacion > 0){
      for (let index = 0; index < this.elementos.climatizacion; index++) {
        this.presupuestoService.crearElementoById(this.s_idPropiedad, this.s_idPlanta, this.s_idEstancia, "climatizacion");
      }
    }
    if(this.elementos.baneras > 0){
      for (let index = 0; index < this.elementos.baneras; index++) {
        this.presupuestoService.crearElementoById(this.s_idPropiedad, this.s_idPlanta, this.s_idEstancia, "banera");
      }
    }
    if(this.elementos.duchas > 0){
      for (let index = 0; index < this.elementos.duchas; index++) {
        this.presupuestoService.crearElementoById(this.s_idPropiedad, this.s_idPlanta, this.s_idEstancia, "ducha");
      }
    }
    if(this.elementos.lavabos > 0){
      for (let index = 0; index < this.elementos.lavabos; index++) {
        this.presupuestoService.crearElementoById(this.s_idPropiedad, this.s_idPlanta, this.s_idEstancia, "lavabo");
      }
    }
    if(this.elementos.inodoros > 0){
      for (let index = 0; index < this.elementos.inodoros; index++) {
        this.presupuestoService.crearElementoById(this.s_idPropiedad, this.s_idPlanta, this.s_idEstancia, "inodoro");
      }
    }
    if(this.elementos.bidets > 0){
      for (let index = 0; index < this.elementos.bidets; index++) {
        this.presupuestoService.crearElementoById(this.s_idPropiedad, this.s_idPlanta, this.s_idEstancia, "bidet");
      }
    }

    this.cerrarModal();

  }

  cerrarModal(){
    this.modalCtrl.dismiss({
      //s_propiedad: this.propiedad
    });
  }

}
