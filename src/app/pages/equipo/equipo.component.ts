import { Component } from '@angular/core';
import { EmpleadoService } from '../../services/empleado.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-equipo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './equipo.component.html',
  styleUrl: './equipo.component.css'
})
export class EquipoComponent {
  // Arreglo que almacenará la lista de empleados recibida desde el servicio
  empleados: any[] = [];

  // Se inyecta el servicio EmpleadoService a través del constructor
  constructor(private empleadoService: EmpleadoService) {}

  // Método que se ejecuta automáticamente al cargar el componente
  ngOnInit(): void {
    // Se llama al método getEmpleados() del servicio y se suscribe para obtener los datos
    this.empleadoService.getEmpleados().subscribe(data => {
      // Se asigna la respuesta al arreglo empleados
      this.empleados = data;
    });
  }
}