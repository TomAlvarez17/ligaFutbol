import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ConexionService } from '../../services/conexion.service';

@Component({
  selector: 'app-editar-partidos',
  templateUrl: './editar-partidos.component.html',
  styleUrls: ['./editar-partidos.component.css']
})
export class EditarPartidosComponent implements OnInit {

  Formulario: FormGroup = this.fb.group({
    id:[],
    arbitro: [, [Validators.required, Validators.maxLength(50)]],
    local: [, [Validators.required, Validators.maxLength(50)]],
    visita: [, [Validators.required, Validators.maxLength(50)]],
  });

  constructor(private fb: FormBuilder, private conexion: ConexionService, private router: Router,  private activeRouter: ActivatedRoute) { 

    const id = this.activeRouter.snapshot.params['id'];
    this.obtenerRegistro(id);
  }


  obtenerRegistro(id: any) {
    this.conexion.Post('liga', 'GetIdTPartido', { 'partido_id': id }).subscribe((dato: any) => {
      this.Formulario.patchValue({
        id: dato.id,
        arbitro: dato.arbitro,
        local: dato.local
      });
    });
  }

  ngOnInit(): void {
  }

  campoEsValido(campo: string) {
    return this.Formulario.controls[campo].errors && this.Formulario.controls[campo].touched;
  }

  guardar() {
    this.conexion.Post('liga', 'UpdatePartido', this.Formulario.value).subscribe((dato: any) => {
      console.log(dato);
      if (dato['estatus']) {

        Swal.fire(
          'Exito!',
          'Se ha actualizado el partido!',
          'success'
        )

        this.router.navigate(['pages/partidos']);
      }
    });
  }

  eliminar(id:any) {
    this.conexion.Post('liga', 'DeletePartido', { id: id }).subscribe((dato: any) => {
      console.log(dato);
      if (dato['estatus']) {

        Swal.fire({
          title: 'Seguro que quieres eliminar el partido?',
          text: "Desaparecera de la lista!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Eliminar'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Eliminado!',
              'El partido ha sido eliminado con exito',
              'success'
            )
            this.router.navigate(['pages/partidos']);
          }
        })
      }
    });
  }

}
