import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.scss'],
})
export class VariablesComponent implements OnInit {

  @Input() estadoVariables;

  public tabInmuebleDisabled: boolean;
  public tabPlantasDisabled: boolean;

  constructor() { }

  ngOnInit() {
    this.tabInmuebleDisabled = true;
    this.tabPlantasDisabled = true;
  }

  activaTab(tab: string){
    console.log("Evento");
    console.log(tab);
    if(tab == "inmueble"){
      this.tabInmuebleDisabled = false;
    }
    if(tab == "planta"){
      this.tabInmuebleDisabled = false;
      this.tabPlantasDisabled = false;
    }
  }

}
