import _ from 'lodash'
import SemesterInfo from './SemesterInfo'
import PtmInfo from './PtmInfo'
import StationsInfo from './StationsInfo'
import SemesterTimelineInfo from '../Dashboard/Timeline/SemesterInfo'
import PtmTimelineInfo from '../Dashboard/Timeline/PtmInfo'
import StationsTimelineInfo from '../Dashboard/Timeline/StationsInfo'
import { TimelineData as StationsTimelineData } from './Stations/Data'

function randomData(n = 5) {
    return _.range(n).map(i => ({
        x: new Date(2018 - i, 6 + _.random(2, -1), 15 + _.random(20, -10)),
        result: _.random(75, 20),
        q0: _.random(15, 10),
        q25: _.random(15, 30), 
        q75: _.random(15, 55), 
        q100: _.random(15, 80),
        mean: _.random(25, 40),
        label: `${n-i}. Semester`
    }))
}

const n = 5
const graphs = {
    pointCount: n,
    data: [{
        name: 'semester',
        label: 'Semesterprüfung',
        data: randomData(n, 'Semesterprüfung'),
        color: 120,
        info: SemesterInfo,
        timelineinfo: SemesterTimelineInfo,
    },
    {
        name: 'ptm',
        label: 'PTM',
        data: randomData(n, 'PTM'),
        color: 240,
        info: PtmInfo,
        timelineinfo: PtmTimelineInfo,
    },
    {
        name: 'stations',
        label: 'Praktische Prüfung',
        data: StationsTimelineData.map(e => ({ ...e, x: e.date, y: e.result, label: e.exam })),
        color: 0,
        info: StationsInfo,
        timelineinfo: StationsTimelineInfo,
    },
]}

export default graphs