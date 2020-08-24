import { combineReducers } from 'redux'
import BaseStore from '../Core/BaseStore'

export const identifier = 'progress'

const baseStore = BaseStore(identifier)

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

    studienleistungen.forEach(studienleistung => {

        let displayDataVonStudienleistung = {};

        let zulassungsVoraussetzungFuerStudienleistung = studienleistung.find(datensatz => datensatz.code === studienleistung[0].fachsemester + 300);

        displayDataVonStudienleistung.label = studienleistung[0].fachsemester + '. Fachsemester';

        displayDataVonStudienleistung.prereq = !zulassungsVoraussetzungFuerStudienleistung || zulassungsVoraussetzungFuerStudienleistung.erfuellt;

        displayDataVonStudienleistung.completed = studienleistung.find(datensatz => datensatz.code === studienleistung[0].fachsemester + 200).erfuellt;

        displayDataVonStudienleistung.entries = studienleistung
            .filter(datensatz => (datensatz.code < 200 || datensatz.code >= 400))
            .map(datensatz => ({
                ...datensatz,
                link: (datensatz.format && `/exams/${datensatz.format}s/${datensatz.studiPruefungsId}`)
            }));

        studienfortschrittDisplayData.push(displayDataVonStudienleistung);
    })

    return studienfortschrittDisplayData;
}

function getStudienfortschrittDashboardData(state) {

    let studienleistungen = baseStore.getItems(state);

    studienleistungen = studienleistungen.flatMap(studienleistung => studienleistung.entries);
    studienleistungen = studienleistungen.filter(studienleistung => (studienleistung.code < 200 || studienleistung.code >= 400))

    let doneCount = studienleistungen.reduce((accumulator, element) => element.erfuellt ? ++accumulator : accumulator, 0);

    return {total: studienleistungen.length, done: doneCount};
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
