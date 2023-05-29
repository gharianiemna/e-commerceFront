import { ProductsService } from 'src/app/services/products.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
products:any[]=[]
constructor(private service:ProductsService){}
ngOnInit():void{
this.getProducts();
}
getProducts(){
  this.service.getAllProducts().subscribe((res:any)=>{
this.products=res;
  })
}

}