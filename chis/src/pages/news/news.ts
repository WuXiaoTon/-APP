import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MessagePage } from '../message/message';
import {App} from 'ionic-angular';
import { TopicDetailPage } from '../topic-detail/topic-detail';
import { TopicCreatePage } from '../topic-create/topic-create';
import { TopicSearchPage } from '../topic-search/topic-search';

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private app:App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }
  msgIn(){
    this.app.getRootNav().push(MessagePage);
  }
  goTopicDetail(){
    this.app.getRootNav().push(TopicDetailPage);
  }
  goCreate(){
    this.app.getRootNav().push(TopicCreatePage);
  }
  goSearch(){
    this.app.getRootNav().push(TopicSearchPage);
  }
}
