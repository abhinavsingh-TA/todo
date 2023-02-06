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
  sizee: string=""
  
  constructor(protected userService: UsersService) { }

  ngOnInit(): void {
    this.sizee = this.product.sizes[0]
  }

  addToCart(key: string, title: string, description: string, price: number, currencyFormat: string, isFreeShipping: boolean){
    let extKey = key.toString()+this.sizee.toString()
    if(!this.userService.cart.has(extKey))
      this.userService.cart.set(extKey, {product: this.product, total: 1, sizeSelected: this.sizee})
    else
      this.userService.cart.set(extKey, {product: this.product, total: this.userService.cart.get(extKey).total+1, sizeSelected: this.sizee})
    
    this.userService.cartTotal += 1
    console.log(this.userService.cart)
  }

  radioChangeHandler(event: any){
    this.sizee = event.target.value
  }


}
