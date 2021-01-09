export const flow = (...functions) => (parameters) => {

    functions = functions.flat();

    let out = functions[0](parameters);

    for (let i = 1; i < functions.length; i++)
        out = functions[i](out);

    return out;
}
