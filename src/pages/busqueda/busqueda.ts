import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  EfectosService } from '../../services/efectos.service';

/**
 * Generated class for the BusquedaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-busqueda',
  templateUrl: 'busqueda.html',
})
export class BusquedaPage {

  efectos:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public EfectosService:EfectosService) {
    this.efectos=EfectosService.buscarEfectos();
    console.log(this.efectos);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusquedaPage');
  }

}
