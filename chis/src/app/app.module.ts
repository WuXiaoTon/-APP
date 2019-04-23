import { NgModule, ErrorHandler,ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, Slides } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { HelloPage } from '../pages/hello/hello';
import { LoginPage } from '../pages/login/login';
import { PersonPage } from '../pages/person/person';
import { NewsPage } from '../pages/news/news';
import { MessagePage } from '../pages/message/message';
import { MIssuePage } from '../pages/m-issue/m-issue';
import { MCoopreationPage } from '../pages/m-coopreation/m-coopreation';
import { SettingPage } from '../pages/setting/setting';
import { PublishPage } from '../pages/publish/publish';
import { RegisterPage } from '../pages/register/register';
import { ForgetPage } from '../pages/forget/forget';
import { PersonInformPage } from '../pages/person-inform/person-inform';
import { PersonInformDetailPage } from '../pages/person-inform-detail/person-inform-detail';
import { PersonTopicPage } from '../pages/person-topic/person-topic';
import { TopicDetailPage } from '../pages/topic-detail/topic-detail';
import { TopicReplyPage } from '../pages/topic-reply/topic-reply';
import { TopicSearchPage } from '../pages/topic-search/topic-search';
import { TopicCreatePage } from '../pages/topic-create/topic-create';
import { PersonInformNicknamePage } from '../pages/person-inform-nickname/person-inform-nickname';
import { PersonInformSexPage } from '../pages/person-inform-sex/person-inform-sex';
import { PersonInformSignPage } from '../pages/person-inform-sign/person-inform-sign';




import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginServiceProvider } from '../providers/login-service/login-service';
import { Http } from '@angular/http';
import {HttpModule,JsonpModule} from '@angular/http';

import { Component } from '@angular/core';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    HelloPage,
    LoginPage,
    PersonPage,
    NewsPage,
    MessagePage,
    MIssuePage,
    MCoopreationPage,
    SettingPage,
    PublishPage,
    RegisterPage,
    ForgetPage,
    PersonInformPage,
    PersonInformDetailPage,
    PersonTopicPage,
    TopicDetailPage,
    TopicReplyPage,
    TopicSearchPage,
    TopicCreatePage,
    PersonInformNicknamePage,
    PersonInformSexPage,
    PersonInformSignPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages:true,
      backButtonText:'',
      platforms:{
        menuType:'overlay'
      }
    }),
    HttpModule,
    JsonpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    HelloPage,
    LoginPage,
    PersonPage,
    NewsPage,
    MessagePage,
    MIssuePage,
    MCoopreationPage,
    SettingPage,
    PublishPage,
    RegisterPage,
    ForgetPage,
    PersonInformPage,
    PersonInformDetailPage,
    PersonTopicPage,
    TopicDetailPage,
    TopicReplyPage,
    TopicSearchPage,
    TopicCreatePage,
    PersonInformNicknamePage,
    PersonInformSexPage,
    PersonInformSignPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginServiceProvider
  ]
})
export class AppModule {}
