import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MostrarMensajeComponent } from './Components/mostrar-mensaje/mostrar-mensaje.component';
import { ComponentePadreComponent } from './Components/Componentes/componente-padre/componente-padre.component';
import { NuevoComponenteComponent } from './Components/Componentes/nuevo-componente/nuevo-componente.component';
import { ComponenteInlineComponent } from './Components/componente-inline/componente-inline.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NuevoComponenteComponent,
    ComponenteInlineComponent,
    ComponentePadreComponent,
    MostrarMensajeComponent
    ],
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
titulo = 'Event Binding en Angular';
}