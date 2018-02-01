import { Injectable } from '@angular/core';

@Injectable()
export class EfectosService{
    efectos = [
        {id:1, title:'Nota1', descripcion:'Descripcion de nota 1'},
        {id:2, title:'Nota2', descripcion:'Descripcion de nota 1'},
        {id:3, title:'Nota3', descripcion:'Descripcion de nota 1'}
      ]; 
      
      public getEfectos(){
        return this.efectos;
      }
       
}
    
    

