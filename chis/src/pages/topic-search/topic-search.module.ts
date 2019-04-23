import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TopicSearchPage } from './topic-search';

@NgModule({
  declarations: [
    TopicSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(TopicSearchPage),
  ],
})
export class TopicSearchPageModule {}
