import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { ProductsComponent } from './components/products/products.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderComponent } from './components/order/order.component';

const routes: Routes = [
  {
    component: ProductsComponent,
    path: '',
  },
  {
    component: SignupComponent,
    path: 'signUp',
  },
  {
    component: WishlistComponent,
    path: 'wishlist',
  },
  {
    component: PaymentsComponent,
    path: 'payment',
  },
  {
    component: LoginComponent,
    path: 'login',
  },
  {
    component: CartComponent,
    path: 'cart',
  },
  {
    component: OrderComponent,
    path: 'order',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
