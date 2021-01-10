import { Injectable } from '@angular/core';
import { EstanciaInterface } from 'src/app/models/estancia';
import { EstanciaHumedaInterface } from 'src/app/models/estancia-humeda';
import { PlantaInterface } from 'src/app/models/planta';
import { PropiedadInterface } from 'src/app/models/propiedad';
import { Cantidad } from 'src/app/models/tipos/cantidad.enum';
import { Unidad } from 'src/app/models/tipos/unidad.enum';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {

  public propiedad: PropiedadInterface; 

  constructor() { }

  crearPropiedad(){
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
    return this.propiedad;
  }

  getPropiedad(){
    return this.propiedad;
  }

  crearPlanta(){
    let numPlantas = this.propiedad.plantas.length + 1;
    let plantaVacia : PlantaInterface = {
      nombre: "planta " + numPlantas,
      estancias: []
    };
    this.propiedad.plantas.push(plantaVacia);
  }

  crearEstancia(_planta: string, _tipo: string){
    this.propiedad.plantas.forEach(planta => {
      if(planta.nombre == _planta){
        if(_tipo == "HUMEDA"){
          let estanciaVacia : EstanciaHumedaInterface = {

          }
        } else {
          let estanciaVacia : EstanciaInterface = {
    tipo : '',
    subtipo : '',
    medida  : {
      alto : 0,
      largo : 0,
      ancho : 0,
      unidad : Unidad.SIN_DEFINIR
          },
    ventanas : [],
    puertas : [],
    armarios : [],
    radiadores : [],
    climatizacion : [],
    mobiliario_obra : {
      cantidad : 0,
      unidad : Unidad.SIN_DEFINIR,
      desmontable : false
    },
    techo : {
      falso_techo : false,
      moldura : false,
      demuele : false,
    },
    revestimiento : {
      medida : {
        alto : 0,
      largo : 0,
      unidad : Unidad.SIN_DEFINIR
      },
    ceramico : false,
    friso : false,
    panelado : false,
    moldura : false,
    demuele : false,
    },
    solado : {
      tipo : '',
    medida : {
      alto : 0,
    largo : 0,
    unidad : Unidad.SIN_DEFINIR
    },
    },
    rodapie : {
      tipo : '',
    alto : {
      tamano : 0,
      unidad : Unidad.SIN_DEFINIR
    },
    largo : {
      tamano : 0,
      unidad : Unidad.SIN_DEFINIR
    },
    ancho : {
      tamano : 0,
      unidad : Unidad.SIN_DEFINIR
    },
    },
    pintura : {
      fisuracion : Cantidad.SIN_DEFINIR,
    papel_pintado : false,
    gotelet : false,
    raspado : false,
    color : '',
    acabado : '',
    },
    instalacion : {
      medida : {
        alto : 0,
      largo : 0,
      unidad : Unidad.SIN_DEFINIR
      },
    caja_registro : 0,
    interruptores_conmutados : 0,
    interruptores_no_conmutados : 0,
    enchufes : 0,
    toma_tv : 0,
    toma_telef : 0,
    toma_datos : 0,
    },
    iluminacion : {
      empotrada : false,
    focos : 0,
    down_lights : 0,
    tiras_led : []
    }
          }
          planta.estancias.push(estanciaVacia);
        }
       
      }
    });
  }

  setDatosPropiedad(_propiedad: PropiedadInterface){
    this.propiedad.nombre_propietario = _propiedad.nombre_propietario;
    this.propiedad.dni_propietario = _propiedad.dni_propietario;
    this.propiedad.telf_propietario = _propiedad.telf_propietario;
    this.propiedad.email_propietario = _propiedad.email_propietario;
  }

  setDatosInmueble(_propiedad: PropiedadInterface){
    this.propiedad.direccion = _propiedad.direccion;
    this.propiedad.tipo = _propiedad.tipo;
    this.propiedad.gps = _propiedad.gps;
    this.propiedad.fecha_construccion = _propiedad.fecha_construccion;
    this.propiedad.fecha_ultima_reforma = _propiedad.fecha_ultima_reforma;
  }
}
