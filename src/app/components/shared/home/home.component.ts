import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: any;
  admin = false;

  constructor(private authservice: AuthService) {
      this.user = JSON.parse(localStorage.getItem('currentUser'));
    //this.authservice.user.subscribe(user => {
//      if(this.user){
        this.admin = (this.user.IdPerfil === 1) ? true : false;
//      }
//    })
  }

  ngOnInit(): void {
  }
}
