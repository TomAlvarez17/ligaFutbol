import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarArbitroComponent } from './pages/agregar-arbitro/agregar-arbitro.component';
import { AgregarEquipoComponent } from './pages/agregar-equipo/agregar-equipo.component';
import { AgregarJugadorComponent } from './pages/agregar-jugador/agregar-jugador.component';
import { AgregarPartidosComponent } from './pages/agregar-partidos/agregar-partidos.component';
import { AgregarTorneoComponent } from './pages/agregar-torneo/agregar-torneo.component';
import { ArbitrosComponent } from './pages/arbitros/arbitros.component';
import { EditarArbitroComponent } from './pages/editar-arbitro/editar-arbitro.component';
import { EditarEquipoComponent } from './pages/editar-equipo/editar-equipo.component';
import { EditarJugadorComponent } from './pages/editar-jugador/editar-jugador.component';
import { EditarPartidosComponent } from './pages/editar-partidos/editar-partidos.component';
import { EditarTorneoComponent } from './pages/editar-torneo/editar-torneo.component';
import { EquiposComponent } from './pages/equipos/equipos.component';
import { JugadoresComponent } from './pages/jugadores/jugadores.component';
import { MenusComponent } from './pages/menus/menus.component';
import { PartidosComponent } from './pages/partidos/partidos.component';
import { TorneosComponent } from './pages/torneos/torneos.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'partidos', component: PartidosComponent },
      { path: 'arbitros', component: ArbitrosComponent },
      { path: 'equipos', component: EquiposComponent },
      { path: 'jugadores', component: JugadoresComponent },
      { path: 'torneos', component: TorneosComponent },

      { path: 'agregarpartido', component: AgregarPartidosComponent },
      { path: 'agregarjugador', component: AgregarJugadorComponent },
      { path: 'agregararbitro', component: AgregarArbitroComponent },
      { path: 'agregartorneo', component: AgregarTorneoComponent },
      { path: 'agregarequipo', component: AgregarEquipoComponent },

      { path: 'editarpartido/:id', component: EditarPartidosComponent },
      { path: 'editarequipo/:id', component: EditarEquipoComponent },
      { path: 'editarjugador/:id', component: EditarJugadorComponent },
      { path: 'editararbitro/:id', component: EditarArbitroComponent },
      { path: 'editartorneo/:id', component: EditarTorneoComponent },
      
      { path: 'menu', component: MenusComponent },
    

      { path: '**', redirectTo: 'torneos' },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
