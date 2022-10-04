import { ArrayType } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { filter } from "rxjs";
import { IProduct } from "./product";

@Component({
    selector: 'pm-products',
    templateUrl: './product.list.component.html',
    styleUrls: ['./product.list.component.css']
})


export class ProductListComponent  implements OnInit {
    
    pageTitle = 'Lista de produtos';
    imgWidth = 50;
    imgMargin = 2;
    showImage = false;
    
private _listFilter: string = '';
get listFilter(): string{
  return this._listFilter;
}

set listFilter(value: string){
  this._listFilter = value;
  console.log('In setter:', value);
  this.filteredProducts = this.performerFilter(value);
}

    filteredProducts: IProduct[] = [];
    products: IProduct[] = [
        {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2021",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "assets/images/leaf_rake.png"
          },
          {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2021",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "assets/images/garden_cart.png"
          }
    ];

    performerFilter(filterBy: string) : IProduct[]{
      filterBy = filterBy.toLocaleLowerCase();
      return this.products.filter((product: IProduct) => 
      product.productName.toLocaleLowerCase().includes(filterBy));
    }

    ngOnInit(): void {
      this.listFilter = 'cart';
    }

    toggleImage(): void{
      this.showImage = !this.showImage;
    }

  }
