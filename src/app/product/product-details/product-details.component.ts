import { CartService } from './../../services/cart.service';
import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {

  details:any[]=[]
  cart:any[]=[]
  constructor(private service:ProductsService, private cartService: CartService, private router: Router, private route: ActivatedRoute,){}
ngOnInit():void{
this.getProductDetails();
}
getProductDetails(){
  const id = Number(this.route.snapshot.paramMap.get('id'));
  this.service.getProductById(id).subscribe((res:any)=>{
    this.details=res;
  console.log(this.details);})
}

// buyProduct(item){
  
//   //const product =this.getProductDetails()
//   this.cartService.getCart().subscribe((res:any)=>{
//     this.cart=res;})
//     const productExistInCart = this.cart.find(({name}) => name === item.name);
  
// }
}
