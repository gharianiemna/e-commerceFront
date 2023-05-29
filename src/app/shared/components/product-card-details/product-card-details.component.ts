import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-product-card-details',
  templateUrl: './product-card-details.component.html',
  styleUrls: ['./product-card-details.component.scss']
})
export class ProductCardDetailsComponent {

  @Input() name:any[] = [];
  @Input() description:any[]=[];
  @Input() price:any[]=[];
  @Input() quantity:any[]=[];
  @Input() reference:any[]=[];

}
