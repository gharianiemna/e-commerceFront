import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartDetailsComponent } from './cart/cart-details/cart-details.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { LogInComponent } from './user/log-in/log-in.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { AuthService as Auth } from './services/auth.service';


const routes: Routes = [
  
  { path: 'products', component: ProductListComponent,canActivate: [Auth]  },
  { path: 'cart', component:CartDetailsComponent,canActivate: [Auth]   },
  { path: 'detail/:id', component:ProductDetailsComponent,canActivate: [Auth]  },
  { path: 'SignIn', component:SignInComponent },
  { path: 'logIn', component:LogInComponent },
  {path:'addNewProduct', component:AddProductComponent,   data: { 
    expectedRole: "ROLE_ADMIN"},canActivate: [Auth] },
  { path: '**', redirectTo: '/products', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
