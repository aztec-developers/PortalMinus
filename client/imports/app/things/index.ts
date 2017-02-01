// This file will take all of the components and tie them into one tag name
// ("THINGS_DECLARATIONS") and allow you to import all of the components into
// app.module.ts under that single exported tag name

import {ReqListComponent} from './req-list.component';
import {SemListComponent} from './sem-list.component';
import {MajorClassesComponent} from './major-classes.component';
import {SdsuCatalogComponent} from './sdsu-catalog.component';

export const THINGS_DECLARATIONS = [
  ReqListComponent,
  SemListComponent,
  MajorClassesComponent,
  SdsuCatalogComponent
];
