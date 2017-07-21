import { Injectable } from '@angular/core';
import { Product } from './product';
import { PRODUCT_ITEMS } from './product-data';
import { findIndex } from 'lodash';
import { ProductData } from './product.data';

@Injectable()
export class ProductService {
  // private pItems = PRODUCT_ITEMS;
  private pItems: Product[];

  constructor(private _productData: ProductData) { }

  getProductsFromApi(): Product[] {
    this._productData.GetAll().subscribe((data:Product[]) => this.pItems = data,
                error => console.log(error),
                () => console.log('Get all Items complete'));
    console.log(this.pItems);
    return this.pItems
  }

  getProductsFromData(): Product[] {
    console.log(this.pItems);
    return this.pItems
  }

  addProduct(product: Product) {
    this.pItems.push(product);
    console.log(this.pItems);
  }

  updateProduct(product: Product) {
    let index = findIndex(this.pItems, (p: Product) => {
      return p.id === product.id;
    });
    this.pItems[index] = product;
  }

  deleteProduct(product: Product) {
    this.pItems.splice(this.pItems.indexOf(product), 1);
    console.log(this.pItems);
  }

}
