import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonTopicPage } from './person-topic';

@NgModule({
  declarations: [
    PersonTopicPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonTopicPage),
  ],
})
export class PersonTopicPageModule {}
