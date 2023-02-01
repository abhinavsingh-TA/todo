import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  cartArray: any[]
  total: number = 0
  freeShipping: boolean = true

  constructor(protected userService: UsersService) { }

  ngOnInit(): void {
    this.cartArray = [...this.userService.cart]

    this.calculateSum()    
  }

  calculateSum(){
    //total pay
    this.total = 0
    this.freeShipping = true
    this.userService.cartTotal = 0
    for(let item of this.userService.cart.values()){
      this.total += (item.total*item.price)
      this.userService.cartTotal += item.total
      if(!item.isFreeShipping)
        this.freeShipping = false
    }
  }

  incdec(symbol: string, key: string){
    console.log(this.cartArray)
    console.log(typeof(this.cartArray[0][0]), " key ", key)

    if(symbol === '-'){
      let obj = this.userService.cart.get(key)
      obj.total -= 1
    }
    else if(symbol === '+'){
      let obj = this.userService.cart.get(key)
      obj.total += 1
    }
    this.cartArray = [...this.userService.cart]
    this.calculateSum()
    console.log(this.cartArray)
  }

  deleteItem(key: string){
    if(confirm("Are you sure to remove this item from the cart?")) {
      this.userService.cart.delete(key)
    }
    this.cartArray = [...this.userService.cart]
    this.calculateSum()
  }

}
