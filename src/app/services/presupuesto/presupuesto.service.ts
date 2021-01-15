import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { Estancia } from 'src/app/models/estancia';
import { Armario } from 'src/app/models/estancia/armario';
import { Banera } from 'src/app/models/estancia/banera';
import { Bidet } from 'src/app/models/estancia/bidet';
import { Climatizacion } from 'src/app/models/estancia/climatizacion';
import { Unod } from 'src/app/models/estancia/commons/unod';
import { Ducha } from 'src/app/models/estancia/ducha';
import { Iluminacion } from 'src/app/models/estancia/iluminacion';
import { Inodoro } from 'src/app/models/estancia/inodoro';
import { Instalacion } from 'src/app/models/estancia/instalacion';
import { Lavabo } from 'src/app/models/estancia/lavabo';
import { MobiliarioObra } from 'src/app/models/estancia/mobiliario-obra';
import { Pintura } from 'src/app/models/estancia/pintura';
import { Puerta } from 'src/app/models/estancia/puerta';
import { Radiador } from 'src/app/models/estancia/radiador';
import { Revestimiento } from 'src/app/models/estancia/revestimiento';
import { Rodapie } from 'src/app/models/estancia/rodapie';
import { Solado } from 'src/app/models/estancia/solado';
import { Techo } from 'src/app/models/estancia/techo';
import { Ventana } from 'src/app/models/estancia/ventana';
import { Planta } from 'src/app/models/planta';
import { Propiedad } from 'src/app/models/propiedad';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {

  public planta: Planta;
  public propiedad: Propiedad;
  public propiedades : Array<Propiedad>; 

  constructor() { 
    this.propiedades = [];
  }

  crearId(){
    return "ES-"+UUID.UUID()+"-"+Date.now();
  }

  //Buenas
  addPropiedad(){
    let _estancia = new Estancia();
    _estancia.id = this.crearId();
    _estancia.numero = 1;
    let _planta = new Planta;
    _planta.id = this.crearId();
    _planta.estancias.push(_estancia);
    _planta.numero = 1;
    this.propiedad = new Propiedad();
    this.propiedad.id = this.crearId();
    this.propiedad.plantas.push(_planta);
    this.propiedades.push(this.propiedad);
    return this.propiedades;
  }

  //BUena
  getAllPropiedades(){
    return this.propiedades;
  }

  //BUena
  getPropiedadById(_idPropiedad:string){
    return this.propiedades.find(elem => elem.id === _idPropiedad);
  }

  //BUena
  getPlantaById(_idPropiedad: string, _idPlanta: string){
    return this.getPropiedadById(_idPropiedad).plantas.find(elem => elem.id === _idPlanta);
  }

  //BUena
  getEstanciaById(_idPropiedad: string, _idPlanta: string, _idEstancia: string){
    return this.getPlantaById(_idPropiedad,_idPlanta).estancias.find(elem => elem.id === _idEstancia);
  }

  //BUena
  getElementoById(_idPropiedad: string, _idPlanta: string, _idEstancia: string, _idElemento: string, _tipo: string){
    switch (_tipo) {
      case "mobiliario_obra":
        return this.getEstanciaById(_idPropiedad,_idPlanta,_idEstancia).mobiliario_obra;
        break;
      case "techo":
        return this.getEstanciaById(_idPropiedad,_idPlanta,_idEstancia).techo;
        break;
      case "revestimiento":
        return this.getEstanciaById(_idPropiedad,_idPlanta,_idEstancia).revestimiento;
        break;
      case "solado":
        return this.getEstanciaById(_idPropiedad,_idPlanta,_idEstancia).solado;
        break;
      case "rodapie":
        return this.getEstanciaById(_idPropiedad,_idPlanta,_idEstancia).rodapie;
        break;
      case "pintura":
        return this.getEstanciaById(_idPropiedad,_idPlanta,_idEstancia).pintura;
        break;
      case "instalacion":
        return this.getEstanciaById(_idPropiedad,_idPlanta,_idEstancia).instalacion;
        break;
      case "iluminacion":
        return this.getEstanciaById(_idPropiedad,_idPlanta,_idEstancia).iluminacion;
        break;
      case "ventana":
        return this.getEstanciaById(_idPropiedad,_idPlanta,_idEstancia).ventanas.find(elem => elem.id === _idElemento);
        break;
      case "puerta":
        return this.getEstanciaById(_idPropiedad,_idPlanta,_idEstancia).puertas.find(elem => elem.id === _idElemento);
        break;
      case "armario":
        return this.getEstanciaById(_idPropiedad,_idPlanta,_idEstancia).armarios.find(elem => elem.id === _idElemento);
        break;
      case "radiador":
        return this.getEstanciaById(_idPropiedad,_idPlanta,_idEstancia).radiadores.find(elem => elem.id === _idElemento);
        break;
      case "climatizacion":
        return this.getEstanciaById(_idPropiedad,_idPlanta,_idEstancia).climatizacion.find(elem => elem.id === _idElemento);
        break;
      case "banera":
        return this.getEstanciaById(_idPropiedad,_idPlanta,_idEstancia).baneras.find(elem => elem.id === _idElemento);
        break;
      case "ducha":
        return this.getEstanciaById(_idPropiedad,_idPlanta,_idEstancia).duchas.find(elem => elem.id === _idElemento);
        break;
      case "lavabo":
        return this.getEstanciaById(_idPropiedad,_idPlanta,_idEstancia).lavabos.find(elem => elem.id === _idElemento);
        break;
      case "inodoro":
        return this.getEstanciaById(_idPropiedad,_idPlanta,_idEstancia).inodoros.find(elem => elem.id === _idElemento);
        break;
      case "bidet":
        return this.getEstanciaById(_idPropiedad,_idPlanta,_idEstancia).bidets.find(elem => elem.id === _idElemento);
        break;
      default:
        break;
    }
  }

  updateEstancia(_idPropiedad: string, _idPlanta: string, _idEstancia: string, _estancia: Estancia){
    let index : number = this.getPlantaById(_idPropiedad,_idPlanta).estancias.findIndex(elem => elem.id === _idEstancia);
    let estancia: Estancia = this.getEstanciaById(_idPropiedad,_idPlanta,_idEstancia);
    estancia.numero = _estancia.numero
    estancia.nombre = _estancia.nombre
    estancia.tipo = _estancia.tipo
    estancia.subtipo = _estancia.subtipo
    estancia.medida = _estancia.medida
    this.getPlantaById(_idPropiedad,_idPlanta).estancias[index] = estancia;
  }

  //BUena
  crearPlantaInPropiedad(_idPropiedad: string){
    this.propiedad = this.getPropiedadById(_idPropiedad);
    let plantaVacia : Planta = new Planta();
    plantaVacia.id = this.crearId();
    plantaVacia.numero = this.propiedad.plantas.length + 1;
    this.propiedad.plantas.push(plantaVacia);
  }

  //BUena
  crearEstanciaInPlantaInPropiedad(_idPropiedad: string, _idPlanta:string){
    this.planta = this.getPlantaById(_idPropiedad,_idPlanta);
    let estanciaVacia : Estancia = new Estancia();
    estanciaVacia.id = this.crearId();
    estanciaVacia.numero = this.planta.estancias.length + 1;
    this.planta.estancias.push(estanciaVacia);
  }

  crearEstancia(_planta: number, _tipo: string){
    this.propiedad.plantas.forEach(planta => {
      if(planta.numero == _planta){
        let estanciaVacia : Estancia = new Estancia();
        estanciaVacia.id = this.crearId();
        estanciaVacia.tipo = _tipo;
        estanciaVacia.numero = planta.estancias.length + 1;
        planta.estancias.push(estanciaVacia); 
      }
    });
  }

  //BUENAS
  crearElementoById(_idPropiedad: string, _idPlanta: string, _idEstancia, _elemento: string){
    let elemento : any;
    switch (_elemento) {
      case "mobiliario_obra":
        elemento = new MobiliarioObra();
        elemento.id = this.crearId();
        this.getEstanciaById(_idPropiedad,_idPlanta,_idEstancia).mobiliario_obra = elemento;
        break;
      case "techo":
        elemento = new Techo();
        elemento.id = this.crearId();
        this.getEstanciaById(_idPropiedad,_idPlanta,_idEstancia).techo = elemento;
        break;
      case "revestimiento":
        elemento = new Revestimiento();
        elemento.id = this.crearId();
        this.getEstanciaById(_idPropiedad,_idPlanta,_idEstancia).revestimiento = elemento;
        break;
      case "solado":
        elemento = new Solado();
        elemento.id = this.crearId();
        this.getEstanciaById(_idPropiedad,_idPlanta,_idEstancia).solado = elemento;
        break;
      case "rodapie":
        elemento = new Rodapie();
        elemento.id = this.crearId();
        this.getEstanciaById(_idPropiedad,_idPlanta,_idEstancia).rodapie = elemento;
        break;
      case "pintura":
        elemento = new Pintura();
        elemento.id = this.crearId();
        this.getEstanciaById(_idPropiedad,_idPlanta,_idEstancia).pintura = elemento;
        break;
      case "instalacion":
        elemento = new Instalacion();
        elemento.id = this.crearId();
        this.getEstanciaById(_idPropiedad,_idPlanta,_idEstancia).instalacion = elemento;
        break;
      case "iluminacion":
        elemento = new Iluminacion();
        elemento.id = this.crearId();
        this.getEstanciaById(_idPropiedad,_idPlanta,_idEstancia).iluminacion = elemento;
        break;
      case "ventana":
        elemento = new Ventana();
        elemento.id = this.crearId();
        this.getEstanciaById(_idPropiedad,_idPlanta,_idEstancia).ventanas.push(elemento);
        break;
      case "puerta":
        elemento = new Puerta();
        elemento.id = this.crearId();
        this.getEstanciaById(_idPropiedad,_idPlanta,_idEstancia).puertas.push(elemento);
        break;
      case "armario":
        elemento = new Armario();
        elemento.id = this.crearId();
        this.getEstanciaById(_idPropiedad,_idPlanta,_idEstancia).armarios.push(elemento);
        break;
      case "radiador":
        elemento = new Radiador();
        elemento.id = this.crearId();
        this.getEstanciaById(_idPropiedad,_idPlanta,_idEstancia).radiadores.push(elemento);
        break;
      case "climatizacion":
        elemento = new Climatizacion();
        elemento.id = this.crearId();
        this.getEstanciaById(_idPropiedad,_idPlanta,_idEstancia).climatizacion.push(elemento);
        break;
      case "banera":
        elemento = new Banera();
        elemento.id = this.crearId();
        this.getEstanciaById(_idPropiedad,_idPlanta,_idEstancia).baneras.push(elemento);
        break;
      case "ducha":
        elemento = new Ducha();
        elemento.id = this.crearId();
        this.getEstanciaById(_idPropiedad,_idPlanta,_idEstancia).duchas.push(elemento);
        break;
      case "lavabo":
        elemento = new Lavabo();
        elemento.id = this.crearId();
        this.getEstanciaById(_idPropiedad,_idPlanta,_idEstancia).lavabos.push(elemento);
        break;
      case "inodoro":
        elemento = new Inodoro();
        elemento.id = this.crearId();
        this.getEstanciaById(_idPropiedad,_idPlanta,_idEstancia).inodoros.push(elemento);
        break;
      case "bidet":
        elemento = new Bidet();
        elemento.id = this.crearId();
        this.getEstanciaById(_idPropiedad,_idPlanta,_idEstancia).bidets.push(elemento);
        break;
      default:
        break;
    }
  }

  crearElementoEstancia(_planta: number, _estancia: number, _elemento: string){
    let elemento : any;
    switch (_elemento) {
      case "mobiliario_obra":
        elemento = new MobiliarioObra();
        elemento.id = this.crearId();
        this.propiedad.plantas[_planta-1].estancias[_estancia-1].mobiliario_obra = elemento;
        break;
      case "techo":
        elemento = new Techo();
        elemento.id = this.crearId();
        this.propiedad.plantas[_planta-1].estancias[_estancia-1].techo = elemento;
        break;
      case "revestimiento":
        elemento = new Revestimiento();
        elemento.id = this.crearId();
        this.propiedad.plantas[_planta-1].estancias[_estancia-1].revestimiento = elemento;
        break;
      case "solado":
        elemento = new Solado();
        elemento.id = this.crearId();
        this.propiedad.plantas[_planta-1].estancias[_estancia-1].solado = elemento;
        break;
      case "rodapie":
        elemento = new Rodapie();
        elemento.id = this.crearId();
        this.propiedad.plantas[_planta-1].estancias[_estancia-1].rodapie = elemento;
        break;
      case "pintura":
        elemento = new Pintura();
        elemento.id = this.crearId();
        this.propiedad.plantas[_planta-1].estancias[_estancia-1].pintura = elemento;
        break;
      case "instalacion":
        elemento = new Instalacion();
        elemento.id = this.crearId();
        this.propiedad.plantas[_planta-1].estancias[_estancia-1].instalacion = elemento;
        break;
      case "iluminacion":
        elemento = new Iluminacion();
        elemento.id = this.crearId();
        this.propiedad.plantas[_planta-1].estancias[_estancia-1].iluminacion = elemento;
        break;
      case "ventana":
        elemento = new Ventana();
        elemento.id = this.crearId();
        this.propiedad.plantas[_planta-1].estancias[_estancia-1].ventanas.push(elemento);
        break;
      case "puerta":
        elemento = new Puerta();
        elemento.id = this.crearId();
        this.propiedad.plantas[_planta-1].estancias[_estancia-1].puertas.push(elemento);
        break;
      case "armario":
        elemento = new Armario();
        elemento.id = this.crearId();
        this.propiedad.plantas[_planta-1].estancias[_estancia-1].armarios.push(elemento);
        break;
      case "radiador":
        elemento = new Radiador();
        elemento.id = this.crearId();
        this.propiedad.plantas[_planta-1].estancias[_estancia-1].radiadores.push(elemento);
        break;
      case "climatizacion":
        elemento = new Climatizacion();
        elemento.id = this.crearId();
        this.propiedad.plantas[_planta-1].estancias[_estancia-1].climatizacion.push(elemento);
        break;
      case "banera":
        elemento = new Banera();
        elemento.id = this.crearId();
        this.propiedad.plantas[_planta-1].estancias[_estancia-1].baneras.push(elemento);
        break;
      case "ducha":
        elemento = new Ducha();
        elemento.id = this.crearId();
        this.propiedad.plantas[_planta-1].estancias[_estancia-1].duchas.push(elemento);
        break;
      case "lavabo":
        elemento = new Lavabo();
        elemento.id = this.crearId();
        this.propiedad.plantas[_planta-1].estancias[_estancia-1].lavabos.push(elemento);
        break;
      case "inodoro":
        elemento = new Inodoro();
        elemento.id = this.crearId();
        this.propiedad.plantas[_planta-1].estancias[_estancia-1].inodoros.push(elemento);
        break;
      case "bidet":
        elemento = new Bidet();
        elemento.id = this.crearId();
        this.propiedad.plantas[_planta-1].estancias[_estancia-1].bidets.push(elemento);
        break;
      default:
        break;
    }
  }

  eliminarElementoEstancia(_planta: number, _estancia: number, _elemento: string, _id: string){
    let elemento : any;
    switch (_elemento) {
      case "mobiliario_obra":
        this.propiedad.plantas[_planta-1].estancias[_estancia-1].mobiliario_obra = null;
        break;
      case "techo":
        this.propiedad.plantas[_planta-1].estancias[_estancia-1].techo = null;
        break;
      case "revestimiento":
        this.propiedad.plantas[_planta-1].estancias[_estancia-1].revestimiento = null;
        break;
      case "solado":
        this.propiedad.plantas[_planta-1].estancias[_estancia-1].solado = null;
        break;
      case "rodapie":
        this.propiedad.plantas[_planta-1].estancias[_estancia-1].rodapie = null;
        break;
      case "pintura":
        this.propiedad.plantas[_planta-1].estancias[_estancia-1].pintura = null;
        break;
      case "instalacion":
        this.propiedad.plantas[_planta-1].estancias[_estancia-1].instalacion = null;
        break;
      case "iluminacion":
        this.propiedad.plantas[_planta-1].estancias[_estancia-1].iluminacion = null;
        break;
      case "ventana":
        let index : number = this.propiedad.plantas[_planta-1].estancias[_estancia-1].baneras.findIndex(elem => elem.id === _id);
        this.propiedad.plantas[_planta-1].estancias[_estancia-1].ventanas.splice(index, 1);
        break;
      case "puerta":
        elemento = new Puerta();
        elemento.id = this.crearId();
        this.propiedad.plantas[_planta-1].estancias[_estancia-1].puertas.push(elemento);
        break;
      case "armario":
        elemento = new Armario();
        elemento.id = this.crearId();
        this.propiedad.plantas[_planta-1].estancias[_estancia-1].armarios.push(elemento);
        break;
      case "radiador":
        elemento = new Radiador();
        elemento.id = this.crearId();
        this.propiedad.plantas[_planta-1].estancias[_estancia-1].radiadores.push(elemento);
        break;
      case "climatizacion":
        elemento = new Climatizacion();
        elemento.id = this.crearId();
        this.propiedad.plantas[_planta-1].estancias[_estancia-1].climatizacion.push(elemento);
        break;
      case "banera":
        elemento = new Banera();
        elemento.id = this.crearId();
        this.propiedad.plantas[_planta-1].estancias[_estancia-1].baneras.push(elemento);
        break;
      case "ducha":
        elemento = new Ducha();
        elemento.id = this.crearId();
        this.propiedad.plantas[_planta-1].estancias[_estancia-1].duchas.push(elemento);
        break;
      case "lavabo":
        elemento = new Lavabo();
        elemento.id = this.crearId();
        this.propiedad.plantas[_planta-1].estancias[_estancia-1].lavabos.push(elemento);
        break;
      case "inodoro":
        elemento = new Inodoro();
        elemento.id = this.crearId();
        this.propiedad.plantas[_planta-1].estancias[_estancia-1].inodoros.push(elemento);
        break;
      case "bidet":
        elemento = new Bidet();
        elemento.id = this.crearId();
        this.propiedad.plantas[_planta-1].estancias[_estancia-1].bidets.push(elemento);
        break;
      default:
        break;
    }
  }

  crearTramo(_planta: number, _estancia: number, _id: string, _tipo: string){
    if(_tipo == "banera"){
      let index : number = this.propiedad.plantas[_planta-1].estancias[_estancia-1].baneras.findIndex(elem => elem.id === _id);
      let banera : Banera = this.propiedad.plantas[_planta-1].estancias[_estancia-1].baneras.find(elem => elem.id === _id);
      banera.tramos.push(new Unod());
      this.propiedad.plantas[_planta-1].estancias[_estancia-1].baneras[index] = banera;
    } else if (_tipo == "ducha"){
      let index : number = this.propiedad.plantas[_planta-1].estancias[_estancia-1].duchas.findIndex(elem => elem.id === _id);
      let ducha : Ducha = this.propiedad.plantas[_planta-1].estancias[_estancia-1].duchas.find(elem => elem.id === _id);
      ducha.tramos.push(new Unod());
      this.propiedad.plantas[_planta-1].estancias[_estancia-1].duchas[index] = ducha;
    }
    
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
