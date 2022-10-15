import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../services/conexion.service';

@Component({
  selector: 'app-arbitros',
  templateUrl: './arbitros.component.html',
  styleUrls: ['./arbitros.component.css']
})
export class ArbitrosComponent implements OnInit {

  Lista: any = [];
  
  constructor(private conexion: ConexionService) {
    this.obtenerLista();
  }

  obtenerLista() {
    this.conexion.Get('liga', 'GetAllArbitro').subscribe( (dato: any) =>{
      console.log(dato);
      this.Lista = dato.reverse();
    });
  }

  ngOnInit(): void {
  }

}
