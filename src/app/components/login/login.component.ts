import { DatosLogin } from './Models/datosLogin';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { AppState, selectLoginState } from 'src/app/app.reducer';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;
  resultado: string;
  user: DatosLogin;
  getState: Observable<any>;
  isAuthenticated: boolean = false;
  errorMessage: string | null;

  constructor(
    private formbuilder: FormBuilder,
    private loginService: AuthService,
    private store: Store<AppState>,
    private router: Router
    ) {
    this.getState = this.store.select(selectLoginState);
    this.formulario = this.formbuilder.group({
      email: ['',Validators.required],
      password: ['',Validators.required],
    });
  }

  ngOnInit(): void {
    this.getState.subscribe((state) => {
      this.isAuthenticated = state.isAuthenticated;
      this.user = state.user;
    });
  }

  login(){

     const datosL: DatosLogin = {
      email: this.formulario.get('email').value,
      password: this.formulario.get('password').value
    }

    this.loginService.comprobarLogin(datosL).subscribe(data => {
      if(data.Token != null){
        this.resultado = "Usuario logado: " + data.Email;
        this.router.navigateByUrl('');
      }else{
        this.resultado = data.mensaje;
      }

      this.formulario.reset();
    })
  }

}
