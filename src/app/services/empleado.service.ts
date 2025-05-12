import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private http: HttpClient) {}
  getEmpleados() {
    return this.http.get<any[]>(`${environment.baseUrl}/list/employes`);
  }
}
