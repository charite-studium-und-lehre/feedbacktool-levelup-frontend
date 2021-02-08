export const sumBy = (func, arr) => arr.reduce((acc, item) => acc + func(item), 0)
