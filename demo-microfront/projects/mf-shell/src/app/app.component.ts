import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {  // Implementa OnInit

  title = 'mf-shell';

  // Este método se ejecuta cuando el componente es inicializado
  ngOnInit() {
    console.log('AppComponent initialized');  // Este log se mostrará en la consola del navegador
  }
}
