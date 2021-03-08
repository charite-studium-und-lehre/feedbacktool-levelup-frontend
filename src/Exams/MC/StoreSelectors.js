import {minQuestions} from '../../Utils/Constants'
import {getTotals, getTimeline as getTimelineUtils} from './StoreSelectorsUtils'
import {groupBy, sumBy} from '../../Utils/utils'

export function createStoreSelectors(baseStore) {

    const getTimeline = (state) =>
        Object.values(baseStore.getItems(state)).map(getTimelineUtils)

    const getById = (state, id) => baseStore.getItems(state)[id];

    const getTotalsData = (state, id) =>
        getTotals(getById(state, id).gesamtErgebnis);

    const getSubjectsTotals = (state) => {

        let exams = Object.values(baseStore.getItems(state))
            .map(exam => exam.faecher).flat();

        return Object.values(groupBy(exams, "code"))
            .map(group => ({
                ...group[0],
                ergebnisPunktzahl: sumBy(fach => fach.ergebnisPunktzahl, group),
                maximalPunktzahl: sumBy(fach => fach.maximalPunktzahl, group)
            }));
    }

    const getRanking = (state) => {

        let totals = getSubjectsTotals(state)
            .filter(s => s.maximalPunktzahl >= minQuestions);

        totals.sort((a, b) => b.maximalPunktzahl - a.maximalPunktzahl)
            .sort((a, b) =>
                b.ergebnisPunktzahl / b.maximalPunktzahl -
                a.ergebnisPunktzahl / a.maximalPunktzahl);

        return totals;
    }

    const strongestSubject = (state) => getRanking(state)[0];

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
