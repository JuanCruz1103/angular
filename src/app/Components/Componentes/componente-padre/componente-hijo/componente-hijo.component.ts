import { Component, Input } from '@angular/core';
import {  Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-componente-hijo',
  imports: [],
  templateUrl: './componente-hijo.component.html',
  styleUrl: './componente-hijo.component.css'
})
export class ComponenteHijoComponent {
  @Input() mensaje!: string;
  private titulo = "Orgullo UTS"


  get mostrartitulo() {
    return this.titulo;
  }

  gettitulo() {
    return this.titulo;
  }
  @Output() notificarPadre = new EventEmitter<string>();

  enviarMensaje() {
    // Emitir el evento con un mensaje (se emite un str)
    this.notificarPadre.emit('Mensaje desde el Componente Hijo al Padre');
  }
}

