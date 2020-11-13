import { ListaArticuloModelo } from './models/listaArticuloModelo';
import { BehaviorSubject, Observable } from 'rxjs';
import { CrearArticuloModelo } from './models/crearArticuloModelo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ArticuloState } from './redux/store/articulo.reducer';
import { LISTA_ARTICULOS } from './redux/store/articulo.actions';

@Injectable({
  providedIn: 'root'
})
export class GestionArticuloService {

  private createUrl = "http://localhost:44303/api/articulos/createArticle";
  private listUrl = "http://localhost:44303/api/articulos/listArticle";
  private deleteUrl = "http://localhost:44303/api/articulos/deleteArticle";
  private updateUrl = "http://localhost:44303/api/articulos/updateArticle";

  list: ListaArticuloModelo[];
  private actualizarFormulario = new BehaviorSubject<ListaArticuloModelo>({} as any);

  constructor(private http: HttpClient, private store: Store<ArticuloState>) { }

  //CREAR ARTICULO
  crearArticulo(articleData: CrearArticuloModelo): Observable<CrearArticuloModelo>{
    return this.http.post<CrearArticuloModelo>(this.createUrl, articleData);
  }

  //LISTAR ARTICULOS
  getArticleList(){
    this.http.get<ListaArticuloModelo[]>(this.listUrl).toPromise().then(data => {
      this.list = data as ListaArticuloModelo[],
      this.store.dispatch(LISTA_ARTICULOS({lista: this.list}));
    });
  }

  //BORRAR ARTICULO
  deleteArticle(id: number): Observable<ListaArticuloModelo>{
    const articleID = {
      ID_Articulo: id
    };
    return this.http.post<ListaArticuloModelo>(this.deleteUrl, articleID);
  }

  //ACTUALIZAR ARTICULO
  updateArticle(art:ListaArticuloModelo): Observable<ListaArticuloModelo>{
    return this.http.post<ListaArticuloModelo>(this.updateUrl, art);
  }


  //Actualizar Form
  actualizar(articulo){
    this.actualizarFormulario.next(articulo);
  }
  obtenerArticulo$(): Observable<ListaArticuloModelo>{
    return this.actualizarFormulario.asObservable();
  }
}

