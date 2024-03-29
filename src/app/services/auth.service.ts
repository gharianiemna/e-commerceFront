import { Injectable } from '@angular/core';
import { Router , CanActivate} from '@angular/router';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{

  constructor(public auth: UserService, public router: Router) {}
  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['logIn']);
      return false;
    }
    return true;
  }
}
