import _ from 'lodash'
import SemesterInfo from './SemesterInfo'
import PtmInfo from './PtmInfo'
import StationsInfo from './StationsInfo'
import SemesterTimelineInfo from '../Dashboard/SemesterTimelineInfo'
import PtmTimelineInfo from '../Dashboard/PtmTimelineInfo'
import StationsTimelineInfo from '../Dashboard/StationsTimelineInfo'
import SemesterSummary from './SemesterSummary'
import PtmSummary from './PtmSummary'

function randomData(n = 10, name) {
    return _.range(n).map(i => ({
        x: new Date(2018 - i, 6 + _.random(2, -1), 15 + _.random(20, -10)),
        result: _.random(75, 20),
        q0: _.random(15, 10),
        q25: _.random(15, 30), 
        q75: _.random(15, 55), 
        q100: _.random(15, 80),
        mean: _.random(25, 40),
        label: `${n-i+1}. Semester`
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
        label: 'Praktische Prüfung',
        data: [
            {result: _.random(75, 20), mean: _.random(25, 40), x: new Date(2011, 6, 15), y: Math.random() * 100, label: `2. Semester`},
            {result: _.random(75, 20), mean: _.random(25, 40), x: new Date(2013, 6, 15), y: Math.random() * 100, label: `4. Semester`},
            {result: _.random(75, 20), mean: _.random(25, 40), x: new Date(2018, 6, 15), y: Math.random() * 100, label: `9. Semester`},
        ],
        color: 0,
        info: StationsInfo,
        timelineinfo: StationsTimelineInfo,
    },
]}

export default graphs