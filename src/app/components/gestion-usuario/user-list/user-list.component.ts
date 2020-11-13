import { UserModel } from '../models/UserModel';
import { Component, OnInit } from '@angular/core';
import { GestionUsuarioService } from '../gestion-usuario.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducer';
import { ELIMINAR } from '../redux/store/usuario.actions';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  usuarios: UserModel[];
  resultado:any;

  constructor(public gestionUsuarioService: GestionUsuarioService,
              private store: Store<AppState>) { }

  ngOnInit(): void {
    this.gestionUsuarioService.getUsersList();
  }

  delUser(id: number){
    if(confirm('¿Estás seguro de que quieres eliminar este usuario?')){
      this.gestionUsuarioService.deleteUser(id).subscribe(data => {
        this.resultado = data;
        this.store.dispatch(ELIMINAR({id: id}));
        this.gestionUsuarioService.getUsersList();
      })
    }
  }

  editar(usuario){
    this.gestionUsuarioService.actualizar(usuario);
  }
}
