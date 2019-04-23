import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { App } from 'ionic-angular';
import { PersonInformDetailPage } from '../person-inform-detail/person-inform-detail';

/**
 * Generated class for the PersonInformPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-person-inform',
  templateUrl: 'person-inform.html',
})
export class PersonInformPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private app:App
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonInformPage');
    
  }
  goInformDetail(){
    this.app.getRootNav().push(PersonInformDetailPage);
  }
}
