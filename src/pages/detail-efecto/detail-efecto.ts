import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EfectosService } from '../../services/efectos.service';


/**
 * Generated class for the DetailEfectoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-efecto',
  templateUrl: 'detail-efecto.html',
})
export class DetailEfectoPage {
  efecto= {id:null,title:null,description:null};
  id = null;
  constructor(public navCtrl: NavController, public navParams: NavParams,public efectosService:EfectosService) {
    this.id = navParams.get('id');

    if (this.id != 0){
      this.efecto = efectosService.getEfecto(this.id);  
    }else{
      
    }   
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailEfectoPage');
  }

  addEfecto(){
    if(this.id != 0){
      this.efectosService.editEfecto(this.efecto);
      alert('Nota editada con exito!');
    }else{
      this.efecto.id=Date.now();
      this.efectosService.createEfecto(this.efecto); 
      alert('Nota creada con exito!');
    }
    this.navCtrl.pop();
} 
    deleteEfecto(){
      this.efectosService.deleteEFecto(this.efecto);
      alert('Efecto eliminado con exito');
      this.navCtrl.pop();
    }
}
