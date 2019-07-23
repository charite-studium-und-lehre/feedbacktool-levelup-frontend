import { randomUniform } from 'd3-random'
import _ from 'lodash/fp'
import seedrandom from 'seedrandom'
import Subjects from '../Subjects'

const semesters = ['1. Fachsemester', '2. Fachsemester', '3. Fachsemester', '4. Fachsemester', '5. Fachsemester']
const createResult = _.flow([
    _.over([
        _.flow([seedrandom, randomUniform.source, rnd => (a,b) => _.round(rnd(a,b)())]),
        _.identity
    ]), 
    ([random, semester]) => ({
        alt: true,
        results: [
            [ 83],
            [30],
            [90] 
        ],
        means: [77, 22, 101],
        semester,
        short: semester.substr(0,4) + 'S',
        fächer: Subjects(semester),
        date: new Date(2013 + parseInt(semester.substr(0,1)), 6 + random(2, -1), 15 + random(20, -10)),
    })
])

const Results = _.keyBy(r => r.semester, _.map(createResult)(semesters))
export default Results