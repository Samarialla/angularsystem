import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SolicitudesPrestamosComponent } from 'app/pages/solicitudes/solicitudes-prestamos/solicitudes-prestamos.component';
import { CreditoPanDulceComponent } from 'app/pages/solicitudes/credito-pan-dulce/credito-pan-dulce.component';
import { TarjetaCreditoComponent } from 'app/pages/consultas/tarjeta-credito/tarjeta-credito.component';
import { AportesComponent } from 'app/pages/consultas/aportes/aportes.component';
import { DatosPersonalesComponent } from 'app/shared/utilitarios/datos-personales/datos-personales.component';
import { PagosPrestamosComponent } from 'app/pages/comprobantes/pagos-prestamos/pagos-prestamos.component';
import { PrestamosReestructuradosComponent } from 'app/pages/comprobantes/prestamos-reestructurados/prestamos-reestructurados.component';
import { AporteAguinaldoComponent } from 'app/pages/comprobantes/aporte-aguinaldo/aporte-aguinaldo.component';
import { CuotaSedeSocialComponent } from 'app/pages/comprobantes/cuota-sede-social/cuota-sede-social.component';




@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    DashboardComponent,
    SolicitudesPrestamosComponent,
    CreditoPanDulceComponent,
    TarjetaCreditoComponent,
    AportesComponent,
    DatosPersonalesComponent,
    PagosPrestamosComponent,
    PrestamosReestructuradosComponent,
    AporteAguinaldoComponent,
    CuotaSedeSocialComponent,
  ],
  providers: [DatePipe]
})

export class AdminLayoutModule { }
