import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductCardDetailsComponent } from './components/product-card-details/product-card-details.component';
import { ImagesCarosselComponent } from './components/images-carossel/images-carossel.component';



@NgModule({
  declarations: [
    NavBarComponent,
    ProductCardComponent,
    ProductCardDetailsComponent,
    ImagesCarosselComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    NavBarComponent ,
    ProductCardComponent,
    ProductCardDetailsComponent
  ]
})
export class SharedModule { }
