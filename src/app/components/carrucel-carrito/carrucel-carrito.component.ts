import { NgFor, NgIf } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { IonButton, IonCol, IonAlert, IonGrid, IonRow, IonCard, IonCardContent,IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';
import { ProductoFront } from 'src/app/data/interfaces/confirmacionCompra.model';
import { ProductoServices } from 'src/app/data/services/producto-services';

@Component({
  selector: 'app-carrucel-carrito',
  templateUrl: './carrucel-carrito.component.html',
  styleUrls: ['./carrucel-carrito.component.scss'],
  standalone:true,
  imports:[NgIf, NgFor, IonAlert, IonButton, IonCol, IonGrid, IonRow, IonCard, IonCardContent,IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton]
})
export class CarrucelCarritoComponent  implements OnInit {
  //recibir productos desde carrito: tipo de interfas(Dato)
  @Input() productoDesdeCarrito: ProductoFront[]=[]
  //inyección dependencias
  productService = inject(ProductoServices);
  constructor() { }

  ngOnInit() {}

  eliminarDeCarrito(producto: ProductoFront){
    this.productService.eliminarProductoCarrito(producto);
  }

  //alert
  alertButtons = ['Entendido'];
}
