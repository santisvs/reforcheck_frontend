import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { PropiedadInterface } from '../../models/propiedad';
import { PlantaInterface } from '../../models/planta';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit  {

  public propiedad: PropiedadInterface;
  public title: string;
  public datosPropiedadValidado: boolean;
  

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.title = "Datos de la propiedad";
  }

  ngOnInit() {
    console.log("Registrar una propiedad");
    this.datosPropiedadValidado=false;
    this.propiedad = {
      nombre_propietario: '',
      dni_propietario: '',
      telf_propietario: '',
      email_propietario: '',
      direccion: '',
      tipo: '',
      gps: '',
      fecha_construccion: new Date('1700-01-01'),
      fecha_ultima_reforma: new Date('1700-01-01'),
      nombre_reforchecker: '',
      plantas: []
    }
  }

  validarDatosPropiedad(fDatosPropiedad: NgForm){
    console.log("Validar Datos propiedad");
    console.log(this.propiedad);
    console.log(fDatosPropiedad);
    this.datosPropiedadValidado = true;
    this.crearPlanta();
  }

  /*registrarDatosIniciales(datIniForm){
    if (!datIniForm.nombre_propietario || !datIniForm.dni_propietario || !datIniForm.tlf_propietario || 
      !datIniForm.email_propietario || !datIniForm.fecha_contruccion_edificio || !datIniForm.fecha_ultima_reforma || 
      !datIniForm.nombre_reforchecker) {
      return alert('Comprobar que los campos obligatorios esten rellenos correctamente');
    } else {
      this.datIniForm = {
        nombre_propietario: datIniForm.nombre_propietario,
        dni_propietario: datIniForm.dni_propietario,
        tlf_propietario: datIniForm.tlf_propietario,
        email_propietario: datIniForm.email_propietario,
        fecha_contruccion_edificio: datIniForm.fecha_contruccion_edificio,
        fecha_ultima_reforma: datIniForm.fecha_ultima_reforma,
        nombre_reforchecker: datIniForm.nombre_reforchecker
      };
    }
  }*/

  crearPlanta(){
    let numPlantas = this.propiedad.plantas.length + 1;
    let plantaVacia : PlantaInterface = {
      nombre: "planta " + numPlantas,
      estancias: []
    };
    this.propiedad.plantas.push(plantaVacia);
  }

  crearPlantaValue(numeroPlantas){
    for (let i = 0; i < numeroPlantas.length; i++) {
      let plantaVacia : PlantaInterface;
      plantaVacia.nombre = "planta " + i;
      this.propiedad.plantas.push(plantaVacia);
    }
  }

  

}
