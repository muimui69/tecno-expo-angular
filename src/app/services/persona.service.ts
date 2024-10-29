import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

export interface Persona {
  id: number;
  nombre: string;
  imagen: string;
  perfil: string;
  descripcion: string; 
  habilidades: string[];
  idiomas?: string[];
  experiencia: Array<{
    titulo: string;
    fecha: string;
    descripcion: string;
  }>;
  educacion: Array<{
    titulo: string;
    fecha: string;
    institucion: string;
  }>;
}
@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  private dataUrl = 'assets/data/personas.json';

  constructor(private http: HttpClient) { }

  obtenerPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.dataUrl);
  }

  obtenerPersonaPorId(id: number): Observable<Persona | undefined> {
    return this.obtenerPersonas().pipe(
      map(personas => personas.find(persona => persona.id === id))
    );
  }
}