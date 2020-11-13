import { GestionArticuloService } from './../gestion-articulo.service';
import { ListaArticuloModelo } from './../models/listaArticuloModelo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-articulo',
  templateUrl: './lista-articulo.component.html',
  styleUrls: ['./lista-articulo.component.css']
})
export class ListaArticuloComponent implements OnInit {

  articulos: ListaArticuloModelo[];
  resultado: any;

  constructor(public gestionArticuloService:GestionArticuloService) { }

  ngOnInit(): void {
    this.gestionArticuloService.getArticleList();
  }

  delArt(id: number){
    if(confirm('¿Estás seguro de que quieres eliminar este articulo?')){
      this.gestionArticuloService.deleteArticle(id).subscribe(data => {
        this.resultado = data;
        this.gestionArticuloService.getArticleList();
      })
    }
  }

  editar(articulo){
    this.gestionArticuloService.actualizar(articulo);
  }
}
