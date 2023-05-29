import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient, public jwthelper:JwtHelperService) { }
  signIn(userInput:FormGroup): Observable<any>{
return this.http.post<any>('http://127.0.0.1:8000/api/login_check',userInput)
.pipe(
        map(response => {
            // login successful if there's a jwt token in the response
            if (response) {
                localStorage.setItem('jwt', JSON.stringify(response));
            }
        })
);

}
public isAuthenticated():boolean{
  const token=localStorage.getItem('jwt')as string;
  return !this.jwthelper.isTokenExpired(token);
}

getUserName():Observable<any>
{
  return this.http.get<any>('http://localhost:8000/api/userName/');
}
}
