import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recambios Víctor';


  constructor(){
      // localStorage.setItem('token', null);
      // localStorage.setItem('email', null);
  }

}
