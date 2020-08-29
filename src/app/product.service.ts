import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor() { }

  products = [
 {
   id: 0,
   name: 'Товар 1',
   description: 'Описание первого товара'
 },
 {
   id: 1,
   name: 'Товар 2',
   description: 'Описание второго товара'
 },
 {
   id: 2,
   name: 'Товар 3',
   description: 'Описание третьего товара'
 },
 {
   id: 3,
   name: 'Товар 4',
   description: 'Описание четвертого товара'
 }
];

  addProduct(t_name, t_description, index) {
    let product = {name: t_name, description: t_description, id: index}
    this.products.push(product);
  }

  getProducts() {
    return this.products;
  }

  clearProducts() {
    this.products = [];
    return this.products;
  }

  getProductById(id){
    let counter = 0;
    while(id != this.products[counter].id){
      counter += 1;
    }

    return this.products[counter]
  }

  updateProductById(id, t_name, t_description){
    let counter = 0;
    while(id != this.products[counter].id){
      counter += 1;
    }

    this.products[counter].name = t_name;
    this.products[counter].description = t_description;
  }

}
