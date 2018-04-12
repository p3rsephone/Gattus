import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the QrResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qr-result',
  templateUrl: 'qr-result.html',
})
export class QrResultPage {

  contents: string
  json: any

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.contents = navParams.get('contents')
  }

  ionViewCanEnter() {
    Promise.resolve(this.contents).then(JSON.parse).then((res) => {
      this.json = res;
    }) 
  }

}
