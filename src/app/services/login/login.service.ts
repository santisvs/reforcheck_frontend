import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CONFIG } from '../configuracion';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public url: String;

  constructor(private _http: HttpClient) {
    this.url = CONFIG.url;
  }

  loginUser(values: any){
    let bodyData = {username: values.username, password: values.password, grant_type: values.password}
    let headersData = new HttpHeaders();
    headersData.append('Content-Type', 'application/json');
    headersData.append("Authorization", "Basic " + btoa("frontendapp:1234"));
    return this._http.post(this.url + 'security/oauth/token',bodyData).pipe(map((result: Response) => result));
  }
}
