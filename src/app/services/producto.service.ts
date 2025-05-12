import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }
  getProductos() {
    return this.http.get<any[]>(`${environment.baseUrl}/list/products`);
  }
}
