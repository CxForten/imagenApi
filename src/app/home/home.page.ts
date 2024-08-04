import { ImagenService } from './../servicios/imagen.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  imagen:any;
  constructor(private imageService:ImagenService) {}

  onClick(){

  }

  storeImagen(nombre:any){
    this.imageService.saveImagen(nombre.value, this.imagen).subscribe({
      next:(data:any) =>{
        debugger
        console.log(data);
      },
      error:(error:any) =>{
        debugger
          console.error(error);
      }
      })
    }

    obtenerImagen(dato:any){
      this.imagen=dato.target.files[0];
  }
}
