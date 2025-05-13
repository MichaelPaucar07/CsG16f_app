import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  password = '';
  loading = false;

  constructor(
    private authService: AuthService,
    private toastr: ToastrService
  ) { }

  onSubmit() {
    if (!this.email || !this.password) {
      this.toastr.warning('Por favor ingresa todos los campos');
      return;
    }

    this.loading = true;

    const payload = {
      usuario: this.email,
      contrasena: this.password
    };

    this.authService.login(payload).subscribe({
      next: (res) => {
        this.toastr.success(res.mensaje || 'Inicio de sesión exitoso');
        this.loading = false;
      },
      error: (err) => {
        const backendMsg = err.error?.mensaje || 'Error al iniciar sesión';
        this.toastr.error(backendMsg, 'Error');
        this.loading = false;
      }
    });
  }
}
