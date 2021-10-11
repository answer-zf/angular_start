import { CartService } from './../cart.service'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Product, products } from '../products'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private cartService: CartService) {}

  product: Product | undefined

  addToCart(product: Product) {
    this.cartService.addToCart(product)
    window.alert('You product has been added to the cart')
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap
    const productIdFromRoute = Number(routeParams.get('productId'))
    this.product = products.find(product => product.id === productIdFromRoute)
  }
}
