import { Component } from '@angular/core';
import { NavController,NavParams} from 'ionic-angular';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  public pincode: string
  public storage

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.storage = navParams.get('storage');
    console.log("Settings");
    this.storage.get('password_encrypt').then(pwd => {
      this.pincode = String(pwd)});
    this.restoreSettings();
  }

  ionViewDidLoad() {
    
  }

  restoreSettings() {

  }

  resetPassword() {
    //TODO
  }
}
