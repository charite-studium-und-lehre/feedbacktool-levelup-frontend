import _ from 'lodash'
import { randomUniform } from 'd3-random'
import seedrandom from 'seedrandom'
import SemesterInfo from './SemesterInfo'
import PtmInfo from './PtmInfo'
import StationsInfo from './StationsInfo'
import SemesterTimelineInfo from '../Dashboard/Timeline/SemesterInfo'
import PtmTimelineInfo from '../Dashboard/Timeline/PtmInfo'
import StationsTimelineInfo from '../Dashboard/Timeline/StationsInfo'
import { TimelineData as StationsTimelineData } from './Stations/Data'
import { TimelineData as SemesterTimelineData } from './Semester/Data'

const random = randomUniform.source(seedrandom('foo'))
function randomData(n = 5) {
    return _.range(n).map(i => ({
        x: new Date(2018 - i, 6 + random(2, -1)(), 15 + random(20, -10)()),
        result: (n-i+1)/6*50,
        mean: random(25, 40),
        label: `${n-i}. Semester`
    }))
}

const n = 5
const graphs = {
    pointCount: n,
    data: [{
        name: 'semester',
        label: 'Semesterprüfung',
        data: SemesterTimelineData,
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
        data: StationsTimelineData,
        color: 0,
        info: StationsInfo,
        timelineinfo: StationsTimelineInfo,
    },
]}

export default graphs