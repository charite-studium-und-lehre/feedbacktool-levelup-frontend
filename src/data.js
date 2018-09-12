function randomData(n = 10) {
    return new Array(n).fill(0).map(() => [Math.random() * 75 + 20, Math.random() * 15 + 10, Math.random() * 15 + 30, Math.random() * 15 + 55, Math.random() * 15 + 80 ]);
}

const n = 8
export default {
    semester: randomData(n),
    ptm: randomData(n),
    stations: new Array(Math.floor(n/4)).fill(0).map((d,i) => [i*4+Math.floor(Math.random()*4)+1, Math.random() * 100]),
    n: n
}