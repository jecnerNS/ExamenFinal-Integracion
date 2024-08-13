import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3000/api';  // URL de tu API local

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/data`).pipe(
      tap(data => console.log('Datos recibidos:', data)),
      catchError(error => {
        console.error('Error al obtener datos:', error);
        throw error;
      })
    );
  }

  postData(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/data`, data).pipe(
      tap(response => console.log('Respuesta del backend:', response)),
      catchError(error => {
        console.error('Error al enviar datos:', error);
        throw error;
      })
    );
  }
}
