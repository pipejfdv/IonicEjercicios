import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ProductoServices } from 'src/app/data/services/producto-services';
import { ProductoFront } from 'src/app/data/interfaces/confirmacionCompra.model';
import { CarrucelCarritoComponent } from 'src/app/components/carrucel-carrito/carrucel-carrito.component';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, CarrucelCarritoComponent]
})
export class CarritoPage implements OnInit {
  //inyección de dependencias 
  productoServices = inject(ProductoServices);
  //variables
  productoEnCompra:ProductoFront[]=[];
  constructor() { }

  ngOnInit() {
    this.productoEnCompra = this.productoServices.productoEnCarrito;
  }
  
}
