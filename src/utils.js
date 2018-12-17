"use strict";
exports.__esModule = true;
function benchmark(benchmark_name, callback) {
    console.log("Benchmark " + benchmark_name + " starting...");
    var start = new Date();
    var result = callback();
    var end = new Date();
    console.log("Benching " + benchmark_name + ". Time spend: " + (end.getTime() - start.getTime()) / 1000 + " seconds.");
    return result;
}
exports.benchmark = benchmark;
