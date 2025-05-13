import { Component } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {
  // Variable que almacenará la lista de clientes obtenida del servicio
  clientes: any[] = [];

  // Inyectamos el servicio ClienteService para poder consumir su método getClientes()
  constructor(private clienteService: ClienteService) { }

  // ngOnInit se ejecuta automáticamente cuando el componente se carga
  ngOnInit() {
    // Se llama al servicio para obtener los datos de clientes
    this.clienteService.getClientes().subscribe(data => {
      // Se asigna la respuesta al arreglo 'clientes' para ser usado en el HTML
      this.clientes = data;
    });
  }
}