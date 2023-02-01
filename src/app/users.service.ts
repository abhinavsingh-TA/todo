import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  user: SocialUser
  products: product[] = []
  edit: boolean = false
  editData: {key: string, title: string, description: string}
  cart: Map<string, {key:string, total: number, title: string, description: string, price: number, currencyFormat: string, isFreeShipping: boolean}> = new Map<string, {key:string, total: number, title: string, description: string, price: number, currencyFormat: string, isFreeShipping: boolean}>()
  cartTotal: number = 0

  constructor(private authService: SocialAuthService, private router: Router) { }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    console.log(this.user)
    this.authService.signOut();
    this.router.navigate(['/'])
  }
  
}
