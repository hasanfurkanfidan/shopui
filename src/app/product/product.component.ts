import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../alertify.service';
import { Product } from './product';
import { HttpClient } from '@angular/common/http'
import { ProductService } from '../dataServices/product-service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
declare let alertify: any
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})

export class ProductComponent implements OnInit {

  constructor(private alerifyService: AlertifyService,private toastrService:ToastrService, private activatedRoute: ActivatedRoute, private httpClient: HttpClient, private productService: ProductService) {


  }
  filterText = "";
  title = "Ürün Listesi"
  products: Product[];
  addToCart(product: Product) {
    this.toastrService.success("Sepete eklendi : " + product.name)
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.productService.getProducts(params["categoryId"]).subscribe(data => {
        this.products = data
      })
    })

  }

}
