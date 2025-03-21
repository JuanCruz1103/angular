import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListadoUsuariosComponent } from './Components/listado-usuarios/listado-usuarios.component';
//import { MostrarMensajeComponent } from './mostrar-mensaje/mostrar-mensaje.component';
// import { TarjetaProductoComponent } from "./tarjeta-producto/tarjeta-producto.component";
// import {InterpolacionComponent} from "./interpolacion/interpolacion.component"
// import { ComponentePadreComponent } from './Componentes/componente-padre/componente-padre.component';
 //  import { ReplicadorComponent } from './replicador/replicador.component';

@Component({
  selector: 'app-root',
imports: [RouterOutlet,
  ListadoUsuariosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Servicios con Observables en Angular';
}
