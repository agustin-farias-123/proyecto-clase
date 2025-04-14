import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ContactosComponent } from './paginas/contactos/contactos.component';
import { ProductosComponent } from './paginas/productos/productos.component';
import { OfertasComponent } from './paginas/ofertas/ofertas.component';
import { QuienessomosComponent } from './paginas/quienessomos/quienessomos.component';
import { CarritoComponent } from './paginas/carrito/carrito.component';
export const routes: Routes = [
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: 'inicio', component: InicioComponent },
    { path: 'contacto', component: ContactosComponent },
    { path: 'producto', component: ProductosComponent },
    { path: 'ofertas', component: OfertasComponent },
    { path: 'quienessomos', component: QuienessomosComponent },
    { path: 'carrito', component: CarritoComponent },

];
