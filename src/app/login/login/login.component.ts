import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConexionService } from 'src/app/auth/services/conexion.service';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/auth/services/services.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Formulario: FormGroup = this.fb.group({
    // Los validaroes no permiten que los campos sigan validaciones necesarias
    user: [, Validators.required],
    password: [, Validators.required],
  });

  constructor(private fb: FormBuilder, private conexion: ConexionService, private auth: AuthService, private router: Router) {

    this.auth.logout();
  }

  ngOnInit(): void {
  }

  login() {
    console.log("Boton entrar funciona");
    this.conexion.Post('liga', 'Login', this.Formulario.value).subscribe((dato: any) => {
      console.log(dato);

      if (dato.id != 0) {
        this.auth.login(dato);
        setTimeout(() => {
          this.router.navigate(['/pages']);
        }, 1000);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Usuario no encontrado',
          text: 'Verifica que tus datos sean correctos'
        });
      }

    });
  }

}
