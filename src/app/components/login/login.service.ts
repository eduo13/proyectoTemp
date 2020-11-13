/* import { DatosLogin } from './Models/datosLogin';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = "http://localhost:44303/api/usuario/loginPOST";

  constructor( private http: HttpClient) { }

  comprobarLogin(datosLogin: DatosLogin){
    return this.http.post(this.url, datosLogin);

  }
} */
