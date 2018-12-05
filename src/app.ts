import { Observable, of, combineLatest, zip } from 'rxjs';
import "./styles.scss";

const observable1 = Observable.create(observer => {
    observer.next(5);
    observer.next(4);
    setTimeout(x => {observer.next(3)}, 1000);
});

const observable2 = Observable.create(obs => {
    obs.next('five');
    obs.next('four');
    obs.next('three');
});
 
combineLatest(observable1, observable2).subscribe((x) => { console.log(x) });
