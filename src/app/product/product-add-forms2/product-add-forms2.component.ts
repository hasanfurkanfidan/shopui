import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/category/category';
import { CategoryService } from 'src/app/dataServices/category.service';
import { ProductService } from 'src/app/dataServices/product-service';
import { Product } from '../product';

@Component({
  selector: 'app-product-add-forms2',
  templateUrl: './product-add-forms2.component.html',
  styleUrls: ['./product-add-forms2.component.css'],
  providers: [CategoryService, ProductService],
})
export class ProductAddForms2Component implements OnInit {
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private formBuilder: FormBuilder,
    private formGroup: FormGroup
  ) {}
  productAddForm: FormGroup;
  categoris: Category[];
  product: Product = new Product();
  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl: ['', Validators.required],
      price: ['', Validators.required],
      categoryId: ['', Validators.required],
    });
  }
  add() {
    if (this.productAddForm.valid) {
      this.product = Object.assign({}, this.productAddForm.value);
    }
  }
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data) => {
      this.categoris = data;
    });
    this.createProductAddForm()
  }
}
