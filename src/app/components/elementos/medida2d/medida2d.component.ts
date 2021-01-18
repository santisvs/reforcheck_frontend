import { Component, Input } from '@angular/core';
import { Dosd } from 'src/app/models/estancia/commons/dosd';

@Component({
  selector: 'app-medida2d',
  templateUrl: './medida2d.component.html',
  styleUrls: ['./medida2d.component.scss'],
})
export class Medida2dComponent {

  @Input() elemento : Dosd;

}
