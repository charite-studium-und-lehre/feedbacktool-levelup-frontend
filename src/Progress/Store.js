import _ from 'lodash/fp'
import { combineReducers } from 'redux'
import BaseStore from '../Core/BaseStore'

export const identifier = 'progress'

const baseStore = BaseStore(identifier)

var groupBy = function(data, key) {
  return data.reduce(function(storage, item) {
    var group = item[key];

    storage[group] = storage[group] || [];

    storage[group].push(item);

    return storage;
  }, {});
};

function trans(data) {

    let out = {};

    data = data.meilensteine;

    console.log(groupBy(data, 'fachsemester');
}

const transform = _.flow([
    d => d.meilensteine,
    _.groupBy( d => d.fachsemester),
    _.map( g => ({
        label: g[0].fachsemester + '. Fachsemester',
        prereq: _.defaultTo({ erfuellt: true }, g.find( d => d.code === g[0].fachsemester + 300)).erfuellt,
        completed: g.find( d => d.code === g[0].fachsemester + 200 ).erfuellt,
        entries: g.filter( moduleIsVisible ).map( d => ({ ...d, link: d.format && `/exams/${d.format}s/${d.studiPruefungsId}` })),
    }))
])

function moduleIsVisible(module) { return module.code < 200 || module.code >= 400; }

function getTotal(data) { return data.length; }

function getDone(data) {

    let count = 0;

    for (let i = 0; i < data.length; i++)
        if (data[i].erfuellt) count++;

    return count;
}

export const selectors = baseStore.withLoadedSelector({
    getTree: state => baseStore.getItems(state),
    getDashboardData: _.flow([
        baseStore.getItems,
        _.flatMap(d => d.entries),
        _.filter(moduleIsVisible),
        _.over([ getTotal, getDone ]),
        ([ total, done ]) => ({ total, done })
    ])
})

export const reducer = combineReducers(baseStore.withLoadedReducer(
    (state = {}, action) => {
        switch(action.type) {
            case `${identifier.toUpperCase()}_DATA_FETCHED`:
                return trans(action.payload)
            default:
                return state
        }
    }
))

export const actions = baseStore.withLoadAction(`studienfortschritt`)({})
