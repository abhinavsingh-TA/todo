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

    //total pay
    for(let item of this.userService.cart.values()){
      this.total += (item.total*item.price)
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
    console.log(this.cartArray)
  }

}
