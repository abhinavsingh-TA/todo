import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from '@abacritt/angularx-social-login';
import { HomeComponent } from './component/home/home.component';
import { NotecardComponent } from './component/notecard/notecard.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { UsersService } from './users.service';
import { LoginComponent } from './component/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PaymentComponent } from './component/payment/payment.component'
import { RouterModule, Routes } from '@angular/router';
import { SearchbarComponent } from './component/searchbar/searchbar.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'payment', component: PaymentComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotecardComponent,
    NavbarComponent,
    LoginComponent,
    PaymentComponent,
    SearchbarComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '784690088733-d6is8vlris0iqeuvnnjeecqn633lmtm2.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('5866770493411066')
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    },
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
