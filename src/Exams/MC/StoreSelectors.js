import _                                                              from 'lodash/fp'
import {minQuestions}                                                  from '../../Utils/Constants'
import {getGraphData, getHistogram, getPercent, findById, getTimeline as getTimelineUtils} from './StoreSelectorsUtils'

export function createStoreSelectors(baseStore) {

    const getTimeline = _.flow([baseStore.getItems, _.map(getTimelineUtils)])

    const getById = (state, id) =>
        _.flow([baseStore.getItems, findById(id)])(state)

    const getTotalsData = _.flow([
        getById,
        e => e.gesamtErgebnis,
        getPercent,
        getHistogram,
        getGraphData
    ])

    const getSubjectsTotals = _.flow([
        baseStore.getItems,
        _.flatMap(i => i.faecher),
        _.groupBy(f => f.code),
        _.map(g => ({
            ...g[0],
            ergebnisPunktzahl: _.sumBy('ergebnisPunktzahl')(g),
            maximalPunktzahl: _.sumBy('maximalPunktzahl')(g)
        }))
    ])

    const getRanking = _.flow([
        getSubjectsTotals,
        _.filter(s => s.maximalPunktzahl >= minQuestions),
        _.sortBy([
            s => -s.ergebnisPunktzahl / s.maximalPunktzahl,
            s => -s.maximalPunktzahl
        ])
    ])

    let strongestSubject = _.flow([getRanking, _.first])

    return baseStore.withLoadedSelector({
        getStore: baseStore.getStore,
        getById,
        strongestSubject,
        getRanking,
        getSubjectsTotals,
        getTimeline,
        getTotalsData
    })
}