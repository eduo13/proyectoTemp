import { UserModel } from '../models/UserModel';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GestionUsuarioService } from '../gestion-usuario.service';
import { Subscription } from 'rxjs';
import { AppState } from '../../../app.reducer';
import { Store } from '@ngrx/store';
import { CREAR, EDITAR } from '../redux/store/usuario.actions';
import { PerfilUser } from '../models/PerfilUser';


@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit, OnDestroy {

  forma: FormGroup;
  resultado: any;
  suscription: Subscription;
  upUser: UserModel;
  idUsuario = 0;

  constructor(private fb: FormBuilder,
              private gestionUsuarioService: GestionUsuarioService,
              private store: Store<AppState>) {

    this.crearFormulario();
  }

  ngOnInit(): void {
    this.suscription = this.gestionUsuarioService.obtenerUsuario$().subscribe(data =>{
      this.upUser = data;

      this.forma.patchValue({
        usuario: this.upUser.Usuario,
        id_perfil: this.upUser.Id_Perfil,
        email: this.upUser.Email
      });
      this.idUsuario = this.upUser['ID_Usuario'];

    });
  }

  ngOnDestroy(){
    this.suscription.unsubscribe();
  }

  get usuarioNoValido(){
    return this.forma.get('usuario').invalid && this.forma.get('usuario').touched;
  }
  get perfilNoValido(){
    return this.forma.get('id_perfil').invalid && this.forma.get('id_perfil').touched;
  }
  get emailNoValido(){
    return this.forma.get('email').invalid && this.forma.get('email').touched;
  }
  get pass1NoValido(){
    return this.forma.get('pass1').invalid && this.forma.get('pass1').touched;
  }
  get pass2NoValido(){
    const pass1 = this.forma.get('pass1').value;
    const pass2 = this.forma.get('pass2').value;

    return ( pass1 === pass2) ? false : true;
  }


  crearFormulario(){

    this.forma = this.fb.group({
      id: 0,
      usuario  : ['', [Validators.required, Validators.minLength(4)]],
      id_perfil  : [0, Validators.required],
      perfil: '',
      email  : ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      pass1   : ['', [Validators.required, Validators.minLength(4)]],
      pass2   : ['', Validators.required],
    },{
      validators: this.passwordsIguales('pass1','pass2') && this.perfilDefault('id_perfil', 'perfil')
    });
  }

  //Validadores
  passwordsIguales(pass1Name:string, pass2Name:string){
    return ( formGroup: FormGroup ) => {
      const pass1Control = formGroup.controls[pass1Name];
      const pass2Control = formGroup.controls[pass2Name];

      if(pass1Control.value === pass2Control.value){
        pass2Control.setErrors(null);
      }else{
        pass2Control.setErrors({noEsIgual: true});
      }
    }
  }

  perfilDefault(perfilValue, perfilName){
    return ( formGroup: FormGroup ) => {
      const idPerfilControl = formGroup.controls[perfilValue];


      if(idPerfilControl.value === 0){
        idPerfilControl.setErrors({default: true});
      }else{
        idPerfilControl.setErrors(null);
        switch(idPerfilControl.value){
          case 1:
            this.forma.get('perfil').setValue(PerfilUser.Admin.nombre);
            break;
          case 2:
            this.forma.get('perfil').setValue(PerfilUser.Gestor.nombre);
            break;
          case 3:
            this.forma.get('perfil').setValue(PerfilUser.Operador.nombre);
            break;
        }
      }

    }
  }

  crear(){

    //Control de validación del formulario
    if(this.forma.invalid){

      return Object.values(this.forma.controls).forEach( control =>{

        if(control instanceof FormGroup){
          Object.values(control.controls).forEach(control => control.markAsTouched());
        }else{
          control.markAsTouched();
        }

        control.markAsTouched();
      });
    }

    //Cargar datos del formulario
    const userData: UserModel = {
      ID_Usuario: null,
      Usuario: this.forma.get('usuario').value,
      Id_Perfil: this.forma.get('id_perfil').value,
      Perfil: this.forma.get('perfil').value,
      Email: this.forma.get('email').value,
      Password: this.forma.get('pass2').value
    }

    if(this.idUsuario === undefined){

      this.agregar(userData);
    }else{
      this.editar(userData);
    }

  }

  agregar(userData: UserModel){
    console.log("userdata = " + userData);
     this.gestionUsuarioService.crearUsuario(userData).subscribe(data => {
      this.resultado = data;
      if(data['Email'] != null){
        this.store.dispatch(CREAR(new UserModel(data['ID_Usuario'], data['Usuario'], data['Id_Perfil'], data['Email'], data['Perfil'])));
      }
      this.gestionUsuarioService.getUsersList();
      this.forma.reset();
    })
  }

  editar(userData: UserModel){

     userData.ID_Usuario = this.idUsuario;
      this.gestionUsuarioService.actualizarUser(userData).subscribe(data =>{
      this.resultado = data;
      this.store.dispatch(EDITAR({
        id_usuario: this.upUser.ID_Usuario,
        id_perfil: userData.Id_Perfil,
        usuario: userData.Usuario,
        email: userData.Email}));
      this.gestionUsuarioService.getUsersList();
      this.forma.reset();
      this.idUsuario = 0;
    });
  }
}
