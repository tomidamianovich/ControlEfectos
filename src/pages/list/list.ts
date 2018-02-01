import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {  EfectosService } from '../../services/efectos.service';
import { DetailEfectoPage } from '../detail-efecto/detail-efecto';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  
  efectos = [];
  @ViewChild('myNav') nav: NavController
  constructor(public navCtrl: NavController,public NavParams: NavController, public EfectosService:EfectosService) {
    this.efectos = EfectosService.getEfectos();

}

public goToDetail(){
  this.navCtrl.push(DetailEfectoPage);
}

}