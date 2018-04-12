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
  tabParams = {
    storage: this.navParams.get('storage')
  }

  constructor(public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
  }

}
