import { Component } from '@angular/core';
import { ComponenteHijoComponent } from './componente-hijo/componente-hijo.component';

@Component({
  selector: 'app-componente-padre',
  imports: [ComponenteHijoComponent],
  templateUrl: './componente-padre.component.html',
  styleUrl: './componente-padre.component.css'
})
export class ComponentePadreComponent {
  mensajePadre: string = 'Mensaje desde el Componente Padre';

  mensaje: string = '';
// Se emitió un str, es lo que recibimos
recibirNotificacion(mensaje: string) {
this.mensaje = mensaje;
}

}
