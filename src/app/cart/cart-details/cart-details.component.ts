import { ProductsService } from 'src/app/services/products.service';
import { CartService } from './../../services/cart.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.scss']
})
export class CartDetailsComponent {
  constructor(private service:ProductsService, private cartService: CartService, private router: Router, private route: ActivatedRoute){}
  cartItems:any[]=[]
  cartTotal= 0

  ngOnInit() {
    this.loadCartItems();
  }
  loadCartItems() {
    this.cartService.getCart().subscribe((items: any) => {
      this.cartItems = items;
      this.calcCartTotal();
    })
  }
  calcCartTotal() {
    this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.quantity * item.price)
    })
  }
}
