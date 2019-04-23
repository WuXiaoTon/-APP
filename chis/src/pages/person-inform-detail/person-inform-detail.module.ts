import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonInformDetailPage } from './person-inform-detail';

@NgModule({
  declarations: [
    PersonInformDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonInformDetailPage),
  ],
})
export class PersonInformDetailPageModule {}
