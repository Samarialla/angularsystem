/**
 * @author Sergio Amarilla
 * @since 26-03-2021
 * @package para verificar si esta o no logueado al sistema y realizar el redirect a keycloak
 */

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { LoginService } from 'app/services/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router, private oauthService: OAuthService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.loginService.getIsLogged()) {
      this.oauthService.initImplicitFlowInternal();
      return false;
    }
    return true;
  }

}
