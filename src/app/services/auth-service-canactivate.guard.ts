import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';


@Injectable()
export class AuthServiceCanActivateGuard implements CanActivate {

  constructor(
    private router: Router  ){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    var user = JSON.parse(localStorage.getItem('currentUser'));
    if (user && user.Token != null) {
      console.log("comprobando admin..");
      if (route.data.perfiles && route.data.perfiles.indexOf(user.IdPerfil) === -1) {
        console.log("no tiene permiso canActivate");
        this.router.navigate(['']);
        return false;
      }
      // authorised so return true
      return true;
    }
    // not logged in so redirect to login page with the return url
    console.log("no hay usuario logado");
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
