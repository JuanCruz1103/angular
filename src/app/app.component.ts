import { Component } from '@angular/core';
//import { MostrarMensajeComponent } from './mostrar-mensaje/mostrar-mensaje.component';
// import { TarjetaProductoComponent } from "./tarjeta-producto/tarjeta-producto.component";
// import {InterpolacionComponent} from "./interpolacion/interpolacion.component"
// import { ComponentePadreComponent } from './Componentes/componente-padre/componente-padre.component';
 //  import { ReplicadorComponent } from './replicador/replicador.component';
 import {Replicador2Component} from './replicador2/replicador2.component';
@Component({
  selector: 'app-root',
imports: [Replicador2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Avances ';
}
