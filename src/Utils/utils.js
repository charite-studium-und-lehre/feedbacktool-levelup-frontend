export const debounce = (func, wait = 100) => {

    let timeout;

    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(this, args);
        }, wait);
    };
}

export const merge = (add) => (orig) => {

    return Object.assign(orig, add);
}

export const size = (obj) => {

    return Object.keys(obj).length;
}

export const map = (func) => (collection) => {

    let results = [];

    for (let i = 0; i < collection.length; i++)
        results.push(func(collection[i]))

    return results;
}

export const over = (...funcs) => (...args) => {

    funcs = funcs.flat();
    let results = [];

    for (let i = 0; i < funcs.length; i++) {
        results.push(funcs[i].apply(null, args))
    }

    return results;
}

export const overSome = (...funcs) => (args) => {

    funcs = funcs.flat();

    for (let i = 0; i < funcs.length; i++)
        if (funcs[i](args))
            return true;

    return false;
}

export const overEvery = (...funcs) => (args) => {

    funcs = funcs.flat();

    for (let i = 0; i < funcs.length; i++)
        if (!funcs[i](args))
            return false;

    return true;
}

export const compose = (...functions) => (parameters) => {

    functions = functions.flat();

    let out = functions[functions.length - 1](parameters);

    for (let i = functions.length - 2; i >= 0; i--)
        out = functions[i](out);

    return out;
}

export function groupBy(xs, key) {

    return xs.reduce(function(rv, x) {

        (rv[x[key]] = rv[x[key]] || []).push(x);

        return rv;

    }, []);
}

export const sumBy = (func, arr) => arr.reduce((acc, item) => acc + func(item), 0)

export const flow = (...functions) => (args) => {

    functions = functions.flat();

    let out = functions[0](args);

    for (let i = 1; i < functions.length; i++)
        out = functions[i](out);

    return out;
}
