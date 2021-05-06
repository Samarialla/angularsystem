/**
 * @author Sergio Amarilla
 * @since 17-03-2021
 */

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  username: string;
  userDataLogin: any = {};

  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  urlUserData = environment.baseUrl+'apibancaria/api/usuario/userdata';

  protected token;
  constructor(private oauthService: OAuthService, private httpClient: HttpClient) { }

  //function para implementar el login con keycloak
  public login(): void {
    this.oauthService.initImplicitFlowInternal();
  }


  //function para salir del sistema
  public logout(): void {
    this.oauthService.logOut();
  }


  //verificar que este logueado al sistema
  public getIsLogged(): boolean {
    return (this.oauthService.hasValidIdToken() && this.oauthService.hasValidAccessToken());
  }

  public getUsername(): string {
    if (this.oauthService.hasValidIdToken() && this.oauthService.hasValidAccessToken()) {
      this.username = this.oauthService.getIdentityClaims()[`preferred_username`];
    }
    return this.username;
  }
  // function para obtener los el token de la session
  public getToken() {
    if (this.oauthService.hasValidIdToken() && this.oauthService.hasValidAccessToken()) {
      return this.oauthService.getAccessToken();
    }
  }

  //function si se desea obtener los datos si es admin
  public getIsAdmin(): boolean {
    const token = this.oauthService.getAccessToken();
    const payload = token.split('.')[1];
    const payloadDecodedJson = atob(payload);
    const payloadDecoded = JSON.parse(payloadDecodedJson);
    // return console.log(payloadDecoded.realm_access.roles);
    return payloadDecoded.realm_access.roles.indexOf('realm-admin') !== -1;
  }



}