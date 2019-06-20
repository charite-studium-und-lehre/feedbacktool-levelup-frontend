import _ from 'lodash'
import { randomUniform } from 'd3-random'
import seedrandom from 'seedrandom'

// {
//     richtig: 80,
//     falsch: 33,
//     nichtbeantwortet: 90,
//     fächer: [
//         {
//             name: "Urologie"
//         }
//     ]
// }
// {
//     richtig: [43, 24, 13],
//     falsch: [3, 12, 18],
//     nichtbeantwortet: 90,
//     fächer: [
//         {
//             name: "Urologie"
//         }
//     ]
// }
const Results = semester => ({
    results: [
        [[80, 67, 43] , [13, 24, 43]],
        [[30, 15, 3], [18, 12, 3]],
        [90, 90] 
    ],
    means: [77, 22, 101]
})

const random = randomUniform.source(seedrandom('foo'))
function randomData(n = 5) {
    return _.range(n).map(i => ({
        x: new Date(2018 - i, 6 + random(2, -1)(), 15 + random(20, -10)()),
        result: (n-i+1)/6*50,
        mean: random(25, 40),
        label: `${n-i}. Semester`
    }))
}

const TimelineData = randomData()
export { TimelineData, Results }