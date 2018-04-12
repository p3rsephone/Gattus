import { QrResultPage } from './../qr-result/qr-result';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public pincode: string
  public data: string

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private barcodeScanner: BarcodeScanner) {
    this.pincode = navParams.get('pincode')
  }

  popup() {
    let alert = this.alertCtrl.create({
      title: 'Erro',
      subTitle: "Conteúdo não é uma carta.",
      buttons: ['Ok']
    });
    alert.present();
  }

  scan() {
    this.barcodeScanner.scan().then((barcodeData) => {
      this.data = barcodeData.text;
      this.openItem(barcodeData.text);
    }, (err) => {
      this.popup()
    })
  }

  openItem(text: String) {
    this.navCtrl.push(QrResultPage, {
      contents: text
    });
  }
}
