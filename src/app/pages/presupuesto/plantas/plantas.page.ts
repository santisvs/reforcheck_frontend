import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSelect, ModalController } from '@ionic/angular';
import { SelectElemento } from 'src/app/models/estancia/select-elemento';
import { Propiedad } from 'src/app/models/propiedad';
import { PresupuestoService } from 'src/app/services/presupuesto/presupuesto.service';
import { ArmarioPage } from '../../elementos/armario/armario.page';
import { BaneraPage } from '../../elementos/banera/banera.page';
import { BidetPage } from '../../elementos/bidet/bidet.page';
import { ClimatizacionPage } from '../../elementos/climatizacion/climatizacion.page';
import { DuchaPage } from '../../elementos/ducha/ducha.page';
import { InodoroPage } from '../../elementos/inodoro/inodoro.page';
import { LavaboPage } from '../../elementos/lavabo/lavabo.page';
import { MobiliarioObraPage } from '../../elementos/mobiliario-obra/mobiliario-obra.page';
import { PuertaPage } from '../../elementos/puerta/puerta.page';
import { RadiadorPage } from '../../elementos/radiador/radiador.page';
import { VentanaPage } from '../../elementos/ventana/ventana.page';

@Component({
  selector: 'app-plantas',
  templateUrl: './plantas.page.html',
  styleUrls: ['./plantas.page.scss'],
})
export class PlantasPage implements OnInit {

  @ViewChild('selectEstancia', { static: false }) selectRef: IonSelect;

  public propiedad: Propiedad;

  constructor(
    private presupuestoService: PresupuestoService,
    private modalCtrl: ModalController
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

  escuchaCrearElementos(datos: SelectElemento){
    if(datos.mobiliario_obra){
      this.presupuestoService.crearElementoEstancia(datos.planta, datos.estancia, "mobiliario_obra");
    }
    if(datos.techo){
      this.presupuestoService.crearElementoEstancia(datos.planta, datos.estancia, "techo");
    }
    if(datos.revestimiento){
      this.presupuestoService.crearElementoEstancia(datos.planta, datos.estancia, "revestimiento");
    }
    if(datos.solado){
      this.presupuestoService.crearElementoEstancia(datos.planta, datos.estancia, "solado");
    }
    if(datos.rodapie){
      this.presupuestoService.crearElementoEstancia(datos.planta, datos.estancia, "rodapie");
    }
    if(datos.pintura){
      this.presupuestoService.crearElementoEstancia(datos.planta, datos.estancia, "pintura");
    }
    if(datos.instalacion){
      this.presupuestoService.crearElementoEstancia(datos.planta, datos.estancia, "instalacion");
    }
    if(datos.iluminacion){
      this.presupuestoService.crearElementoEstancia(datos.planta, datos.estancia, "iluminacion");
    }
    if(datos.ventanas > 0){
      for (let index = 0; index < datos.ventanas; index++) {
        this.presupuestoService.crearElementoEstancia(datos.planta, datos.estancia, "ventana");
      }
    }
    if(datos.puertas > 0){
      for (let index = 0; index < datos.puertas; index++) {
        this.presupuestoService.crearElementoEstancia(datos.planta, datos.estancia, "puerta");
      }
    }
    if(datos.armarios > 0){
      for (let index = 0; index < datos.armarios; index++) {
        this.presupuestoService.crearElementoEstancia(datos.planta, datos.estancia, "armario");
      }
    }
    if(datos.radiadores > 0){
      for (let index = 0; index < datos.radiadores; index++) {
        this.presupuestoService.crearElementoEstancia(datos.planta, datos.estancia, "radiador");
      }
    }
    if(datos.climatizacion > 0){
      for (let index = 0; index < datos.climatizacion; index++) {
        this.presupuestoService.crearElementoEstancia(datos.planta, datos.estancia, "climatizacion");
      }
    }
    if(datos.baneras > 0){
      for (let index = 0; index < datos.baneras; index++) {
        this.presupuestoService.crearElementoEstancia(datos.planta, datos.estancia, "banera");
      }
    }
    if(datos.duchas > 0){
      for (let index = 0; index < datos.duchas; index++) {
        this.presupuestoService.crearElementoEstancia(datos.planta, datos.estancia, "ducha");
      }
    }
    if(datos.lavabos > 0){
      for (let index = 0; index < datos.lavabos; index++) {
        this.presupuestoService.crearElementoEstancia(datos.planta, datos.estancia, "lavabo");
      }
    }
    if(datos.inodoros > 0){
      for (let index = 0; index < datos.inodoros; index++) {
        this.presupuestoService.crearElementoEstancia(datos.planta, datos.estancia, "inodoro");
      }
    }
    if(datos.bidets > 0){
      for (let index = 0; index < datos.bidets; index++) {
        this.presupuestoService.crearElementoEstancia(datos.planta, datos.estancia, "bidet");
      }
    }
  }

  eliminarElemento(_planta, _estancia, _elemento){
    this.presupuestoService.eliminarElementoEstancia(_planta, _estancia, _elemento, "");
  }

  eliminarElementoById(_planta, _estancia, _elemento, _id){
    this.presupuestoService.eliminarElementoEstancia(_planta, _estancia, _elemento, _id);
  }

  crearElementoEstancia(_planta, _estancia, _elemento){
    this.presupuestoService.crearElementoEstancia(_planta, _estancia, _elemento);
  }

  async verMobiliarioObra(_planta, _estancia){
    const modal = await this.modalCtrl.create({
      component: MobiliarioObraPage,
      componentProps: {
        s_planta: _planta,
        s_estancia: _estancia
      }
    });
    
    await modal.present();

    const {data} = await modal.onWillDismiss();
  }


  async verVentanaById(_planta, _estancia, _id){
        const modal = await this.modalCtrl.create({
          component: VentanaPage,
          componentProps: {
            s_planta: _planta,
            s_estancia: _estancia,
            s_id: _id
          }
        });
        
        await modal.present();

        const {data} = await modal.onWillDismiss();
  }

  async verPuertaById(_planta, _estancia, _id){
    const modal = await this.modalCtrl.create({
      component: PuertaPage,
      componentProps: {
        s_planta: _planta,
        s_estancia: _estancia,
        s_id: _id
      }
    });
    
    await modal.present();

    const {data} = await modal.onWillDismiss();
  }

  async verArmarioById(_planta, _estancia, _id){
    const modal = await this.modalCtrl.create({
      component: ArmarioPage,
      componentProps: {
        s_planta: _planta,
        s_estancia: _estancia,
        s_id: _id
      }
    });
    
    await modal.present();

    const {data} = await modal.onWillDismiss();
  }

  async verRadiadorById(_planta, _estancia, _id){
    const modal = await this.modalCtrl.create({
      component: RadiadorPage,
      componentProps: {
        s_planta: _planta,
        s_estancia: _estancia,
        s_id: _id
      }
    });
    
    await modal.present();

    const {data} = await modal.onWillDismiss();
  }

  async verClimatizacionById(_planta, _estancia, _id){
    const modal = await this.modalCtrl.create({
      component: ClimatizacionPage,
      componentProps: {
        s_planta: _planta,
        s_estancia: _estancia,
        s_id: _id
      }
    });
    
    await modal.present();

    const {data} = await modal.onWillDismiss();
  }

  async verBaneraById(_planta, _estancia, _id){
    const modal = await this.modalCtrl.create({
      component: BaneraPage,
      componentProps: {
        s_planta: _planta,
        s_estancia: _estancia,
        s_id: _id
      }
    });
    
    await modal.present();

    const {data} = await modal.onWillDismiss();
  }

  async verDuchaById(_planta, _estancia, _id){
    const modal = await this.modalCtrl.create({
      component: DuchaPage,
      componentProps: {
        s_planta: _planta,
        s_estancia: _estancia,
        s_id: _id
      }
    });
    
    await modal.present();

    const {data} = await modal.onWillDismiss();
  }

  async verLavaboById(_planta, _estancia, _id){
    const modal = await this.modalCtrl.create({
      component: LavaboPage,
      componentProps: {
        s_planta: _planta,
        s_estancia: _estancia,
        s_id: _id
      }
    });
    
    await modal.present();

    const {data} = await modal.onWillDismiss();
  }

  async verInodoroById(_planta, _estancia, _id){
    const modal = await this.modalCtrl.create({
      component: InodoroPage,
      componentProps: {
        s_planta: _planta,
        s_estancia: _estancia,
        s_id: _id
      }
    });
    
    await modal.present();

    const {data} = await modal.onWillDismiss();
  }

  async verBidetById(_planta, _estancia, _id){
    const modal = await this.modalCtrl.create({
      component: BidetPage,
      componentProps: {
        s_planta: _planta,
        s_estancia: _estancia,
        s_id: _id
      }
    });
    
    await modal.present();

    const {data} = await modal.onWillDismiss();
  }
}
