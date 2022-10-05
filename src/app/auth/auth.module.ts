import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarPartidosComponent } from './pages/editar-partidos/editar-partidos.component';
import { PartidosComponent } from './pages/partidos/partidos.component';
import { MenusComponent } from './pages/menus/menus.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TorneosComponent } from './pages/torneos/torneos.component';
import { JugadoresComponent } from './pages/jugadores/jugadores.component';
import { EquiposComponent } from './pages/equipos/equipos.component';
import { ArbitrosComponent } from './pages/arbitros/arbitros.component';
import { AgregarPartidosComponent } from './pages/agregar-partidos/agregar-partidos.component';



@NgModule({
  declarations: [
    EditarPartidosComponent,
    PartidosComponent,
    MenusComponent,
    TorneosComponent,
    JugadoresComponent,
    EquiposComponent,
    ArbitrosComponent,
    AgregarPartidosComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
