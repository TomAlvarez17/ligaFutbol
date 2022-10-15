import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ConexionService } from '../../services/conexion.service';


@Component({
  selector: 'app-editar-torneo',
  templateUrl: './editar-torneo.component.html',
  styleUrls: ['./editar-torneo.component.css']
})
export class EditarTorneoComponent implements OnInit {

  Formulario: FormGroup = this.fb.group({
    id:[],
    nombre: [, [Validators.required, Validators.maxLength(40)]],
    fechai: [, Validators.required],
    fechaf: [, Validators.required],
  });

  constructor(private fb: FormBuilder, private conexion: ConexionService, private router: Router,  private activeRouter: ActivatedRoute) { 

    const id = this.activeRouter.snapshot.params['id'];
    this.obtenerRegistro(id);
  }


  obtenerRegistro(id: any) {
    this.conexion.Post('liga', 'GetIdTorneo', { 'torneo_id': id }).subscribe((dato: any) => {
      this.Formulario.patchValue({
        id: dato.id,
        nombre: dato.nombre,
        fechai: dato.fechai,
        fechaf: dato.fechaf,
   
      });
    });
  }

  ngOnInit(): void {
  }

  campoEsValido(campo: string) {
    return this.Formulario.controls[campo].errors && this.Formulario.controls[campo].touched;
  }

  guardar() {
    this.conexion.Post('liga', 'UpdateTorneo', this.Formulario.value).subscribe((dato: any) => {
      console.log(dato);
      if (dato['estatus']) {

        Swal.fire(
          'Exito!',
          'Se ha actualizado el registro!',
          'success'
        )

        this.router.navigate(['pages/torneos']);
      }
    });
  }

  eliminar(id:any) {
    this.conexion.Post('liga', 'DeleteTorneo', { id: id }).subscribe((dato: any) => {
      console.log(dato);
      if (dato['estatus']) {

        Swal.fire({
          title: 'Seguro que quieres eliminarlo?',
          text: "No podras recuperar el registro!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Eliminar'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Eliminado!',
              'El registro ha sido eliminado con exito',
              'success'
            )
            this.router.navigate(['pages/torneos']);
          }
        })
      }
    });
  }

}
