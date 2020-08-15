import { combineReducers } from 'redux'
import BaseStore from '../Core/BaseStore'

export const identifier = 'progress'

const baseStore = BaseStore(identifier)

function moduleIsVisible(module) { return module.code < 200 || module.code >= 400; }

function groupBy(data, key) {

    return data.reduce((storage, item) => {

        var group = item[key] - 1;
        storage[group] = storage[group] || [];
        storage[group].push(item);
        return storage;

    }, []);
}

function getStudienfortschrittDisplayData(studienleistungen) {

    studienleistungen = studienleistungen.meilensteine;
    studienleistungen = groupBy(studienleistungen, 'fachsemester');

    let studienfortschrittDisplayData = [];

    studienleistungen.forEach(element => {

        let object = {};
        let zulassungsVoraussetzungFuerStudienleistung = element.find(d => d.code === element[0].fachsemester + 300);

        object.label = element[0].fachsemester + '. Fachsemester';

        object.prereq = !zulassungsVoraussetzungFuerStudienleistung || zulassungsVoraussetzungFuerStudienleistung.erfuellt;

        object.completed = element.find(d => d.code === element[0].fachsemester + 200).erfuellt;

        object.entries = element
            .filter(moduleIsVisible)
            .map(d => ({
                ...d,
                link: (d.format && `/exams/${d.format}s/${d.studiPruefungsId}`)
            }));

        studienfortschrittDisplayData.push(object);
    })

    return studienfortschrittDisplayData;
}

function getStudienfortschrittDashboardData(state) {

    let studienleistungen = baseStore.getItems(state);

    studienleistungen = studienleistungen.flatMap(d => d.entries);
    studienleistungen = studienleistungen.filter(moduleIsVisible);

    let done = studienleistungen.reduce((acc, elm) => elm.erfuellt ? ++acc : acc, 0);

    return {total: studienleistungen.length, done: done};
}

export const selectors = baseStore.withLoadedSelector({
    getTree: state => baseStore.getItems(state),
    getDashboardData: getStudienfortschrittDashboardData,
})

export const reducer = combineReducers(baseStore.withLoadedReducer(
    (state = {}, action) => {
        switch(action.type) {
            case `${identifier.toUpperCase()}_DATA_FETCHED`:
                return getStudienfortschrittDisplayData(action.payload)
            default:
                return state
        }
    }
))

export const actions = baseStore.withLoadAction(`studienfortschritt`)({})
