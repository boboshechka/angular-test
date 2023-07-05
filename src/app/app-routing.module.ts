import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductListPageComponent } from './pages/product-list-page/product-list-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'product-list', component: ProductListPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
