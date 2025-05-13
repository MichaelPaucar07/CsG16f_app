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
  // Variables para almacenar los datos del formulario
  email = '';
  password = '';

  // Estado de carga para deshabilitar o mostrar loading mientras se procesa el login
  loading = false;

  // Inyección del servicio de autenticación y del servicio de notificaciones
  constructor(
    private authService: AuthService,
    private toastr: ToastrService
  ) { }

  // Método que se ejecuta al enviar el formulario
  onSubmit() {
    // Validación: si falta el email o la contraseña, se lanza advertencia
    if (!this.email || !this.password) {
      this.toastr.warning('Por favor ingresa todos los campos');
      return;
    }

    // Se activa el estado de carga
    this.loading = true;

    // Se construye el objeto con los datos a enviar al backend
    const payload = {
      usuario: this.email,
      contrasena: this.password
    };

    // Se llama al método login del AuthService, que devuelve un observable
    this.authService.login(payload).subscribe({
      // Si la respuesta es exitosa, se muestra un mensaje de éxito
      next: (res) => {
        this.toastr.success(res.mensaje || 'Inicio de sesión exitoso');
        this.loading = false;
      },
      // Si ocurre un error (credenciales incorrectas, por ejemplo), se muestra un mensaje de error
      error: (err) => {
        const backendMsg = err.error?.mensaje || 'Error al iniciar sesión';
        this.toastr.error(backendMsg, 'Error');
        this.loading = false;
      }
    });
  }
}