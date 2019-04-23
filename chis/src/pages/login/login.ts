import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Http,Jsonp } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { ForgetPage } from '../forget/forget';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username:string;
  password:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController,public http:Http,public jsonp:Jsonp) {
  }
    //输入为空时
    Alertnull() {  
      let alert = this.alertCtrl.create({  
        title: '请输入用户名和密码',  
        subTitle: '用户名和密码都不能为空哦！',  
        buttons: ['取消']  
      });  
      alert.present();  
    }  
    //返回值0时
    Alert0() {  
      let alert = this.alertCtrl.create({  
        title: '用户名不存在',  
        subTitle: '请重新输入用户名',  
        buttons: ['取消']  
      });  
      alert.present();  
    }  
    //返回值2时
    Alert2() {  
      let alert = this.alertCtrl.create({  
        title: '用户名密码不符！',  
        subTitle: '请重新输入密码',  
        buttons: ['取消']  
      });  
      alert.present();  
    }  
  
    login(username,password){
      console.log(username,password);
      if(username === ""||password===""){
        this.Alertnull();
      }else{
        var myurl='http://datainfo.duapp.com/shopdata/userinfo.php?status=login&userID='+ username +'&password='+ password ;
        this.http.get(myurl).subscribe(data=>{
          // console.log(data);
          console.log(JSON.parse(data['_body']));
          if(JSON.parse(data['_body'])==0){
            this.Alert0();
          }else if(JSON.parse(data['_body'])==2){
            this.Alert2();
          }else{
            this.navCtrl.push(HomePage);
          }
        },err=>{
          console.log(err);
        });
      } 
  }
  /*goCheck(){
    var username=this.username;
    var password=this.password;
    var pu=this.navCtrl;
    var al=this.alertCtrl;
      this.http.get( 'http://datainfo.duapp.com/shopdata/userinfo.php').subscribe( 
        data=>{
            pu.push(HomePage,{name:'首页'});
          },
          err=>{
            let alert=al.create({
              title: '请求失败',
              subTitle: '请求错误，请重试!',
              buttons: ['OK']
            });
            alert.present();
          }
        );
  }*/
  goRegister(){
    this.navCtrl.push(RegisterPage);
  }
  goForget(){
    this.navCtrl.push(ForgetPage);
  }
  ionViewDidLoad() {
    
  }

}
