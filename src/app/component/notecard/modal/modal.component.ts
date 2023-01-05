import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';

declare var window: any

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {
  editKey: string = ""
  editTitle:string = ""
  editDesc:string = ""
  formModal: any

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('exampleModal')
    )
    this.editKey = this.userService.editData.key
    this.editTitle = this.userService.editData.title
    this.editDesc = this.userService.editData.description
    this.formModal.show()
  }


  closeModal(){
    this.userService.edit = false
    this.formModal.hide()
  }

  saveChanges(key: string){
    for(let i=0;i<this.userService.notes.length;i++){
      if(this.userService.notes[i].key === key){
        this.userService.notes[i] = {...this.userService.notes[i], title:this.editTitle, description: this.editDesc}
        break
      }
    }
  }
  
  ngOnDestroy(): void {
    this.userService.edit = false
    this.formModal.hide()
  }

}
