import { Component } from '@angular/core';
import { SucursalService } from '../../services/sucursal.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sucursales',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sucursales.component.html',
  styleUrl: './sucursales.component.css'
})
export class SucursalesComponent {

  // Arreglo que almacenará todas las sucursales obtenidas del backend
  sucursales: any[] = [];

  // Provincia seleccionada por el usuario para filtrar
  provinciaSeleccionada: string = '';

  // Lista de provincias únicas para opciones de filtro
  provinciasUnicas: string[] = [];

  // Inyección del servicio SucursalService en el constructor
  constructor(private sucursalService: SucursalService) { }

  // Método que se ejecuta al cargar el componente
  ngOnInit(): void {
    // Se llama al servicio para obtener las sucursales
    this.sucursalService.getSucursal().subscribe((data) => {
      // Se asignan las sucursales al arreglo principal
      this.sucursales = data;

      // Se generan las provincias únicas a partir de los datos usando Set
      this.provinciasUnicas = [...new Set(data.map(s => s.provincia))];
    });
  }

  // Propiedad computada que retorna las sucursales filtradas por provincia
  get sucursalesFiltradas() {
    // Si no hay filtro, se devuelven todas las sucursales
    if (!this.provinciaSeleccionada) return this.sucursales;

    // Si hay una provincia seleccionada, se filtra el array
    return this.sucursales.filter(s => s.provincia === this.provinciaSeleccionada);
  }

  // Método para abrir la dirección de la sucursal en Google Maps
  abrirEnGoogleMaps(direccion: string, ciudad: string) {
    // Se construye la URL con la dirección y ciudad, codificadas para uso en URL
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(direccion + ', ' + ciudad)}`;

    // Se abre la URL en una nueva pestaña del navegador
    window.open(url, '_blank');
  }
}