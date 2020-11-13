export class CrearArticuloModelo {
    Nombre: string;
    Stock: number;
    Descripcion: string;
    Fabricante: string;
    Peso: number;
    Alto: number;
    Largo: number;
    Ancho: number;
    Precio: number;
    Imagen: string;

    constructor(articulo: CrearArticuloModelo){
      this.Nombre = articulo.Nombre;
      this.Stock = articulo.Stock;
      this.Descripcion = articulo.Descripcion;
      this.Fabricante = articulo.Fabricante;
      this.Peso = articulo.Peso;
      this.Alto = articulo.Alto;
      this.Largo = articulo.Largo;
      this.Ancho = articulo.Ancho;
      this.Precio = articulo.Peso;
      this.Imagen = articulo.Imagen;
    }
}
