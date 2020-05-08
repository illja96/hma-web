import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService, SocialUser } from 'angularx-social-login';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class SocialLoginGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService) { }

  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.authState
      .pipe(
        map((socialUser: SocialUser) => {
          if (!socialUser) {
            this.router.navigateByUrl('/');
            return false;
          }

          return true;
        }));
  }
}
