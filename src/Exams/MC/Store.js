import _ from "lodash/fp";
import {combineReducers} from "redux";
import {scaleLinear} from "d3-scale";
import {minQuestions} from "../../Utils/Constants";
import BaseStore from "../BaseStore";
import {identifier as questionsIdentifier, reducer as questionsReducer} from "./Questions/Store";


export const identifier = "mcs";
const baseStore = BaseStore(identifier);

const getScale = kp =>
    scaleLinear()
        .domain([0, kp.length - 1])
        .range([100, 0]);

const percent = _.flow([
    _.over([
        getScale,
        (kp, ergebnis) => [
            kp.filter(d => d < ergebnis).length,
            kp.filter(d => d <= ergebnis).length
        ]
    ]),
    ([scale, p]) => _.map(scale, p),
    _.mean,
    _.round
]);

const addPercent = ergebnis => ({
    ...ergebnis,
    percent: percent(ergebnis.kohortenPunktzahlen, ergebnis.ergebnisPunktzahl)
});

const histogram = _.flow([
    _.groupBy(d => Math.floor(d / 5)),
    _.map(d => ({
        x: Math.floor(d[0] / 5) * 5,
        y: d.length
    }))
]);

const histogramES6 = kps => {
    let groupedKps = kps.map(kp => ({group: Math.floor(kp / 5) * 5, value: kp})).reduce((r, a) => {
        r[a.group] = [...r[a.group] || [], a.value];
        return r;
    }, {});

    return Object.entries(groupedKps).map(group => ({x: group[0], y: group[1].length}));
};

const addHistogram = ergebnis => ({
    ...ergebnis,
    histogram: _.map(d => ({
        ...d,
        highlight: Math.floor(ergebnis.ergebnisPunktzahl / 5) * 5 === d.x
    }))(histogram(ergebnis.kohortenPunktzahlen))
});

const addHistogramES6 = ergebnis => {
    const {kohortenPunktzahlen, ergebnisPunktzahl} = ergebnis;
    const ownGroup = Math.floor(ergebnisPunktzahl / 5) * 5;
    return {
        ...ergebnis,
        histogram: histogramES6(kohortenPunktzahlen).map(group => ({
            ...group,
            highlight: ownGroup === group.x
        }))
    };
};

const addGraphData = ergebnis => ({
    ...ergebnis,
    graphData: ergebnis.kohortenPunktzahlen
        .sort(_.subtract)
        .map((d, i) => ({x: getScale(ergebnis.kohortenPunktzahlen)(i), y: d}))
});

const addGraphDataES6 = ergebnis => {
    const { kohortenPunktzahlen } = ergebnis;
    return  {
        ...ergebnis,
        graphData: kohortenPunktzahlen
            .sort(_.subtract)
            .map((d, i) => ({x: getScale(kohortenPunktzahlen)(i), y: d}))
    }
}

const findById = id => exams => exams[id];

const toTimeline = exam => ({
    ...exam,
    link: `mcs/${exam.id}`
});
const getTimeline = _.flow([baseStore.getItems, _.map(toTimeline)]);

const getById = (state, id) =>
    _.flow([baseStore.getItems, findById(id)])(state);
const getTotalsData = _.flow([
    getById,
    e => e.gesamtErgebnis,
    addPercent,
    addHistogram,
    addGraphData
]);
const getSubjectsTotals = _.flow([
    baseStore.getItems,
    _.flatMap(i => i.faecher),
    _.groupBy(f => f.code),
    _.map(g => ({
        ...g[0],
        ergebnisPunktzahl: _.sumBy("ergebnisPunktzahl")(g),
        maximalPunktzahl: _.sumBy("maximalPunktzahl")(g)
    }))
]);

const getRanking = _.flow([
    getSubjectsTotals,
    _.filter(s => s.maximalPunktzahl >= minQuestions),
    _.sortBy([
        s => -s.ergebnisPunktzahl / s.maximalPunktzahl,
        s => -s.maximalPunktzahl
    ])
]);

const getRankingES6 = () => {
    return getSubjectsTotals.filter(subject => subject.maximalPunktzahl >= minQuestions).sort((a, b) => a)
}

export const selectors = baseStore.withLoadedSelector({
    getStore: baseStore.getStore,
    getById,
    strongestSubject: _.flow([getRanking, _.first]),
    getRanking,
    getSubjectsTotals,
    getTimeline,
    getTotalsData
});

export const actions = baseStore.withLoadAction({});

export const reducer = combineReducers({
    [questionsIdentifier]: questionsReducer,
    items: _.compose([
        baseStore.withSelectReducer,
        baseStore.withLoadedReducer()
    ])((state = {}, action) => {
        switch (action.type) {
            default:
                return state;
        }
    })
});
