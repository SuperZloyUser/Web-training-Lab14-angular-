import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-maker',
  templateUrl: './product-maker.component.html',
  styleUrls: ['./product-maker.component.css']
})
export class ProductMakerComponent implements OnInit {
  
  product_name: string;
  product_description = 'Default description';

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
  }

  onClickAdd(){

    let id = this.ProductService.getProducts().length;

    this.ProductService.addProduct(this.product_name, this.product_description, id);
    
    window.alert('Product added successfully!');
    console.warn('Product added successfully!');
  }

}