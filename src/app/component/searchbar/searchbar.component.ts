import { Component, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { product } from 'src/app/product.model';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  searchProduct: string
  selSort: string = "Sort By"
  selColor: string = "Filter by color"

  constructor(protected userService: UsersService) { }

  ngOnInit(): void {
  }

  search(){
    console.log(this.searchProduct)
    this.userService.curPage = 1
    let arr: product[] = this.userService.products
    arr = arr.filter(obj=>obj.title.toLowerCase().includes(this.searchProduct.toLowerCase()))
    console.log(arr)
    this.userService.curProducts = arr.slice(0,5)
    this.userService.allSearchProduct = arr
  }

  clearFilter(){
    this.userService.curPage = 1
    this.userService.curProducts = this.userService.products.slice(0,5)
    this.userService.allSearchProduct = []
    this.searchProduct = ""
    var form = (<HTMLFormElement>document.getElementById("searchForm")).reset();
  }

  uniqArray(array: product[]) {
    let keyArr:any[] = []
    for(let i=0;i<array.length;i++)
      keyArr.push(array[i].key)
    const result: product[] = [];
    console.log(keyArr)
    keyArr = keyArr.filter((key, index)=>keyArr.indexOf(key) === index)
    console.log(keyArr)
    let i = 0
    for(const key of keyArr){
      if(array[i].key===key)
        result.push(array[i++])
    }
    return result;
}

  onSubmit(form: NgForm){
    this.userService.curPage = 1
    const obj = form.value
    console.log(obj)
    console.log(this.userService.products)
    let arr: product[] = this.userService.products
    arr = this.uniqArray(arr)

    if(obj.sort && obj.sort != "Sort By"){
      if(obj.sort == 'Price: High to Low')
        arr = arr.sort((obj1, obj2)=>obj2.price-obj1.price)
      else
        arr = arr.sort((obj1, obj2)=>obj1.price-obj2.price)
    }
    if(obj.color && obj.color != "Filter by color"){
      arr = arr.filter(obj1=>obj1.title.toLowerCase().includes(obj.color.toLowerCase()))
    }
    if(obj.minprice && obj.maxprice){
      arr = arr.filter(obj1=>(obj1.price>=obj.minprice && obj1.price<=obj.maxprice))
    }
    if(obj.isFreeShipping){
      arr = arr.filter(obj=>obj.isFreeShipping)
    }

    console.log(arr)
    this.userService.curProducts = arr.slice(0,5)
    this.userService.allSearchProduct = arr

  }

  sub(){
    var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
  }

}
