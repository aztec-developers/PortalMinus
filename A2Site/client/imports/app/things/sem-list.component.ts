import {Component} from '@angular/core';
import { Things } from '../../../../both/collections/things.collection';
import { Thing } from '../../../../both/models/thing.model';
import { Observable } from 'rxjs/Observable';

import template from './sem-list.component.html';
import style from './sem-list.component.scss';

@Component ({
  selector: 'sem-list',
  template,
  styles: [style]
})

export class SemListComponent {
  things: Observable<Thing[]>;

  constructor() {
    this.things = Things.find({}).zone();
  }
}
