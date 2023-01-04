import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'todo';

  constructor(private authService: SocialAuthService, protected userService: UsersService) { }

  ngOnInit(): void {
    this.authService.authState.subscribe((user)=>{
      this.userService.user = user
    })
  }

  
}
