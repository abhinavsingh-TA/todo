import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-notecard',
  templateUrl: './notecard.component.html',
  styleUrls: ['./notecard.component.css']
})
export class NotecardComponent implements OnInit {
  
  @Input() note: {key: string, title: string, description: string}
  editData: {key: string, title: string, description: string}
  
  constructor(protected userService: UsersService) { }

  ngOnInit(): void {
  }

  openModal(){
    this.userService.editData = this.note
    console.log(this.userService.editData)
    this.userService.edit = true
  }
  
  deleteNote(key: string){
    for(let i=0;i<this.userService.notes.length;i++){
      if(this.userService.notes[i].key === key)
        this.userService.notes.splice(i, 1);
    }
  }

}
