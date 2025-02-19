import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { TarjetaProductoComponent } from "./tarjeta-producto/tarjeta-producto.component";
import {InterpolacionComponent} from "./interpolacion/interpolacion.component"

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet, TarjetaProductoComponent],
 imports: [RouterOutlet, InterpolacionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Avances ';
}
