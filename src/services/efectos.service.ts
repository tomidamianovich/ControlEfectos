import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database/database';

@Injectable()
export class EfectosService{

      constructor(public  afDB: AngularFireDatabase) {}   
      
      efectos = []; 
      
      public getEfectos(){
        return this.afDB.list('efectos/');
        //return this.efectos;
          
      }
      public getEfecto(id){
        return this.afDB.object('efectos/'+id);
        //return this.efectos.filter(function(e, i){ return e.id == id  })[0] || {id:null,title:null,description:null};
      }
      public createEfecto(efecto){
        this.afDB.database.ref('efectos/'+efecto.id).set(efecto);
        //this.efectos.push(efecto);
      } 
      public editEfecto(efecto){
        this.afDB.database.ref('efectos/'+efecto.id).set(efecto);
      }

      public deleteEFecto(efecto){
        this.afDB.database.ref('efectos/'+efecto.id).remove();
      }

    
}
