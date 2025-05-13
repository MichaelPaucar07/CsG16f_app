import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PromocionService } from '../../services/promocion.service';

@Component({
  selector: 'app-promociones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './promociones.component.html',
  styleUrl: './promociones.component.css'
})
export class PromocionesComponent {
  // Arreglo donde se almacenarán las promociones obtenidas del backend
  items: any[] = [];

  // Se inyecta el servicio PromocionService en el constructor
  constructor(private promocionService: PromocionService) { }

  // ngOnInit se ejecuta al cargar el componente en pantalla
  ngOnInit(): void {
    // Se llama al método getPromociones() del servicio y se suscribe al observable
    this.promocionService.getPromociones().subscribe((data) => {
      // Se asignan las promociones recibidas al arreglo 'items'
      this.items = data;
    });
  }
}
