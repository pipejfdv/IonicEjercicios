import { ProductoApi } from "./productoApi.model";

export interface ProductoFront extends ProductoApi{
    seleccionado?:boolean;
}