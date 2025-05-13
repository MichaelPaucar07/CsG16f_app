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

 sucursales: any[] = [];
  provinciaSeleccionada: string = '';
  provinciasUnicas: string[] = [];

  constructor(private sucursalService: SucursalService) {}

  ngOnInit(): void {
    this.sucursalService.getSucursal().subscribe((data) => {
      this.sucursales = data;
      this.provinciasUnicas = [...new Set(data.map(s => s.provincia))];
    });
  }

  get sucursalesFiltradas() {
    if (!this.provinciaSeleccionada) return this.sucursales;
    return this.sucursales.filter(s => s.provincia === this.provinciaSeleccionada);
  }

  abrirEnGoogleMaps(direccion: string, ciudad: string) {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(direccion + ', ' + ciudad)}`;
    window.open(url, '_blank');
  }
}