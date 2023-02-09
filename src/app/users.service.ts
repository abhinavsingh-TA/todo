import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  user: SocialUser
  notes: {key: string, title: string, description: string, completed: boolean}[] = []
  edit: boolean = false
  editData: {key: string, title: string, description: string}
  
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
    this.notes = []
  }
  
}
