import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonInformPage } from './person-inform';

@NgModule({
  declarations: [
    PersonInformPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonInformPage),
  ],
})
export class PersonInformPageModule {}
