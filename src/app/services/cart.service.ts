import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }
  
  getCart():Observable<any>{
    return this.http.get<any>('http://localhost:8000/api/Cart')
  }
  saveCart(product: any): Observable<any> {
    return this.http.post('http://localhost:8000/api/Cart', { product });
  }

}
