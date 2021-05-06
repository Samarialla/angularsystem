import { Routes } from '@angular/router';
import { AporteAguinaldoComponent } from 'app/pages/comprobantes/aporte-aguinaldo/aporte-aguinaldo.component';
import { CuotaSedeSocialComponent } from 'app/pages/comprobantes/cuota-sede-social/cuota-sede-social.component';
import { PagosPrestamosComponent } from 'app/pages/comprobantes/pagos-prestamos/pagos-prestamos.component';
import { PrestamosReestructuradosComponent } from 'app/pages/comprobantes/prestamos-reestructurados/prestamos-reestructurados.component';
import { AportesComponent } from 'app/pages/consultas/aportes/aportes.component';
import { TarjetaCreditoComponent } from 'app/pages/consultas/tarjeta-credito/tarjeta-credito.component';
import { DashboardComponent } from 'app/pages/dashboard/dashboard.component';
import { CreditoPanDulceComponent } from 'app/pages/solicitudes/credito-pan-dulce/credito-pan-dulce.component';
import { SolicitudesPrestamosComponent } from 'app/pages/solicitudes/solicitudes-prestamos/solicitudes-prestamos.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'SolicitudPrestamo', component: SolicitudesPrestamosComponent },
    { path: 'PanDulce', component: CreditoPanDulceComponent },
    { path: 'Aportes', component: AportesComponent },
    { path: 'TarjetaCredito', component: TarjetaCreditoComponent  },
    { path: 'PagoPrestamos', component: PagosPrestamosComponent  },
    { path: 'PrestamosReestructurados', component: PrestamosReestructuradosComponent  },
    { path: 'AporteAguinaldo', component: AporteAguinaldoComponent  },
    { path: 'CuotaSedeSocial', component: CuotaSedeSocialComponent  },

   

]