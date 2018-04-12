import { Component } from '@angular/core';
import { NavParams} from 'ionic-angular';
import { HomePage } from '../home/home';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root = HomePage
  tab2Root = SettingsPage
  tab1Params = {
    pincode: this.navParams.get('pincode')
  }
  tab2Params = {
    pincode: this.navParams.get('pincode'),
    storage: this.navParams.get('storage')
  }

  constructor(public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
  }

}
