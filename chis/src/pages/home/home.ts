import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HelloPage } from '../hello/hello';
import { ViewChild } from '@angular/core';
import { MenuController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public menuCtrl:MenuController) {

  }
  
  slides: string[] = ['推荐', '热点', '视频','手机','科技','问答','汽车','社会','数码'];//显示的数据
  pageNumber: number = 6;//同时显示的个数
  selectedIndex: number = 0;//默认选中的
}