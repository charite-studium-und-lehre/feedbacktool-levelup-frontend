import SemesterInfo from './SemesterInfo'
import PtmInfo from './PtmInfo'
import StationsInfo from './StationsInfo'
import SemesterTimelineInfo from '../Dashboard/SemesterTimelineInfo'
import PtmTimelineInfo from '../Dashboard/PtmTimelineInfo'
import StationsTimelineInfo from '../Dashboard/StationsTimelineInfo'
import SemesterSummary from './SemesterSummary'
import PtmSummary from './PtmSummary'

function rndInt(n, m) {
    return Math.floor(Math.random() * n) + m
}

function randomData(n = 10, name) {
    return new Array(n).fill(0).map((d,i) => ({
        x: new Date(2018 - i, 6 + rndInt(2, -1), 15 + rndInt(20, -10)),
        result: rndInt(75, 20),
        q0: rndInt(15, 10),
        q25: rndInt(15, 30), 
        q75: rndInt(15, 55), 
        q100: rndInt(15, 80),
        mean: rndInt(25, 40),
        label: `${n-i}. Semester`
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
        info: SemesterInfo,
        timelineinfo: SemesterTimelineInfo,
        summary: SemesterSummary,
    },
    {
        name: 'ptm',
        label: 'PTM',
        data: randomData(n, 'PTM'),
        color: 240,
        info: PtmInfo,
        timelineinfo: PtmTimelineInfo,
        summary: PtmSummary,
    },
    {
        name: 'stations',
        label: 'Stationsprüfung',
        data: new Array(2).fill(2).map((d,i) => ({result: rndInt(75, 20), mean: rndInt(25, 40), x: new Date(2018-d-(2-i)*2, 6, 15), y: Math.random() * 100, label: `${d+i*2}. Semester`})),
        color: 0,
        info: StationsInfo,
        timelineinfo: StationsTimelineInfo,
    },
]}

export default graphs