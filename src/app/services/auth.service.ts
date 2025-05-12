import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  login(data: any) {
    return this.http.post<{ mensaje: string }>(
      `${environment.baseUrl}/login`,
      data
    );
  }
}
