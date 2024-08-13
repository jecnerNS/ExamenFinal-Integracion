import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Prueba del microfrontend - modulo compras';
  backendData: any;
  responseMessage: string | null = null;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.refreshData(); // Carga los datos inicialmente
  }

  refreshData() {
    this.dataService.getData().subscribe({
      next: (data: any) => {
        this.backendData = data;
      },
      error: (error) => {
        console.error('Error al obtener datos del backend:', error);
      }
    });
  }

  sendData() {
    const newData = { key: 'value' };
    this.dataService.postData(newData).subscribe({
      next: (response: any) => {
        this.responseMessage = response.message;
      },
      error: (error) => {
        console.error('Error al enviar datos al backend:', error);
      }
    });
  }
}

