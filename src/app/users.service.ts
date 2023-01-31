import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Injectable } from '@angular/core';
import { product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  user: SocialUser
  products: product[] = []
  edit: boolean = false
  editData: {key: string, title: string, description: string}
  cart: Map<string, {total: number, title: string, description: string, price: number, currencyFormat: string}> = new Map<string, {total: number, title: string, description: string, price: number, currencyFormat: string}>()
  cartTotal: number = 0

  constructor(private authService: SocialAuthService) { }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    console.log(this.user)
    this.authService.signOut();
  }
  
}
