import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { EquipoComponent } from './pages/equipo/equipo.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { PromocionesComponent } from './pages/promociones/promociones.component';
import { SucursalesComponent } from './pages/sucursales/sucursales.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'equipo', component: EquipoComponent },
    { path: 'clientes', component: ClientesComponent },
    { path: 'productos', component: ProductosComponent },
    { path: 'promociones', component: PromocionesComponent },
    { path: 'sucursales', component: SucursalesComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
