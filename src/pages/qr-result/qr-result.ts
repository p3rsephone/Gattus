import { HomeService } from './../../app/services/home.service';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the QrResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-qr-result',
  templateUrl: 'qr-result.html',
})
export class QrResultPage {

  contents: string
  json: any
  show1: boolean
  show2: boolean
  tfront: boolean
  tback: boolean
  AM: any
  A1: any
  A2: any
  A: any
  B1: any
  B: any
  C1: any
  C: any
  D1: any
  D: any
  BE: any
  C1E: any
  CE: any
  D1E: any
  DE: any
  loading: any
  item: any
  photo: any
  ass: any

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, public loadingCtrl: LoadingController, private sanitizer: DomSanitizer, private homeService: HomeService) {
    this.show1=true;
    this.show2=false;
    this.tfront=true;
    this.tback=false;
    this.contents = navParams.get('contents');
    this.loading = this.loadingCtrl.create({
      content: 'Por favor espere...'
    });
  }

  ionViewCanEnter() {
    Promise.resolve(this.contents).then(JSON.parse).then((res) => {
      this.json = res;
      this.process(res);
    }) 
  }

  process(json) {
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
        var todays = dd + '/' + mm + '/' + yyyy;
        let stuff = "Maior do que 18 anos";
        val.unshift({hdr: stuff, bool: json[0].maior18, date: todays})
        this.navParams.get('storage').set('history', val);
      });
    } else if (json[0].site !== undefined) {
      this.checkUsers(json[0].site, json[0].token);
    } else {
      this.popup();
    }
  }

  popup() {
    let alert = this.alertCtrl.create({
      enableBackdropDismiss: false,
      title: 'Erro',
      subTitle: "Conteúdo não é uma carta.",
      buttons: [{
        text: 'Ok',
        handler: () => {
          this.navCtrl.pop();
        }
      }]
    });
    alert.present();
  }

  checkUsers(url, token){
    this.navParams.get('storage').get('users').then( users =>{
      if (users) {
        console.log("[LOG] users already existent");
        this.loading.present();
        this.getUser(users, token);
      } else {
        this.loading.present();
        console.log("[LOG] Creating users");
        this.homeService.getPosts(url, token).subscribe(response => {
          this.navParams.get('storage').set('users', response);
          this.getUser(response, token);
        });
      }
    });
  }

  getUser(list, token) {
    console.log("[LOG] Looking for user with token:" + token);
    list.users.forEach(element => {
      if(element.secret == token) {
        console.log("[LOG] Found user with token:" + token);
        this.item = element;
        this.getPhoto();
        this.getAss();
        this.save(element);
        this.indice();
        this.loading.dismiss();
      }  
    });
  }

  save(user) {
    this.navParams.get('storage').get('history').then((val) => {
      var today = new Date()
      var dd = today.getDate();
      var mm = today.getMonth()+1;
      var yyyy = today.getFullYear();
      var todays = dd + '/' + mm + '/' + yyyy;
      let stuff = "Carta de condução";
      let content = user.name + " " + user.surname;
      val.unshift({hdr: stuff, cnt: content, date: todays})
      console.log("[LOG] Saved history: " + val);
      this.navParams.get('storage').set('history', val);
    });
  }

  getPhoto(){
    this.photo=this.sanitizer.bypassSecurityTrustUrl('data:image/jpg;base64,' + this.item.photo);
  }

  getAss(){
    this.ass=this.sanitizer.bypassSecurityTrustUrl('data:image/jpg;base64,' + this.item.ass);
  }

  toggleB1(){
    this.show1=true;
    this.show2=false;
  }

  toggleB2(){
    this.show1=false;
    this.show2=true;
  }

  toggleTB(){
    this.tfront=false;
    this.tback=true;
  }

  toggleTF(){
    this.tback=false;
    this.tfront=true;
  }

  indice(){
    this.AM = -1;
    this.A1 = -1;
    this.A2 = -1;
    this.A = -1;
    this.B1 = -1;
    this.B = -1;
    this.C1 = -1;
    this.C = -1;
    this.D1 = -1;
    this.D = -1;
    this.BE = -1;
    this.C1E = -1;
    this.CE = -1;
    this.D1E = -1;
    this.DE = -1;
    var number = 0;
    this.item.types.forEach(element => {
      if(this.item.types[number]['name']=='B'){
        this.B = number;
      }
    });
  }
}
