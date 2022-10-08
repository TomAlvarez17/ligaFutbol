import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConexionService } from '../../services/conexion.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-agregar-jugador',
  templateUrl: './agregar-jugador.component.html',
  styleUrls: ['./agregar-jugador.component.css']
})
export class AgregarJugadorComponent implements OnInit {

  Formulario: FormGroup = this.fb.group({
    equipo: [, [Validators.required, Validators.maxLength(50)]],
    jugador: [, [Validators.required, Validators.maxLength(50)]],
  });

  constructor(private fb: FormBuilder, private conexion: ConexionService,  private router: Router ) { }

  ngOnInit(): void {
  }

  campoEsValido(campo: string) {
    return this.Formulario.controls[campo].errors && this.Formulario.controls[campo].touched;
  }

  guardar() {
    this.conexion.Post('liga', 'InsertJugador', this.Formulario.value).subscribe((dato: any) => {
      console.log(dato);
      if (dato['estatus']) {

        Swal.fire(
          'Exito!',
          'Se ha creado un nuevo registro!',
          'success'
        )

        this.Formulario.reset();
        // this.obtenerRegistro(dato['id']);
        this.router.navigate(['pages/jugadores']);
      }

    })
  }

  // obtenerRegistro(id: number) {
  //   this.conexion.Post('nomina', 'GetIdT', { 'empleadoT_id': id }).subscribe((dato: any) => {
  //     console.log(dato);
  //   });
  // }

}
