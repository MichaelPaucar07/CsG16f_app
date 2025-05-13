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
  items: any[] = [];

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.productoService.getProductos().subscribe((data) => {
      this.items = data;
    });
  }
}
