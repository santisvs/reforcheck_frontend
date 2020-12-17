import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CONFIG } from '../configuracion';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public url: string;
  private auth : string;

  constructor(private _http: HttpClient) {
    this.url = CONFIG.url;
  }

  loginUser(values: any){
    const bodyData = new HttpParams().set("username", values.username).set("password", values.password).set("grant_type", "password");
    this.auth = CONFIG.frontend_client + ":" + CONFIG.frontend_client_pass;
    var headersData = new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded").set("Authorization", "Basic " + btoa(this.auth));
    
    return this._http.post(this.url + 'security/oauth/token', bodyData.toString(), {headers:headersData}).pipe(map((result: Response) => result));
  }
}
