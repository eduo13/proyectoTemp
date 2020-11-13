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
    this.authservice.user.subscribe(user => {
      this.user = user;
      if(this.user){
        this.admin = (user.id_perfil === 1) ? true : false;
      }
    })
  }

  ngOnInit(): void {
  }
}
