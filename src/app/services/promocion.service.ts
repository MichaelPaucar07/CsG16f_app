import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PromocionService {

  constructor(private http: HttpClient) { }
  getPromociones() {
    return this.http.get<any[]>(`${environment.baseUrl}/list/promociones`);
  }
}
