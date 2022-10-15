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
import { AgregarArbitroComponent } from './pages/agregar-arbitro/agregar-arbitro.component';
import { EditarArbitroComponent } from './pages/editar-arbitro/editar-arbitro.component';
import { EditarTorneoComponent } from './pages/editar-torneo/editar-torneo.component';
import { AgregarTorneoComponent } from './pages/agregar-torneo/agregar-torneo.component';
import { AgregarEquipoComponent } from './pages/agregar-equipo/agregar-equipo.component';



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
    EditarJugadorComponent,
    AgregarArbitroComponent,
    EditarArbitroComponent,
    EditarTorneoComponent,
    AgregarTorneoComponent,
    AgregarEquipoComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
