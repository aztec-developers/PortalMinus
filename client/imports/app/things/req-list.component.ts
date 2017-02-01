import {Component} from '@angular/core';
import {Reqs} from '../../../../both/collections/reqs.collection';
import {Req} from '../../../../both/models/req.model';
import {Observable} from 'rxjs/Observable';

import template from './req-list.component.html';

@Component ({
  selector: 'req-list',
  template
})

export class ReqListComponent {
  reqs: Observable<Req[]>;

  constructor() {
    this.reqs = Reqs.find({}).zone();
  }
}
