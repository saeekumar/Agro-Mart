import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrackOrderComponent } from './components/track-order/track-order.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SyngentaSeedsComponent } from './components/syngenta-seeds/syngenta-seeds.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProductsComponent } from './components/products/products.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderComponent } from './components/order/order.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { ProfileUpdateComponent } from './components/profile-update/profile-update.component';
import { CategoryComponent } from './components/category/category.component';

const routes: Routes = [
   { path: 'profile', component: ProfileDetailsComponent },
 

  {path:'profile-update',component:ProfileUpdateComponent},

  {path:'category',component:CategoryComponent},
  {
    component: ProductsComponent,
    path: '',
  },
  {
    component: SignupComponent,
    path: 'signup',
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
  {
    component: AboutUsComponent,
    path: 'aboutUs',
  },
  { component: TrackOrderComponent, path: 'trackorder' },
  { component: ProductDetailsComponent, path: 'product-details' },
  { component: SyngentaSeedsComponent, path: 'syngentaseeds' },
  { component: ContactUsComponent, path: 'contact-us' },



  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
