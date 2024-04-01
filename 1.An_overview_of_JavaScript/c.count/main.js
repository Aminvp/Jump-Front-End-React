function timeit(fn) {
    return async (...args) => {
        const start = performance.now();
        const result = await fn(...args);
        const end = performance.now();
        const elapsedTime = end - start;
        return new Promise((resolve) => {
            resolve({ value: result, time: elapsedTime });
        });
    };
}

function fn(t) {
    return new Promise((res, rej) => {
        setTimeout(() => res(`done after ${t}ms`), t);
    });
}

timeit(fn)(25).then(ans => {
    console.log(ans)
})