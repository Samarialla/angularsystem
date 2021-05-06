/**
 * @author Sergio Amarilla
 * @since  15-03-2021
 */
import { Component } from '@angular/core';
import { AuthConfig, NullValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { environment } from 'environments/environment';
import { LoginService } from './services/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  username: string;
  isLogged: boolean;
  isAdmin: boolean;


  constructor(private oauthService: OAuthService,
    private loginService: LoginService) {
    this.configure();

  }
  //parametros para configurar el keycloak
  authConfig: AuthConfig = {
    issuer: environment.basUrlKeycloak+'auth/realms/interno',
    redirectUri: window.location.origin,
    clientId: 'interno-fronted',//'tutorial-frontend',//
    responseType: 'code',
    scope: 'openid profile',//'openid profile email offline_access', //
    showDebugInformation: true,
    requireHttps: false
  };
  // configuracion para iniciar el keycloack
  configure(): void {
    this.oauthService.configure(this.authConfig);
    this.oauthService.tokenValidationHandler = new NullValidationHandler();
    this.oauthService.setupAutomaticSilentRefresh();
    this.oauthService.loadDiscoveryDocument().then(() => this.oauthService.tryLogin())
      .then(() => {
        if (this.oauthService.getIdentityClaims()) {
          this.isLogged = this.loginService.getIsLogged();
          this.isAdmin = this.loginService.getIsAdmin();
          this.username = this.loginService.getUsername();
          //this.messageService.sendMessage(this.loginService.getUsername());
        }
      });
  }

}

/*********************************************end file******************************************************************** */