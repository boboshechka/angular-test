import { Component } from '@angular/core';
import { ProductListService } from 'src/app/services/product-list.service';

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss'],
})
export class ProductListPageComponent {
  constructor(public productList: ProductListService) {}

}
