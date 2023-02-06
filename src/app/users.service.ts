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
  allSearchProduct: product[] = []
  curPage: number = 1
  curProducts: product[]
  cart: Map<string, {product: product, total: number, sizeSelected: string}> = new Map<string, {product, total: number, sizeSelected: string}>()
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
    this.cart.clear()
    this.cartTotal = 0
  }
  
}
