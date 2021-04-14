import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ProductFilterPipe } from './product/product-filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertifyService } from './alertify.service';
import {HttpClientModule} from '@angular/common/http';
import { ProductAddForms1Component } from './product/product-add-forms1/product-add-forms1.component'
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ProductAddForms2Component } from './product/product-add-forms2/product-add-forms2.component';
import { LoginComponent } from './login/login.component';
import { AccountService } from './dataServices/account.service';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CategoryComponent,
    ProductComponent,
    ProductFilterPipe,
    ProductAddForms1Component,
    ProductAddForms2Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AccountService,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AlertifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
