import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { ProductsComponent } from './components/products/products.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { PaymentsComponent } from './components/payments/payments.component';

const routes: Routes = [
  {
    component:ProductsComponent,path:""
  },
  {
    component:SignupComponent,path:"signUp"
  },
  {
    component:WishlistComponent,path:"wishlist"
  },
  {
    component:PaymentsComponent,path:"payment"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
