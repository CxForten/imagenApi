import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  constructor(private http:HttpClient)  { 
  }

  saveImagen(nombre:any, imagen:any){
    let datos = new FormData();
    datos.append('nombre', nombre);
    datos.append('imagen', imagen);

    return this.http.post('http://localhost:8000/api/persona', datos);

  }
}
