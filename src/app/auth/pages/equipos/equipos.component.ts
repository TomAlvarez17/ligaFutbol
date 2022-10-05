import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../services/conexion.service';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {

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
