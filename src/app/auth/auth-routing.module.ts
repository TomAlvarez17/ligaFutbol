import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArbitrosComponent } from './pages/arbitros/arbitros.component';
import { EditarPartidosComponent } from './pages/editar-partidos/editar-partidos.component';
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


      { path: 'editarpartidos', component: EditarPartidosComponent },
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
