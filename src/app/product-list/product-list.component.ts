import { Component, OnInit } from '@angular/core'

import { products } from '../products'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products = products

  share() {
    window.alert('The product has been shared!')
  }

  onNotify(e: any) {
    window.alert(e)
  }

  constructor() {}

  ngOnInit(): void {}
}
