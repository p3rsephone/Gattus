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
      this.store(res);
    }) 
  }

  store(json) {
    if (json[0].maior21 !== undefined) {
      this.navParams.get('storage').get('history').then((val) => {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1;
        var yyyy = today.getFullYear();
        var todays;
        todays = dd + '/' + mm + '/' + yyyy;
        let stuff = "Maior do que 21 anos";
        val.unshift({hdr: stuff, bool: json[0].maior21, date: todays})
        this.navParams.get('storage').set('history', val);
      });
    } else if (json[0].maior18 !== undefined) {
      this.navParams.get('storage').get('history').then((val) => {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1;
        var yyyy = today.getFullYear();
        var todays;
        todays = dd + '/' + mm + '/' + yyyy;
        let stuff = "Maior do que 18 anos";
        val.unshift({hdr: stuff, bool: json[0].maior18, date: todays})
        this.navParams.get('storage').set('history', val);
      });
    }
  }

}
