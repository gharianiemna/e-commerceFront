import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartDetailsComponent } from './cart/cart-details/cart-details.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { LogInComponent } from './user/log-in/log-in.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent },
  { path: 'cart', component:CartDetailsComponent  },
  { path: 'detail/:id', component:ProductDetailsComponent },
  { path: 'SignIn', component:SignInComponent },
  { path: 'LogIn', component:LogInComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
