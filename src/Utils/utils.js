export const overSome = (...funcs) => (element) => {

    funcs = funcs.flat();

    for (let i = 0; i < funcs.length; i++)
        if (funcs[i](element))
            return true;

    return false;
}

export const overEvery = (...funcs) => (element) => {

    funcs = funcs.flat();

    for (let i = 0; i < funcs.length; i++)
        if (!funcs[i](element))
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
