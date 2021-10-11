import { CartService } from './../cart.service'
import { Component, OnInit } from '@angular/core'
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems()

  checkoutForm = this.formBuilder.group({ name: '', address: '' })
  constructor(private cartService: CartService, private formBuilder: FormBuilder) {}

  onSubmit() {
    this.items = this.cartService.clearItems()
    console.warn('Your order has been submitted', this.checkoutForm.value)
    // console.log('form msg :' + this.checkoutForm.value)
    this.checkoutForm.reset()
  }

  ngOnInit(): void {}
}
