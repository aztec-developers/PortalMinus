import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NAVBAR_DECLARATIONS } from './navbar';
import { SUMMARY_DECLARATIONS } from './summary';
import { SEMESTER_DECLARATIONS } from './semester';
import { TODO_DECLARATIONS } from './todo';
import { REQUIREMENTS_DECLARATIONS } from './requirements';
import { CurrentSemesterComponent } from './semester/currentsemester/currentsemester.component';
import { PastSemesterComponent } from './semester/pastsemester/pastsemester.component';


@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    ...NAVBAR_DECLARATIONS,
    ...SUMMARY_DECLARATIONS,
    ...SEMESTER_DECLARATIONS,
    ...TODO_DECLARATIONS,
    ...REQUIREMENTS_DECLARATIONS,
    ...CurrentSemesterComponent,
    ...PastSemesterComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
