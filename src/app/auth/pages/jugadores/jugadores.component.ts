import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../services/conexion.service';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {

  Lista: any = [];
  
  constructor(private conexion: ConexionService) {
    this.obtenerLista();
  }

  obtenerLista() {
    this.conexion.Get('liga', 'GetAllP').subscribe( (dato: any) =>{
      console.log(dato);
      this.Lista = dato.reverse();
    });
  }

  ngOnInit(): void {
  }

}
