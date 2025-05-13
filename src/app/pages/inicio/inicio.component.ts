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
   // Usamos ViewChild para referenciar el contenedor scrollable en el HTML
  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLDivElement>;

  // Arreglo que almacenará tanto promociones como productos ya formateados
  items: any[] = [];

  // Inyectamos los servicios necesarios y el router para navegación
  constructor(
    private productoService: ProductoService,
    private promocionService: PromocionService,
    public router: Router
  ) { }

  // Método que se ejecuta al iniciar el componente
  ngOnInit(): void {
    // Primero se obtienen las promociones
    this.promocionService.getPromociones().subscribe(promos => {
      // A cada promoción se le añade un campo tipo = 'promocion'
      const promociones = promos.map(p => ({ ...p, tipo: 'promocion' }));

      // Luego se obtienen los productos
      this.productoService.getProductos().subscribe(productos => {
        // Se mapean los productos con los campos que nos interesan y se les añade tipo = 'producto'
        const productosMapeados = productos.map(p => ({
          nombre: p.nombre,
          precio: p.precio,
          imagen: p.imagen,
          codigo: p.codigo,
          stock: p.cantidad_stock,
          iva: p.iva,
          tipo: 'producto'
        }));

        // Finalmente, unimos ambos arrays en uno solo
        this.items = [...promociones, ...productosMapeados];
      });
    });
  }

  // Método que desplaza el contenedor 300px hacia la derecha
  scrollRight() {
    const el = this.scrollContainer?.nativeElement;
    if (el) el.scrollLeft += 300;
  }

  // Método que desplaza el contenedor 300px hacia la izquierda
  scrollLeft() {
    const el = this.scrollContainer?.nativeElement;
    if (el) el.scrollLeft -= 300;
  }

  // Método de navegación según el tipo del ítem
  navegar(tipo: 'producto' | 'promocion') {
    // Redirige a /productos o /promociones dependiendo del valor recibido
    this.router.navigate([`/${tipo === 'producto' ? 'productos' : 'promociones'}`]);
  }
}