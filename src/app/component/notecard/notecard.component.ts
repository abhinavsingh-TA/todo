import { Component, Input, OnInit } from '@angular/core';
import { product } from 'src/app/product.model';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-notecard',
  templateUrl: './notecard.component.html',
  styleUrls: ['./notecard.component.css']
})
export class NotecardComponent implements OnInit {
  
  @Input() product: product
  editData: product
  
  constructor(protected userService: UsersService) { }

  ngOnInit(): void {
    this.userService.edit = false
  }

  addToCart(key: string, title: string, description: string, price: number, currencyFormat: string, isFreeShipping: boolean){
    if(!this.userService.cart.has(key))
      this.userService.cart.set(key, {key: key, total: 1, title: title, description: description, price: price, currencyFormat: currencyFormat, isFreeShipping: isFreeShipping})
    else
      this.userService.cart.set(key, {key: key, total: this.userService.cart.get(key).total+1, title: title, description: description, price: price, currencyFormat: currencyFormat, isFreeShipping: isFreeShipping})
    
    this.userService.cartTotal += 1
    console.log(this.userService.cart)

    // this.userService.cart.push({key: key, title: title, description: description, price: price, currencyFormat: currencyFormat})
  }

  openModal(){
    if(this.userService.edit)
      this.userService.edit = false
    this.userService.editData = this.product
    setTimeout(() => {
      this.userService.edit = true      
    }, 1);

  }
  
  deleteNote(key: string){
    // for(let i=0;i<this.userService.notes.length;i++){
    //   if(this.userService.notes[i].key === key)
    //     this.userService.notes.splice(i, 1);
    // }
  }

}
