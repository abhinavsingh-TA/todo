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
  tasks: any[] = [];
  panelOpenState: boolean = false;

  constructor(protected userService: UsersService, public datepipe: DatePipe) {
    let currentDateTime =this.datepipe.transform((new Date), 'MM/dd/yyyy h:mm:ss:sss');
  
    console.log(currentDateTime);
   }

  ngOnInit(): void {
  }

  addNote(){
    this.userService.notes.push({key: this.datepipe.transform((new Date), 'MM/dd/yyyy h:mm:ss:sss'),title: this.title, description: this.description, completed: false})
    this.title=""
    this.description=""
    console.log(this.userService.notes)
  }

  autogrow(){
    let  textArea = document.getElementById("form1Example2")       
    textArea.style.overflow = 'hidden';
    textArea.style.height = '0px';
    textArea.style.height = textArea.scrollHeight + 'px';
  }

  addTask(task: string) {
    if (task === "") return;
    this.tasks.push({
      text: task,
      done: false
    });
  }
  removeTask(task) {
    this.tasks.splice(this.tasks.indexOf(task), 1);
  }
  toggle(task) {
    task.done = !task.done;
  }


}
