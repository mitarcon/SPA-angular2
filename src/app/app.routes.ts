import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { SearchHeroeComponent } from './components/search-heroe/search-heroe.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroe/:id', component: HeroeComponent },
  { path: 'heroe/search/:text', component: SearchHeroeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];


// Importante - Para alguna de las siguietnes configuraciones el index.html debe tener esta linea
// <base href="/">
//Usado para acceder directamente por URL como las paginas normales
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

//Usado para acceder usando /#/ruta -> mejor para el pasé de parametros
// export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
