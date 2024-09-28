import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrackOrderComponent } from './components/track-order/track-order.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SyngentaSeedsComponent } from './components/syngenta-seeds/syngenta-seeds.component';

const routes: Routes = [
  { component: TrackOrderComponent, path: 'trackorder' },
  { component: ProductDetailsComponent, path: 'productdetails' },
  { component: SyngentaSeedsComponent, path: 'syngentaseeds' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
