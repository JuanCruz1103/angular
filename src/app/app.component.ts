import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { TarjetaProductoComponent } from "./tarjeta-producto/tarjeta-producto.component";
// import {InterpolacionComponent} from "./interpolacion/interpolacion.component"
import { ComponentePadreComponent } from './Componentes/componente-padre/componente-padre.component';

@Component({
  selector: 'app-root',
imports: [RouterOutlet, ComponentePadreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Avances ';
}
