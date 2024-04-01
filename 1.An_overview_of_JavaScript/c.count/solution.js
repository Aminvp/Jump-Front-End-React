function timeit(fn) {
    return async function(...args) {
        const start = Date.now();
        try {
            const value = await fn(...args);
            return { value, time: Date.now() - start };
        } catch (err) {
            throw err;
        }
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