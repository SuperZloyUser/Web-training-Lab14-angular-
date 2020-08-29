import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from '../product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  
  product;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private ProductService: ProductService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = this.ProductService.getProducts()[+params.get('productId')];
      console.log(params.get('productId'));
    });
  }

}
