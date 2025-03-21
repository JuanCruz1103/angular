import { Component } from '@angular/core';
import {RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-interpolacion',
  imports: [RouterOutlet, InterpolacionComponent],
  templateUrl:'./interpolacion.component.html',
  styleUrl: './interpolacion.component.css'
})
export class InterpolacionComponent {
  titulo = 'UTS' ;
  usuario ={
    nombre :'Juan Antonio Cruz Rodriguez',
    edad : 21
  }

  saludar(){
    return `Hola, ${this.usuario.nombre}`;
  }
}