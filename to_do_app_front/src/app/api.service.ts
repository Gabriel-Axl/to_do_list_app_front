import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl: string = 'http://127.0.0.1:5000/tarefas';
  constructor(private http:HttpClient) { }

  listarTarefas(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  deletarTarefa(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
