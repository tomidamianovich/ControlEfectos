import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Camera } from '@ionic-native/camera';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EfectosService } from '../services/efectos.service';
import { DetailEfectoPage } from '../pages/detail-efecto/detail-efecto';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { BusquedaPage } from '../pages/busqueda/busqueda';


export const firebaseConfig = {
  apiKey: "AIzaSyDnj2zV9XI7QhxWI-1u7aOuGa-reDvdjzM",
    authDomain: "controlefectos.firebaseapp.com",
    databaseURL: "https://controlefectos.firebaseio.com",
    projectId: "controlefectos",
    storageBucket: "controlefectos.appspot.com",
    messagingSenderId: "734214442093"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DetailEfectoPage,
    BusquedaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DetailEfectoPage,
    BusquedaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    EfectosService,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
