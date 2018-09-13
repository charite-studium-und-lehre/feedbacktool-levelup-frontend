function randomData(n = 10) {
    return new Array(n).fill(0).map(() => [Math.random() * 75 + 20, Math.random() * 15 + 10, Math.random() * 15 + 30, Math.random() * 15 + 55, Math.random() * 15 + 80 ]);
}

const n = 8;
const graphs = {
    pointCount: n,
    data: [{
        name: 'semester',
        label: 'Semesterprüfungen',
        data: randomData(n),
        color: 120,
    },
    {
        name: 'ptm',
        label: 'PTM',
        data: randomData(n),
        color: 240
    },
    {
        name: 'stations',
        label: 'Stationsprüfungen',
        data: new Array(Math.floor(n/4)).fill(0).map((d,i) => [i*4+Math.floor(Math.random()*4)+1, Math.random() * 100]),
        color: 0
    },
]}

export default graphs