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
items: any[] = [];

  constructor(private promocionService: PromocionService) { }

  ngOnInit(): void {
    this.promocionService.getPromociones().subscribe((data) => {
      this.items = data;
    });
  }
}
