import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/category/category';
import { CategoryService } from 'src/app/dataServices/category.service';
import { ProductService } from 'src/app/dataServices/product-service';
import { Product } from '../product';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-product-add-forms1',
  templateUrl: './product-add-forms1.component.html',
  styleUrls: ['./product-add-forms1.component.css'],
  providers: [CategoryService,ProductService],
})
export class ProductAddForms1Component implements OnInit {
  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private toastrService:ToastrService
  ) {}
  model: Product = new Product();
  categories: Category[];
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
      console.log(this.categories);
    });
  }
  add(form: NgForm): void {
    const product = new Product();
    product.name = this.model.name;
    product.price = this.model.price;
    product.imageUrl = this.model.imageUrl;
    product.description = this.model.description;
    product.categoryId = this.model.categoryId
    this.productService.addProduct(product).subscribe(data=>{
    this.toastrService.success(product.name + "başarı ile eklendi")
    })
  }
}
