import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Inicio', icon: 'fa fa-tachometer', class: '' },
    { path: '/SolicitudPrestamo', title: 'Solicitud Prestamo', icon: 'fa fa-paper-plane ', class: 'text-warning' },
    { path: '/PanDulce', title: 'Credito Pan Dulce', icon: 'fa fa-file-text-o', class: '' },
    { path: '/Aportes', title: 'Aportes', icon: 'fa fa-money', class: '' },
    { path: '/TarjetaCredito', title: 'Tarjeta Credito', icon: 'fa fa-credit-card-alt', class: '' },
    { path: '/PagoPrestamos', title: 'Comp Prestamos', icon: 'fa fa-file-pdf-o', class: '' },
    { path: '/PrestamosReestructurados', title: 'Comp Prestamos Rees', icon: 'fa fa-file-o', class: '' },
    { path: '/AporteAguinaldo', title: 'Comp Aporte Aguinal', icon: 'fa fa-file-pdf-o', class: '' },
    { path: '/CuotaSedeSocial', title: 'Comp Cuota S. Social', icon: 'fa fa-file-powerpoint-o', class: '' },



];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
