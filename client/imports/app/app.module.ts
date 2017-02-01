import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {THINGS_DECLARATIONS} from './things';
import {AccountsModule} from 'angular2-meteor-accounts-ui';
//import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    AccountsModule,
    //RouterModule.forRoot(routes)
  ],
    declarations: [
      AppComponent,
      ...THINGS_DECLARATIONS,
  ],
    bootstrap: [
      AppComponent
  ]
})
export class AppModule {}
