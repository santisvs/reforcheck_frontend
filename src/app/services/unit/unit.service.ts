import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CONFIG } from '../configuracion';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  public url: string;

  constructor(private _http: HttpClient) { 
    this.url = CONFIG.url;
  }

  getUnits(){
    return this._http.get(this.url + 'units').pipe(map((result: Response) => result));
  }
}
