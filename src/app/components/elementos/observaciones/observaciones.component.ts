import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-observaciones',
  templateUrl: './observaciones.component.html',
  styleUrls: ['./observaciones.component.scss'],
})
export class ObservacionesComponent implements OnInit {

  @Input() elemento;

  constructor() { }

  ngOnInit() {}

}
