export const compose = (...functions) => (parameters) => {

    functions = functions.flat();

    let out = functions[functions.length - 1](parameters);

    for (let i = functions.length - 2; i >= 0; i--)
        out = functions[i](out);

    return out;
}
