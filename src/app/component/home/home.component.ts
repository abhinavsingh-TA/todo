import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DatePipe]
})
export class HomeComponent implements OnInit {
  title: string = ""
  description: string = ""

  constructor(protected userService: UsersService, public datepipe: DatePipe) {
    let currentDateTime =this.datepipe.transform((new Date), 'MM/dd/yyyy h:mm:ss:sss');
  
    console.log(currentDateTime);
   }

  ngOnInit(): void {
  }

  addNote(){
    this.userService.notes.push({key: this.datepipe.transform((new Date), 'MM/dd/yyyy h:mm:ss:sss'),title: this.title, description: this.description})
    this.title=""
    this.description=""
    console.log(this.userService.notes)
  }


}
