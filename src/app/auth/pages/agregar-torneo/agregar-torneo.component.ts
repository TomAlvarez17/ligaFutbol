import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ConexionService } from '../../services/conexion.service';


@Component({
  selector: 'app-agregar-torneo',
  templateUrl: './agregar-torneo.component.html',
  styleUrls: ['./agregar-torneo.component.css']
})
export class AgregarTorneoComponent implements OnInit {

  Formulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.maxLength(40)]],
    fechai: [, Validators.required],
    fechaf: [, Validators.required],
    
  });

  constructor(private fb: FormBuilder, private conexion: ConexionService, private router: Router) {

  }

  ngOnInit(): void {
  }

  campoEsValido(campo: string) {
    return this.Formulario.controls[campo].errors && this.Formulario.controls[campo].touched;
  }

  guardar() {
    this.conexion.Post('liga', 'InsertTorneo', this.Formulario.value).subscribe((dato: any) => {
      console.log(dato);
      if (dato['estatus']) {

        Swal.fire(
          'Exito!',
          'Se ha guardado el registro!',
          'success'
        )

        this.Formulario.reset();
        this.obtenerRegistro(dato['id']);
        this.router.navigate(['pages/torneos']);
      }

    })
  }

  obtenerRegistro(id: number) {
    this.conexion.Post('liga', 'GetIdTorneo', { 'torneo_id': id }).subscribe((dato: any) => {
      console.log(dato);
    });
  }
}
