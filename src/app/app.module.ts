import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SyngentaSeedsComponent } from './components/syngenta-seeds/syngenta-seeds.component';
import { TrackOrderComponent } from './components/track-order/track-order.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
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
import { AboutUsComponent } from './components/about-us/about-us.component'
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { LoginService } from './_services/login.service';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { TokenService } from './_services/token.service';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { ProfileUpdateComponent } from './components/profile-update/profile-update.component';
import { CategoryComponent } from './components/category/category.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    SyngentaSeedsComponent,
    TrackOrderComponent,
    ProductsComponent,
    DropdownsComponent,
    SignupComponent,
    PaymentsComponent,
    WishlistComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    CartComponent,
    OrderComponent,
    ProductsComponent,
    AboutUsComponent,
    SeedsComponent,
    ContactUsComponent,
    ProfileDetailsComponent,
    ProfileUpdateComponent,
    CategoryComponent,
    ProductDetailsComponent
    
  ],
  imports: [
    FormsModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      progressBar: true,
    })
    
  ],
    
    
  providers:[{provide:HTTP_INTERCEPTORS,useClass:TokenService,multi:true}],

  bootstrap: [AppComponent]
  
})
export class AppModule {}
