import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Product } from '../product/product';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class ProductService {

  constructor(private httpClient: HttpClient) { }
  url = "http://localhost:3000/products"
  getProducts(categoryId:number): Observable<Product[]> {
    let newPath = this.url;
    if (categoryId) {
      newPath = newPath + '?categoryId='+categoryId;
    }
    return this.httpClient.get<Product[]>(newPath).pipe(
      tap(data => { console.log(data) }),
      catchError(this.handleError)
    )

  }
  handleError(err: HttpErrorResponse) {
    let errorMessage = ''
    if (err.error instanceof ErrorEvent) {
      errorMessage = 'Bir hata oluştu' + err.message
    }
    else {
      errorMessage = 'Sistemsel bir hata oluştu'
    }
    return throwError(errorMessage);
  }
}
