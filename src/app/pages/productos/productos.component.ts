import { Component } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  // Arreglo que almacenará la lista de productos recibidos del backend
  items: any[] = [];

  // Se inyecta el servicio ProductoService para acceder a sus métodos
  constructor(private productoService: ProductoService) { }

  // Método que se ejecuta automáticamente al cargar el componente
  ngOnInit(): void {
    // Se llama al servicio y se suscribe al observable para obtener los productos
    this.productoService.getProductos().subscribe((data) => {
      // Se asignan los datos recibidos al array 'items'
      this.items = data;
    });
  }
}
