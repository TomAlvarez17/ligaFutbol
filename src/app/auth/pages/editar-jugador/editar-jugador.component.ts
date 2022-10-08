import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { ConexionService } from '../../services/conexion.service';


@Component({
  selector: 'app-editar-jugador',
  templateUrl: './editar-jugador.component.html',
  styleUrls: ['./editar-jugador.component.css']
})
export class EditarJugadorComponent implements OnInit {

  Formulario: FormGroup = this.fb.group({
    id:[],
    equipo: [, [Validators.required, Validators.maxLength(50)]],
    jugador: [, [Validators.required, Validators.maxLength(50)]],
  });

  constructor(private fb: FormBuilder, private conexion: ConexionService, private router: Router,  private activeRouter: ActivatedRoute) { 

    const id = this.activeRouter.snapshot.params['id'];
    this.obtenerRegistro(id);
  }


  obtenerRegistro(id: any) {
    this.conexion.Post('liga', 'GetIdTJugador', { 'jugador_id': id }).subscribe((dato: any) => {
      this.Formulario.patchValue({
        id: dato.id,
        equipo: dato.equipo,
        jugador: dato.jugador
      });
    });
  }

  ngOnInit(): void {
  }

  campoEsValido(campo: string) {
    return this.Formulario.controls[campo].errors && this.Formulario.controls[campo].touched;
  }

  guardar() {
    this.conexion.Post('liga', 'UpdateJugador', this.Formulario.value).subscribe((dato: any) => {
      console.log(dato);
      if (dato['estatus']) {

        Swal.fire(
          'Exito!',
          'Se ha actualizado el jugador!',
          'success'
        )

        this.router.navigate(['pages/jugadores']);
      }
    });
  }

  eliminar(id:any) {
    this.conexion.Post('liga', 'DeleteJugador', { id: id }).subscribe((dato: any) => {
      console.log(dato);
      if (dato['estatus']) {

        Swal.fire({
          title: 'Seguro que quieres eliminar al jugador?',
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
              'El jugador ha sido eliminado con exito',
              'success'
            )
            this.router.navigate(['pages/jugadores']);
          }
        })
      }
    });
  }


}
