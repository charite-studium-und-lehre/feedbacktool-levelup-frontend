export function groupBy(xs, key) {
    return xs.reduce(function(rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, []);
}

export function groupByConsumer(xs, func) {
    return xs.reduce(function(rv, x) {
        (rv[func(x)] = rv[func(x)] || []).push(x);
        return rv;
    }, []).filter(el => el != null);
}
