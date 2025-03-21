import { Component } from '@angular/core'; import { RouterOutlet } from '@angular/router';
import { MensajeService } from './mensaje.service';
import { ListadoProductosComponent } from "./listado-usuarios/listado- usuarios.component";
@Component({
selector: 'app-root',
standalone: true,
imports: [
RouterOutlet,
ListadoProductosComponent
],
templateUrl: './app.component.html',
styleUrl: './app.component.css',
})
export class AppComponent {
titulo = 'Servicios con Observables en Angular';
}