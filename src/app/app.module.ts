import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderComponent } from './components/order/order.component';
import { ProductsComponent } from './components/products/products.component';
import { DropdownsComponent } from './components/dropdowns/dropdowns.component';
import { SeedsComponent } from './components/seeds/seeds.component';
import { SignupComponent } from './components/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaymentsComponent } from './components/payments/payments.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import {HttpClientModule} from '@angular/common/http';
import { AboutUsComponent } from './components/about-us/about-us.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    DropdownsComponent,
    SeedsComponent,
    SignupComponent,
    PaymentsComponent,
    WishlistComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    CartComponent,
    OrderComponent,
    ProductsComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
