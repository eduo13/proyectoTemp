import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceCanloadGuard implements CanLoad {

  constructor(
    private router: Router,
    private authService: AuthService
  ){}
  canLoad(route: Route ){
      var user = JSON.parse(localStorage.getItem('currentUser'));
      if (user && user.Token != null) {
        console.log("comprobando admin..");
          let url: string = route.path;
          console.log('Url: '+ url + ' perfil = ' + user.IdPerfil);

          switch(url){
            case "gestionUsuario":
            case "gestionArticulo":
              if(user.IdPerfil != 1){
                console.log("no tiene permiso");
                this.router.navigate(['']);
                return false;
              }
              break;
            default:
              return true;
          }
        return true;
      }
    // not logged in so redirect to login page with the return url
    console.log("no hay usuario logado canLoad");
    this.router.navigate(['/login']);
    return false;
  }

}
