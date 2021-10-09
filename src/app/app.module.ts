import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component'

// const ROUTES: Routes = [{ path: '' }]

@NgModule({
  declarations: [AppComponent, TopBarComponent, ProductListComponent, ProductAlertsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
