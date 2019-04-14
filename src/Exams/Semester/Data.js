import _ from 'lodash'
import { scaleLinear } from 'd3-scale'
import { randomNormal, randomUniform } from 'd3-random'
import seedrandom from 'seedrandom'

const result = _.flow([
    seedrnd => randomUniform.source(seedrnd)(50, 75), 
    rng => _.range(4).map(rng)
])

const createDist = _.flow([
    seedrnd => randomNormal.source(seedrnd)(50, 30),
    rng => _.range(100)
        .map(() => _.range(4).map(() => Math.min(Math.floor(rng()), 80)))
])
    
const distMean = d => _.round(_.meanBy(d, d => _.mean(d)))

const createTotalsData = data => {
    const scale = scaleLinear().domain([0,data.dist.length - 1]).range([100, 0])
    return {
        dist: data.dist.map( (d, i) => ({ x: scale(i), y: _.mean(d) })),
        result: data.result,
        resultMean: _.round(_.mean(data.result)),
        resultPercent: scale(data.dist.indexOf(data.result)),
        distMean: distMean(data.dist),
    }
}

const concatResult = arr => ({ result: arr[0], dist: arr[1].concat([ arr[0] ]).sort((a,b) => _.mean(a)-_.mean(b)) })

const TotalsData = _.flow([seedrandom, _.over(result, createDist), concatResult, createTotalsData])

const createDetailsData = data => ({
    data: _.zip(...data.dist).map((d, i) => ({module: i+1, data: d, mean: _.mean(d)})),
    result: data.result,
    distMean: distMean(data.dist),
})

const DetailsData = _.flow([ seedrandom, _.over(result, createDist), concatResult, createDetailsData ])

export { TotalsData, DetailsData }