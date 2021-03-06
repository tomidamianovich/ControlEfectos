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
  @ViewChild('myNav') nav: NavController;
  constructor(public navCtrl: NavController,public NavParams: NavController, public EfectosService:EfectosService) {
    EfectosService.getEfectos().valueChanges().subscribe( efectos => {
        console.log(efectos);
        this.efectos = efectos;
       });
}

public goToDetail(id){
  this.navCtrl.push(DetailEfectoPage,{id:id});
}

public createEfecto(id){
  this.navCtrl.push(DetailEfectoPage,{id:0});
}

}