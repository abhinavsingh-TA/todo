import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';

declare var window: any
@Component({
  selector: 'app-notecard',
  templateUrl: './notecard.component.html',
  styleUrls: ['./notecard.component.css']
})
export class NotecardComponent implements OnInit {
  
  @Input() note: {key: string, title: string, description: string}
  
  formModal: any

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('exampleModal')
    )
  }

  openModal(){
    this.formModal.show()
  }

  closeModal(){
    this.formModal.hide()
  }
  
  deleteNote(key: string){
    for(let i=0;i<this.userService.notes.length;i++){
      if(this.userService.notes[i].key === key)
        this.userService.notes.splice(i, 1);
    }
  }

}
