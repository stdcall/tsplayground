import { benchmark } from './utils';
import { Observable, of, combineLatest, zip } from 'rxjs';
import { v } from './print';

import './styles.scss';

v();
const observable1 = new Observable<number>(subscriber => {
  subscriber.next(5);
  subscriber.next(4);
  setTimeout(() => {
    subscriber.next(3);
    subscriber.next(20);
    subscriber.complete();
  }, 1000);
});

const observable2 = new Observable<string>(subscriber => {
  subscriber.next('four');
  subscriber.next('three');
  setTimeout(() => {
    subscriber.next('two'), subscriber.complete();
  }, 2000);
});

combineLatest(observable1, observable2).subscribe(x => {
  console.log(`${x[0]}:${x[1]}`);
});

const bench = (f: () => void) => {
  const start = new Date();
  f();
  const end = new Date();
  console.log(`finished in : ${(end.getTime() - start.getTime()) / 1000} sec.`);
};
