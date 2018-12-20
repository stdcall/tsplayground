import { benchmark } from './utils';
import { List } from 'immutable';


for (const i of List([1,2,3,4]).map(x => x*x)) {
    console.log(`${i}`);
}


