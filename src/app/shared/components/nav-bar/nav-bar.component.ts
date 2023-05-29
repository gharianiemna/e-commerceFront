import { ProductDetailsComponent } from 'src/app/product/product-details/product-details.component'; 
import { ProductListComponent } from 'src/app/product/product-list/product-list.component';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  constructor(private router:Router, private UserService:UserService) {}
  name$!:Observable<any[]>
  ngOnInit(): void {
   this.name$=this.UserService.getUserName();
    }

    isAuth!:boolean;

  onLogout() : void {
    localStorage.removeItem('jwt');
    this.router.navigateByUrl('logIn');
  }
  isLoggedIn() {
    return localStorage.getItem('jwt');
  }
}
