import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectElemento } from 'src/app/models/estancia/select-elemento';

@Component({
  selector: 'app-select-elementos',
  templateUrl: './select-elementos.component.html',
  styleUrls: ['./select-elementos.component.scss'],
})
export class SelectElementosComponent implements OnInit {

  @Input() estancia : number;
  @Input() planta : number;
  @Output() crearElementos = new EventEmitter();

  public elementos : SelectElemento;

  constructor() {
    console.log("CONSTRUYEEEE");
    
  }

  ngOnInit() {
    console.log("INICIALIZAAAAA");
    this.resetValores();
  }

  limpiarForm(){
    this.elementos = new SelectElemento();
    this.elementos.planta = this.planta;
    this.elementos.estancia = this.estancia;
  }

  resetValores(){
    this.elementos = new SelectElemento();
    this.elementos.planta = this.planta;
    this.elementos.estancia = this.estancia;
  }

  addElementos(){
    let elem_aux = new SelectElemento();
    elem_aux.estancia = this.estancia;
    elem_aux.planta = this.planta;
    if(!this.elementos.isEqual(elem_aux)){
      this.crearElementos.emit(this.elementos);
      this.resetValores();
    }
  }
  
}
