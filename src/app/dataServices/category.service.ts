import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Category } from '../category/category';

@Injectable()
export class CategoryService {

  constructor(private httpClient: HttpClient) { }
  path = "http://localhost:3000/categories"
  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.path).pipe(
      tap(data => {
        console.log(data)
      })
    )
  }
}
