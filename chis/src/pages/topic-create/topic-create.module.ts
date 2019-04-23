import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TopicCreatePage } from './topic-create';

@NgModule({
  declarations: [
    TopicCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(TopicCreatePage),
  ],
})
export class TopicCreatePageModule {}
