import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fabricante',
  templateUrl: './fabricante.component.html',
  styleUrls: ['./fabricante.component.scss'],
})
export class FabricanteComponent implements OnInit {

  @Input() elemento;

  constructor() { }

  ngOnInit() {}

}
