import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ConexionService } from '../../services/conexion.service';


@Component({
  selector: 'app-agregar-partidos',
  templateUrl: './agregar-partidos.component.html',
  styleUrls: ['./agregar-partidos.component.css']
})
export class AgregarPartidosComponent implements OnInit {

  Formulario: FormGroup = this.fb.group({
    arbitro: [, [Validators.required, Validators.maxLength(50)]],
    local: [, [Validators.required, Validators.maxLength(50)]],
    visita: [, [Validators.required, Validators.maxLength(50)]],
  });

  constructor(private fb: FormBuilder, private conexion: ConexionService,  private router: Router ) { }

  ngOnInit(): void {
  }

  campoEsValido(campo: string) {
    return this.Formulario.controls[campo].errors && this.Formulario.controls[campo].touched;
  }

  guardar() {
    this.conexion.Post('liga', 'InsertPartido', this.Formulario.value).subscribe((dato: any) => {
      console.log(dato);
      if (dato['estatus']) {

        Swal.fire(
          'Exito!',
          'Se ha creado un nuevo registro!',
          'success'
        )

        this.Formulario.reset();
        // this.obtenerRegistro(dato['id']);
        this.router.navigate(['pages/listatienda']);
      }

    })
  }

  // obtenerRegistro(id: number) {
  //   this.conexion.Post('nomina', 'GetIdT', { 'empleadoT_id': id }).subscribe((dato: any) => {
  //     console.log(dato);
  //   });
  // }


}
