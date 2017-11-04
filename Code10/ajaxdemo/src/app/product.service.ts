import {Product} from './ProductModel';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class ProductService{
  prepareProduct():Product[]{
    var productList:Product[]=[];
    for(let i =1; i<=5; i++){
      let product  = new Product(i,"Apple"+i,9000+i,"https://staticshop.o2.co.uk/product/images/iphone_se_16gb_rose_gold_header.png?cb=28d7f5d2987a5964f7cd0ea7f5204419");
      productList.push(product);
    }
    return productList;
  }
   constructor(private http:Http){

   }
  getAllProductLocal():Promise<Product[]>{
    var url = "";
     //const productList:Product[] = this.prepareProduct();
     return Promise.resolve(this.prepareProduct());
  }
  getAllProductsFromServer():Promise<Product[]>{
    var url ="https://raw.githubusercontent.com/brainmentorspvtltd/myserverdata/master/mobiles.json";
    return this.http.get(url).toPromise().then((response)=>{
        return response.json().mobiles as Product[];
    }).catch(this.handleError);
    //return null;
   // const object = {name:'Ram',age:21};
    //this.http.post(url, object);
  }

  private handleError(error: any): Promise<any> {
  console.error('An error occurred', error);
  return Promise.reject(error.message || error);
}

}
