import { Injectable } from '@angular/core';
import { Estancia } from 'src/app/models/estancia';
import { Banera } from 'src/app/models/estancia/banera';
import { Planta } from 'src/app/models/planta';
import { Propiedad } from 'src/app/models/propiedad';
import { Cantidad } from 'src/app/models/tipos/cantidad.enum';
import { Material } from 'src/app/models/tipos/material.enum';
import { Unidad } from 'src/app/models/tipos/unidad.enum';
import { PlantasPage } from 'src/app/pages/presupuesto/plantas/plantas.page';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {

  public propiedad: Propiedad; 

  constructor() { }

  crearPropiedad(){
    this.propiedad = new Propiedad();
    this.crearPlanta();
    return this.propiedad;
  }

  getPropiedad(){
    return this.propiedad;
  }

  crearPlanta(){
    let plantaVacia : Planta = new Planta();
    plantaVacia.numero = this.propiedad.plantas.length + 1;
    this.propiedad.plantas.push(plantaVacia);
  }

  crearEstancia(_planta: number, _tipo: string){
    this.propiedad.plantas.forEach(planta => {
      if(planta.numero == _planta){
        let estanciaVacia : Estancia = new Estancia();
        estanciaVacia.tipo = _tipo;
        planta.estancias.push(estanciaVacia); 
      }
    });
  }

  crearBanera(_planta, _estancia){
    
    //this.propiedad.plantas[_planta].estancias[_estancia].bañeras.push(baneraVacia);
  }

  setDatosPropiedad(_propiedad: Propiedad){
    this.propiedad.nombre_propietario = _propiedad.nombre_propietario;
    this.propiedad.dni_propietario = _propiedad.dni_propietario;
    this.propiedad.telf_propietario = _propiedad.telf_propietario;
    this.propiedad.email_propietario = _propiedad.email_propietario;
  }

  setDatosInmueble(_propiedad: Propiedad){
    this.propiedad.direccion = _propiedad.direccion;
    this.propiedad.tipo = _propiedad.tipo;
    this.propiedad.gps = _propiedad.gps;
    this.propiedad.fecha_construccion = _propiedad.fecha_construccion;
    this.propiedad.fecha_ultima_reforma = _propiedad.fecha_ultima_reforma;
  }
}
