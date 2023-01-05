import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-notecard',
  templateUrl: './notecard.component.html',
  styleUrls: ['./notecard.component.css']
})
export class NotecardComponent implements OnInit {
  
  @Input() note: {key: string, title: string, description: string}

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
  }
  
  deleteNote(key: string){
    for(let i=0;i<this.userService.notes.length;i++){
      if(this.userService.notes[i].key === key)
        this.userService.notes.splice(i, 1);
    }
  }

}
