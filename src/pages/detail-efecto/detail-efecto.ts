import { storage } from 'firebase';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EfectosService } from '../../services/efectos.service';
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-detail-efecto',
  templateUrl: 'detail-efecto.html',
})
export class DetailEfectoPage {

  efecto = { id: null, tipo: null, title: null, descripcion: null, ine: null, image: null };
  id = null;
  show = true;
  image: string = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public efectosService: EfectosService, public cameraPlugin: Camera) {
    this.id = navParams.get('id');

    if (this.id != 0) {
      efectosService.getEfecto(this.id).valueChanges().subscribe(efecto => {
        this.efecto = <{ id: null, tipo: null, title: null, descripcion: null, ine: null, image: null }>efecto;
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailEfectoPage');
  }


  async takePhoto() {

    const options: CameraOptions = {
      quality: 50,
      targetHeight: 600,
      targetWidth: 600,
      destinationType: this.cameraPlugin.DestinationType.DATA_URL,
      encodingType: this.cameraPlugin.EncodingType.JPEG
    }

    const result = await this.cameraPlugin.getPicture(options);
    const image = 'data:image/jpeg;base64,${result}';
    const pictures = storage().ref('pictures');
    pictures.putString(image, 'data_url');


  }

  addEfecto() {
    if (this.id != 0) {
      this.efectosService.editEfecto(this.efecto);
      alert('Datos del efecto editados con exito!');
    } else {
      this.efecto.id = Date.now();
      this.efectosService.createEfecto(this.efecto);
      alert('Efecto agregado con exito!');
    }
    this.navCtrl.pop();
  }
  
  deleteEfecto() {
    this.show = false;
    this.efectosService.deleteEFecto(this.efecto);
    alert('Efecto eliminado con exito: ');
    this.navCtrl.pop();
  }
}
