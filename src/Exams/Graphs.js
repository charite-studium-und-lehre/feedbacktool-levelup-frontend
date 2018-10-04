function rndInt(n, m) {
    return Math.floor(Math.random() * n) + m
}

function randomData(n = 10, name) {
    return new Array(n).fill(0).map((d,i) => ({
        x: i+1, 
        result: rndInt(75, 20),
        q0: rndInt(15, 10),
        q25: rndInt(15, 30), 
        q75: rndInt(15, 55), 
        q100: rndInt(15, 80),
        mean: rndInt(25, 40),
        label: `${i+1}. Semester`
    }))
}

const n = 8;
const graphs = {
    pointCount: n,
    data: [{
        name: 'semester',
        label: 'Semesterprüfung',
        data: randomData(n, 'Semesterprüfung'),
        color: 120,
    },
    {
        name: 'ptm',
        label: 'PTM',
        data: randomData(n, 'PTM'),
        color: 240
    },
    {
        name: 'stations',
        label: 'Stationsprüfung',
        data: new Array(2).fill(2).map((d,i) => ({x: d+i*5, y: Math.random() * 100})),
        color: 0
    },
]}

export default graphs