import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { PromocionService } from '../../services/promocion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLDivElement>;
  items: any[] = [];

  constructor(
    private productoService: ProductoService,
    private promocionService: PromocionService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.promocionService.getPromociones().subscribe(promos => {
      const promociones = promos.map(p => ({ ...p, tipo: 'promocion' }));
      this.productoService.getProductos().subscribe(productos => {
        const productosMapeados = productos.map(p => ({
          nombre: p.nombre,
          precio: p.precio,
          imagen: p.imagen,
          codigo: p.codigo,
          stock: p.cantidad_stock,
          iva: p.iva,
          tipo: 'producto'
        }));

        this.items = [...promociones, ...productosMapeados];
      });
    });
  }

  scrollRight() {
    const el = this.scrollContainer?.nativeElement;
    if (el) el.scrollLeft += 300;
  }

  scrollLeft() {
    const el = this.scrollContainer?.nativeElement;
    if (el) el.scrollLeft -= 300;
  }

  navegar(tipo: 'producto' | 'promocion') {
    this.router.navigate([`/${tipo === 'producto' ? 'productos' : 'promociones'}`]);
  }
}