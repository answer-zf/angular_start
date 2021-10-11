import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { TopBarComponent } from './top-bar/top-bar.component'
import { ProductListComponent } from './product-list/product-list.component'
import { ProductAlertsComponent } from './product-alerts/product-alerts.component'
import { ProductDetailsComponent } from './product-details/product-details.component'
import { CartComponent } from './cart/cart.component'
import { ShoppingComponent } from './shopping/shopping.component'
import { ReactiveFormsModule } from '@angular/forms'

const ROUTES: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'products/:productId', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'shopping', component: ShoppingComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShoppingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule, RouterModule.forRoot(ROUTES)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
