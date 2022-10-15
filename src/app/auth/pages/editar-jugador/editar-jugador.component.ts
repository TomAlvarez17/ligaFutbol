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
    numero: [, [Validators.required, Validators.maxLength(3)]],
  });

  constructor(private fb: FormBuilder, private conexion: ConexionService, private router: Router,  private activeRouter: ActivatedRoute) { 

    const id = this.activeRouter.snapshot.params['id'];
    this.obtenerRegistro(id);
  }


  obtenerRegistro(id: any) {
    this.conexion.Post('liga', 'GetIdTJugador', { 'id': id }).subscribe((dato: any) => {
      console.log(dato);
      this.Formulario.patchValue({
        id: dato.id,
        equipo: dato.equipo,
        jugador: dato.jugador,
        numero: dato.numero
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



}
