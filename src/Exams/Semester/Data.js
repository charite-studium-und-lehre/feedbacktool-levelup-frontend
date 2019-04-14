import _ from 'lodash'
import { scaleLinear } from 'd3-scale'
import { randomNormal } from 'd3-random'

const moduleDists = randomNormal(50, 30)
const result = [64, 72, 73, 51]
const data = _.range(100)
        .map(() => _.range(4).map(() => Math.min(Math.floor(moduleDists()), 80)))
        .concat([ result ])
        .sort((a,b) => _.mean(a)-_.mean(b))

const scale = scaleLinear().domain([0,data.length - 1]).range([100, 0])

const TotalsData = {
    dist: data.map( (d, i) => ({ x: scale(i), y: _.mean(d) })),
    result,
    resultMean: _.mean(result),
    resultPercent: scale(data.indexOf(result)),
    distMean: _.round(_.meanBy(data, d => _.mean(d))),
}

const DetailsData = {
    data,
    result,
    distMean: _.meanBy(d => _.mean(d)),
}

export { TotalsData, DetailsData }