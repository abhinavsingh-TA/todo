import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(protected userService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  gotoPayment(){
    this.router.navigate(['payment'])
  }

}
