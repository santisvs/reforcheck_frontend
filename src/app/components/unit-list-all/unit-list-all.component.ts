import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UnitInterface } from 'src/app/models/unit';
import { UnitService } from 'src/app/services/unit/unit.service';

@Component({
  selector: 'app-unit-list-all',
  templateUrl: './unit-list-all.component.html',
  styleUrls: ['./unit-list-all.component.scss'],
  providers: [UnitService]
})
export class UnitListAllComponent implements OnInit {

  public units : UnitInterface[];
  public errorMensaje: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _unitService: UnitService,
  ) { }

  ngOnInit() {
    this.getUnits();
  }

  getUnits(){
    
    this._unitService.getUnits().subscribe(
      result => {
        console.log(result);
        this.units = <any>result;
        console.log(this.units);        
      },
      error => {
        console.log('ERROR SERVICIO');
        this.errorMensaje = <any>error;
        if(this.errorMensaje != null){
          console.log(this.errorMensaje);
        }
        
      }
    ); 
  }
}
