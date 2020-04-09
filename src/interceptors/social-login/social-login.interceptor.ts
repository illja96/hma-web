import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { AuthService, SocialUser } from 'angularx-social-login';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators'
import { environment } from 'src/environments/environment';

@Injectable()
export class SocialLoginInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) { }

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const isApiRequest = request.url.startsWith(environment.apiServerBaseUrl);
    if (!isApiRequest) {
      return next.handle(request);
    }

    return this.authService.authState
      .pipe(
        switchMap((socialUser: SocialUser) => {
          const isSocialUserExists = socialUser != null;
          if (isSocialUserExists && isApiRequest) {
            request = request.clone({
              setHeaders: {
                'Authorization': `Bearer ${socialUser.idToken}`
              }
            });
          }

          return next.handle(request);
        })
      );
  }
}
