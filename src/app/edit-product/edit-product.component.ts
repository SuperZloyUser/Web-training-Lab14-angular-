import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Input } from '@angular/core';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product;
  product_name: string;
  product_description: string;

  myForm;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private ProductService: ProductService
  ) {
    this.myForm = this.formBuilder.group({
      product_name: '',
      product_description: 'Default description'
     })
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = this.ProductService.getProductById(+params.get('productId'));
    });

    this.product_name = this.product.name;
     this.product_description = this.product.description;

  }

  onClickEdit(){
    this.ProductService.updateProductById(this.product.id, this.product_name, this.product_description);

    window.alert('Product edited successfully!');
    console.log('Product edited successfully!');
  }

}
