/**
 * @author Sergio Amarilla
 * @since  15-03-2021
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  username: string;
  isLogged: boolean;
  isAdmin: boolean;


  constructor() {
   
  }
  //parametros para configurar el keycloak
 
}

/*********************************************end file******************************************************************** */