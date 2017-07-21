import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import { Product } from './product';
import { Configuration } from './product.constants';

@Injectable()
export class ProductData {
  private actionUrl: string;
  private headers: Headers;

  constructor(private _http: Http, private _configuration: Configuration) {
    this.actionUrl = _configuration.ServerWithApiUrl + 'product/';
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  public GetAll = (): Observable<Product[]> => {
    return this._http.get(this.actionUrl).map((response: Response) => <Product[]>response.json());
  }

  public GetSingle = (id: number): Observable<Product> => {
    return this._http.get(this.actionUrl + id).map((response: Response) => <Product>response.json());
  }

}
