import {Things} from '../../../both/collections/things.collection';
import {Thing} from '../../../both/models/thing.model';


// if meteor mongo is not on or a mongodb is not hooked up these classes
// will show up

export function loadThings() {
  if (Things.find().cursor.count() === 0) {
    const things: Thing[] = [{
      name: 'Dark Arts 101',
      teacher: 'Dumbledore',
      location: 'room 101'
    }, {
      name: 'Dragon Training 122',
      teacher: 'Hagrid',
      location: 'Online'
    }, {
      name: 'Sick Wand Flicks 102',
      teacher: 'Harry Potter',
      location: 'room 124'
    }];

    things.forEach((thing: Thing) => Things.insert(thing));

  }
}
