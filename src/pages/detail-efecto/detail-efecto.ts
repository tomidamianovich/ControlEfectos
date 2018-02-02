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
    this.efecto = efectosService.getEfecto(this.id);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailEfectoPage');
  }

} 
