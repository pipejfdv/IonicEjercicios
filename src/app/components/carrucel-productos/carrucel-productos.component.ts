import { NgFor } from '@angular/common';
import { Component, OnInit, Input, inject } from '@angular/core';
import { ProductoApi } from 'src/app/data/interfaces/productoApi.model';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';
import { IonButton, IonAlert } from '@ionic/angular/standalone';
import { ProductoServices } from 'src/app/data/services/producto-services';
import { ProductoFront } from 'src/app/data/interfaces/confirmacionCompra.model';

@Component({
  selector: 'app-carrucel-productos',
  templateUrl: './carrucel-productos.component.html',
  styleUrls: ['./carrucel-productos.component.scss'],
  standalone:true,
  imports:[NgFor, IonAlert,IonCard, IonCardContent,IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton]
})
export class CarrucelProductosComponent  implements OnInit {

  //recibir productos quemados desde vitrina: tipo de interfas(Dato)
  @Input() productosPrecargados:ProductoApi[];
  //inyección de dependencias 
  productoServices = inject(ProductoServices)
  //variables
  seleccionado:boolean;
  constructor() { }

  ngOnInit() {}


  agregarCarrito(producto: ProductoApi){
    const productoCargado:ProductoFront ={
      ... producto,
      seleccionado: this.seleccionado = true
    }
    this.productoServices.guardarProductoCarrito(productoCargado)
  }

  //alert
  alertButtons = ['OK'];
}
