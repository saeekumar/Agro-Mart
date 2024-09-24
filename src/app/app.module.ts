import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsComponent } from './components/products/products.component';
import { DropdownsComponent } from './components/dropdowns/dropdowns.component';
import { SeedsComponent } from './components/seeds/seeds.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    DropdownsComponent,
    SeedsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
