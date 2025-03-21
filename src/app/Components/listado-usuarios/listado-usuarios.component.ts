import { Component } from '@angular/core';
import { UsuariosService } from '../../Services/usuarios.service';

@Component({
  selector: 'app-listado-usuarios',
  imports: [],
  templateUrl:'./listado-usuarios.component.html',
  styleUrl: './listado-usuarios.component.css'
})
export class ListadoUsuariosComponent {
usuarios: any[] = [];

constructor(private usuariosService: UsuariosService) {}

ngOnInit(): void {
  this.usuariosService.obtenerDatos().subscribe((data)=>{
    this.usuarios = data;
  });
}
}
