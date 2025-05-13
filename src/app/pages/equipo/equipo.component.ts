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
  empleados: any[] = [];

  constructor(private empleadoService: EmpleadoService) {}

  ngOnInit(): void {
    this.empleadoService.getEmpleados().subscribe(data => {
      this.empleados = data;
    });
  }
}
