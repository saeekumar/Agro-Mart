import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SyngentaSeedsComponent } from './components/syngenta-seeds/syngenta-seeds.component';
import { TrackOrderComponent } from './components/track-order/track-order.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';




@NgModule({
  declarations: [
    AppComponent,
    SyngentaSeedsComponent,
    TrackOrderComponent,
    ProductDetailsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
