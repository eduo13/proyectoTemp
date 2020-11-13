import { GestionArticuloService } from './../gestion-articulo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-articulo',
  templateUrl: './card-articulo.component.html',
  styleUrls: ['./card-articulo.component.css']
})
export class CardArticuloComponent implements OnInit {

  constructor(public gestionArticuloService: GestionArticuloService) { }

  ngOnInit(): void {
    this.gestionArticuloService.getArticleList();
  }

}
