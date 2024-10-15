import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DATOS_USUARIOS } from '../jddlogin/interfaces/datos';
import { IUsuario } from '../jddlogin/interfaces/IUsuario';

@Component({
  selector: 'app-jddparticipantes',
  templateUrl: './jddparticipantes.page.html',
  styleUrls: ['./jddparticipantes.page.scss'],
})
export class JddparticipantesPage implements OnInit {
  public datos: IUsuario[] = DATOS_USUARIOS
  
  constructor(private router: Router) {
  }

  cambiarEstado(usuario: IUsuario, nuevoEstado: string) {
    usuario.Estado = nuevoEstado;
  }
  ngOnInit() {

  }
}
