import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';
import { HttpClient } from '@angular/common/http';
import { product } from 'src/app/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DatePipe]
})
export class HomeComponent implements OnInit {
  title: string = ""
  description: string = ""
  products: product[]
  maxLen: number

  constructor(protected userService: UsersService, public datepipe: DatePipe, private http: HttpClient, private router: Router) {
    let currentDateTime =this.datepipe.transform((new Date), 'MM/dd/yyyy h:mm:ss:sss');
  
    console.log(currentDateTime);
   }

  ngOnInit(): void {
    if(!this.userService.user)
        this.router.navigate(['/'])

    let url="https://mocki.io/v1/597dbee8-3eac-4de5-b464-19a9aed78f07"
    this.http.get(url).subscribe(products=>{
      console.log(products['products'])

      let arr = products['products']
      for(let i=0;i<arr.length;i++)
        this.userService.products.push(new product(arr[i]['id'], arr[i]['title'], arr[i]['description'], arr[i]['availableSizes'], arr[i]['price'], arr[i]['currencyId'], arr[i]['currencyFormat'], arr[i]['isFreeShipping'], arr[i]['style']))
      this.maxLen = Math.ceil(this.userService.products.length/5)
      this.userService.curProducts = this.userService.products.slice(0,5)
    })
  }

  pageChange(page: any){
    console.log(this.userService.curProducts)
    if(page == '<')
      this.userService.curPage = Math.max(1, this.userService.curPage-1)
    else if(page == '>')
      this.userService.curPage = Math.min(this.maxLen, this.userService.curPage+1)
    else
      this.userService.curPage = page

    if(this.userService.allSearchProduct.length>0){
      this.userService.curProducts = this.userService.allSearchProduct.slice((this.userService.curPage-1)*5, this.userService.curPage*5)
      this.maxLen = Math.ceil(this.userService.allSearchProduct.length/5)
    }
    else{
      this.userService.curProducts = this.userService.products.slice((this.userService.curPage-1)*5, this.userService.curPage*5)
      this.maxLen = Math.ceil(this.userService.products.length/5)
    }
  }


}
