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
  //Llamada a microservicio
  /*loginUser(values: any){
    const bodyData = new HttpParams().set("username", values.username).set("password", values.password).set("grant_type", "password");
    this.auth = CONFIG.frontend_client + ":" + CONFIG.frontend_client_pass;
    var headersData = new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded").set("Authorization", "Basic " + btoa(this.auth));
    
    return this._http.post(this.url + 'security/oauth/token', bodyData.toString(), {headers:headersData}).pipe(map((result: Response) => result));
  }*/

  loginUser(values: any){
    localStorage.setItem('access_token', "sjkdfkjdfjksdnfjksnfksn");
    localStorage.setItem('type_token', "juan");
    localStorage.setItem('access_token', "paco@gmail.com");
   
    if(values.password == ''){
      return false;
    } else {
      return true;
    }
    
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  public getLoggedIn(): boolean{
    return localStorage.getItem('access_token') !==  null;
  }
}
