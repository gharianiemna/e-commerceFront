import { Component, Input ,OnInit } from '@angular/core';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() name:any[] = [];
  @Input() price:any[]=[];
  @Input() id:any[]=[];
  constructor() { }

 }
