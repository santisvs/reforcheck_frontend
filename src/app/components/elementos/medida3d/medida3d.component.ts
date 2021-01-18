import { Component, Input } from '@angular/core';
import { Tresd } from 'src/app/models/estancia/commons/tresd';

@Component({
  selector: 'app-medida3d',
  templateUrl: './medida3d.component.html',
  styleUrls: ['./medida3d.component.scss'],
})
export class Medida3dComponent {

  @Input() elemento : Tresd;
  
  constructor() { }

  ngOnInit() {}

}
