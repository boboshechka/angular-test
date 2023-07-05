import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProductListPageComponent } from './pages/product-list-page/product-list-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ColumnComponent } from './components/column/column.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NavigationComponent,
    ProductListPageComponent,
    MainPageComponent,
    ColumnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
