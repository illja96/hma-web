import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SocialLoginModule, GoogleLoginProvider, AuthServiceConfig } from 'angularx-social-login';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SocialLoginInterceptor } from 'src/interceptors/social-login/social-login.interceptor';
import { SocialLoginGuard } from 'src/guards/social-login/social-login.guard';
import { environment } from 'src/environments/environment';
import { HomeModule } from './home/home.module';
import { HouseModule } from './house/house.module';
import { UserModule } from './user/user.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const authServiceConfig = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(environment.googleOAuthClientId)
  }
]);

export function getAuthServiceConfig() {
  return authServiceConfig;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    SocialLoginModule,
    HomeModule,
    HouseModule,
    UserModule,
    AppRoutingModule,
    ModalModule.forRoot()
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfig
    },
    SocialLoginGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SocialLoginInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
