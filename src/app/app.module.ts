import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ProductListComponent } from "./Product/product-list/product-list.component";
import { ProductItemComponent } from "./Product/product-item/product-item.component";
import { NavbarComponent } from "./header/navbar/navbar.component";
import { LoginComponent } from "./form/login/login.component";
import { SignupComponent } from "./form/signup/signup.component";
import { CartComponent } from "./cart/cart.component";
import { AppRoutingModule } from "./app-routing.module";
import { HighlightItemDirective } from "./directive/highlight-item.directive";
import { ProductDetailComponent } from "./Product/product-detail/product-detail.component";
import { SearchFilterPipe } from './Pipe/search-filter.pipe';
import { FilterComponent } from './Product/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductItemComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    CartComponent,
    HighlightItemDirective,
    ProductDetailComponent,
    SearchFilterPipe,
    FilterComponent
  ],
  imports: [BrowserModule, ReactiveFormsModule, FormsModule, AppRoutingModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {}
