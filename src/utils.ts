export function benchmark<T>(benchmark_name: string, callback: () => T): T {

    console.log(`Benchmark ${benchmark_name} starting...`);
    const start = new Date();

    const result = callback();

    const end = new Date();
    console.log(`Benching ${benchmark_name}. Time spend: ${(end.getTime() - start.getTime()) / 1000} seconds.`);

    return result;
}