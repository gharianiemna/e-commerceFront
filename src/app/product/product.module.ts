import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

import { AddProductComponent } from './add-product/add-product.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,

    AddProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class ProductModule { }
