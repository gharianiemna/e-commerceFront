import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getAllProducts():Observable<any>{
    return this.http.get<any>('http://localhost:8000/api/productList')
  }

  getProductById(id: number){
    return this.http.get<any>(`http://localhost:8000/api/productList/${id}`);
  }

  displayProductByCategory(category:number){
    return this.http.get<any>(`http://localhost:8000/api/productList/category/${category}`);
  }
  searchProduct(search:string){
    return this.http.get<any>(`http://localhost:8000/api/productList/search/${search}`);
  }

}
