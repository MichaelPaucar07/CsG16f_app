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
clientes: any[] = [];

constructor(private clienteService: ClienteService) {}

ngOnInit() {
  this.clienteService.getClientes().subscribe(data => {
    this.clientes = data;
  });
}
}
