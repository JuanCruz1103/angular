import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-hijo',
  imports: [],
  templateUrl: './componente-hijo.component.html',
  styleUrl: './componente-hijo.component.css'
})
export class ComponenteHijoComponent {

  private titulo = "Orgullo UTS"


  get mostrartitulo() {
    return this.titulo;
  }

  gettitulo() {
    return this.titulo;
  }
  
}

