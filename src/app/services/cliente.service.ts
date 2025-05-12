import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  
  constructor(private http: HttpClient) {}
  getClientes() {
    return this.http.get<any[]>(`${environment.baseUrl}/list/clients`);
  }
}
