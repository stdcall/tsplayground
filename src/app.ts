import { benchmark } from './utils';
import { Observable, of, combineLatest, zip } from 'rxjs';
import "./styles.scss";
import { addDays } from 'date-fns';

let dates = benchmark('nu eba', () => {
    const dates = Array.from({ length: 768 }, (_, n) => {
        return new Date(n, 0, n % 10);
    });
    return dates;
});

const observable1 = Observable.create(observer => {
    observer.next(5);
    observer.next(4);
    setTimeout(x => { observer.next(3); observer.next(20); observer.complete() }, 1000);

});

const observable2 = Observable.create(obs => {
    obs.next('five');
    obs.next('four');
    obs.next('three');
    setTimeout(x => { obs.next('two'), obs.complete() }, 2000);
});

zip(observable1, observable2).subscribe((x) => { console.log(`${x[0]}:${x[1]}`) });
