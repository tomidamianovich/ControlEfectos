import { Injectable } from '@angular/core';

@Injectable()
export class EfectosService{

    efectos = [
        {id:1, title:'Efecto 1', description:'Descripcion del efecto 1'},
        {id:2, title:'Efecto 2', description:'Descripcion del efecto 2'},
        {id:3, title:'Efecto 3', description:'Descripcion del efecto 3'}
      ]; 
      
      public getEfectos(){
        return this.efectos;
      }
      public getEfecto(id){
        return this.efectos.filter(function(e, i){ return e.id == id  })[0] || {id:null,title:null,description:null};
      }
       
}
    
    

