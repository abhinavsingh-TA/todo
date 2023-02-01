import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(protected userService: UsersService, private authService: SocialAuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.authState.subscribe(user => {
      let loggedIn = this.userService.user != null;
      if (loggedIn) {
        this.router.navigate(['/home']);
      }
    });
  }

}
