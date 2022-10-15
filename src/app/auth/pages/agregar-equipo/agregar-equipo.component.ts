import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ConexionService } from '../../services/conexion.service';


@Component({
  selector: 'app-agregar-equipo',
  templateUrl: './agregar-equipo.component.html',
  styleUrls: ['./agregar-equipo.component.css']
})
export class AgregarEquipoComponent implements OnInit {


  Formulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.maxLength(40)]],
    logo:[,]
    
  });

  constructor(private fb: FormBuilder, private conexion: ConexionService, private router: Router) {

  }

  ngOnInit(): void {
  }

  campoEsValido(campo: string) {
    return this.Formulario.controls[campo].errors && this.Formulario.controls[campo].touched;
  }

  guardar() {
    this.conexion.Post('liga', 'InsertEquipo', this.Formulario.value).subscribe((dato: any) => {
      console.log(dato);
      if (dato['estatus']) {

        Swal.fire(
          'Exito!',
          'Se ha guardado el registro!',
          'success'
        )

        this.Formulario.reset();
        this.obtenerRegistro(dato['id']);
        this.router.navigate(['pages/equipos']);
      }

    })
  }

  obtenerRegistro(id: number) {
    this.conexion.Post('liga', 'GetIdEquipo', { 'equipo_id': id }).subscribe((dato: any) => {
      console.log(dato);
    });
  }
}
