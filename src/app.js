"use strict";
exports.__esModule = true;
var utils_1 = require("./utils");
var rxjs_1 = require("rxjs");
require("./styles.scss");
utils_1.benchmark('nu eba', function () {
    Array.from({ length: 12 }, function (k, v) { console.log(k); });
});
console.log('called from print.ts!!!');
var observable1 = rxjs_1.Observable.create(function (observer) {
    observer.next(5);
    observer.next(4);
    setTimeout(function (x) { observer.next(3); observer.next(20); observer.complete(); }, 1000);
});
var observable2 = rxjs_1.Observable.create(function (obs) {
    obs.next('five');
    obs.next('four');
    obs.next('three');
    setTimeout(function (x) { obs.next('two'), obs.complete(); }, 2000);
});
//combineLatest(observable1, observable2).subscribe((x) => { console.log(`${x[0]}:${x[1]}`) });
