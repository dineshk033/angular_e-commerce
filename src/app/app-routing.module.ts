import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ProductListComponent } from "./Product/product-list/product-list.component";
import { LoginComponent } from "./form/login/login.component";
import { SignupComponent } from "./form/signup/signup.component";
import { CartComponent } from "./cart/cart.component";
import { ProductDetailComponent } from "./Product/product-detail/product-detail.component";
const appRoutes: Routes = [
  { path: "", component: ProductListComponent },
  { path: "product", component: ProductListComponent },
  { path: "cart", component: CartComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "productDetail/:id", component: ProductDetailComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
