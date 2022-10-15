import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ConexionService } from '../../services/conexion.service';



@Component({
  selector: 'app-agregar-arbitro',
  templateUrl: './agregar-arbitro.component.html',
  styleUrls: ['./agregar-arbitro.component.css']
})
export class AgregarArbitroComponent implements OnInit {
  Formulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.maxLength(40)]],
    apellidos: [, [Validators.required, Validators.maxLength(40)]],
    contacto: [, [Validators.required, Validators.maxLength(10),Validators.minLength(10)]],
    email: [, Validators.required],
    fecha: [, Validators.required],
    posicion: [, [Validators.required, Validators.maxLength(40)]],
  });

  constructor(private fb: FormBuilder, private conexion: ConexionService, private router: Router) {

  }

  ngOnInit(): void {
  }

  campoEsValido(campo: string) {
    return this.Formulario.controls[campo].errors && this.Formulario.controls[campo].touched;
  }

  guardar() {
    this.conexion.Post('liga', 'InsertArbitro', this.Formulario.value).subscribe((dato: any) => {
      console.log(dato);
      if (dato['estatus']) {

        Swal.fire(
          'Exito!',
          'Se ha guardado el registro!',
          'success'
        )

        this.Formulario.reset();
        this.obtenerRegistro(dato['id']);
        this.router.navigate(['pages/arbitros']);
      }

    })
  }

  obtenerRegistro(id: number) {
    this.conexion.Post('liga', 'GetIdArbitro', { 'arbitro_id': id }).subscribe((dato: any) => {
      console.log(dato);
    });
  }

}
