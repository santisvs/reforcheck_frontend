import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OpcionMenu } from 'src/app/models/interfaces/opcion-menu';

@Injectable({
  providedIn: 'root'
})
export class CommonsService {

  constructor( private http:HttpClient ) { }

  getMenuOpciones(){
    console.log("CONSULTA");
    let res = this.http.get<OpcionMenu[]>('/assets/data/menu-opciones.json');
    console.log(res);
    return res;
  }
}
