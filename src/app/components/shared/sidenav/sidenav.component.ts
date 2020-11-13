import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent{

  user: any;

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private authservice: AuthService) {
    this.authservice.user.subscribe(user => this.user = user);
  }

  get isAdmin() {
    if(this.user != null){
      return this.user.IdPerfil === 1;
    }else{
      return false;
    }
  }

  get isGestor() {
    if(this.user != null){
      return this.user.IdPerfil === 2;
    }else{
      return false;
    }
  }

  logout(){
    this.authservice.logout();
  }
}
