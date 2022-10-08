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
import { EditarEquipoComponent } from './pages/editar-equipo/editar-equipo.component';
import { AgregarJugadorComponent } from './pages/agregar-jugador/agregar-jugador.component';
import { EditarJugadorComponent } from './pages/editar-jugador/editar-jugador.component';



@NgModule({
  declarations: [
    EditarPartidosComponent,
    PartidosComponent,
    MenusComponent,
    TorneosComponent,
    JugadoresComponent,
    EquiposComponent,
    ArbitrosComponent,
    AgregarPartidosComponent,
    EditarEquipoComponent,
    AgregarJugadorComponent,
    EditarJugadorComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
