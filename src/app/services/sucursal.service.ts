import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SucursalService {

  constructor(private http: HttpClient) { }
  getSucursal() {
    return this.http.get<any[]>(`${environment.baseUrl}/list/sucursales`);
  }
}
