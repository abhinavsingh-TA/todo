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
    this.userService.edit = false
  }

  openModal(){
    if(this.userService.edit)
      this.userService.edit = false
    this.userService.editData = this.note
    setTimeout(() => {
      this.userService.edit = true      
    }, 1);

  }
  
  deleteNote(key: string){
    for(let i=0;i<this.userService.notes.length;i++){
      if(this.userService.notes[i].key === key)
        this.userService.notes.splice(i, 1);
    }
  }

}
