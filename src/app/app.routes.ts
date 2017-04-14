import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];


// Importante - Para alguna de las siguietnes configuraciones el index.html debe tener esta linea
// <base href="/">
//Usado para acceder directamente por URL como las paginas normales
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

//Usado para acceder usando /#/ruta -> mejor para el pasé de parametros
// export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
