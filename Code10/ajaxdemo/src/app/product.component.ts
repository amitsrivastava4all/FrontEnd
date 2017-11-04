import {Component,OnInit} from '@angular/core';
import {ProductService} from './product.service';
import {Product} from './ProductModel';
import 'rxjs/add/operator/toPromise';
@Component({
  selector : 'products',
  templateUrl:'./product.component.html',
  providers:[ProductService]
})
export class ProductComponent {
  public productList:Product[]=[];

  constructor(private productService:ProductService){

  }

  showProductsFromServer(){
    this.productService.getAllProductsFromServer() .then(products=>{
          console.log("Getting the Products in Promise ",products);
          return this.productList=products;
      })
  }
  showProducts(){
      console.log("Show Products Call");
      this.productService.getAllProductLocal()
      .then(products=>{
          console.log("Getting the Products in Promise ",products);
        return this.productList=products;
      });

    }

}
