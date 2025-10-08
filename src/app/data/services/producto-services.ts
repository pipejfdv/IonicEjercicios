import { Injectable } from '@angular/core';
import { ProductoFront } from '../interfaces/confirmacionCompra.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoServices {
  productoEnCarrito:ProductoFront[]=[]

  guardarProductoCarrito(dato: ProductoFront){
    this.productoEnCarrito.push(dato)
  }

  eliminarProductoCarrito(dato: ProductoFront){
    this.productoEnCarrito = this.productoEnCarrito.filter(
      (objeto) => objeto.title !== dato.title);
  }
}
