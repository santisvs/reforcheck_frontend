import { Component, Input } from '@angular/core';
import { Unod } from 'src/app/models/estancia/commons/unod';

@Component({
  selector: 'app-tramos',
  templateUrl: './tramos.component.html',
  styleUrls: ['./tramos.component.scss'],
})
export class TramosComponent {

  @Input() elemento;
  @Input() tipo;

  crearTramo(){
    let nuevoTramo = new Unod();
    this.elemento.tramos.push(nuevoTramo);
  }

}
