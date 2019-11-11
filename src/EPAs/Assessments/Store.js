import { selectors as epasSelectors } from '../Store'
import { combineReducers } from 'redux'
import BaseStore from '../../Core/BaseStore'
import { post } from '../../Core/DataProvider'
import { assessmentsUrl as url } from '../Urls'

export const identifier = 'assessments'
const baseStore = BaseStore(identifier, state => epasSelectors.getStore(state)[identifier])
const getByEpaId = state => id => baseStore.getItems(state)[id] || { confident: 0, done: 0 }
const getStatus = state => baseStore.getStore(state).status

export const selectors = baseStore.withLoadedSelector({ 
	getByEpaId,
	getStatus,
	getExternals: state => id => getByEpaId(state)(id).externals || [],
})

const changeLevel = (newData, ids) => token => (dispatch, getState) => {
	const oldData = (ids || Object.keys(baseStore.getItems(getState()))).map( id => getByEpaId(getState())(id) )
	const data = { bewertungen: oldData.map( newData ).map( ({ id, done, confident, external }) => ({ epaId: id, gemacht: done, zutrauen: confident, fremdbewertung: external }) )}
	const reverse = () => oldData.map( d => dispatch({ type: `${identifier.toUpperCase()}_SET`, payload: { id: d.id, value: d }}) )
	post(`${url}${token ? `/${token}` : ''}`, data)
		.then( result => {
			if(result.status === 200) return dispatch({ type: `${identifier.toUpperCase()}_SENT`})
			reverse()
			dispatch({ type: `${identifier.toUpperCase()}_SEND_FAILED`})
		})
		.catch( () => {
			reverse()
			dispatch({ type: `${identifier.toUpperCase()}_SEND_FAILED`})
		})
	dispatch({ type: `${identifier.toUpperCase()}_SENDING`})
	oldData.map( newData ).map( d => dispatch({ type: `${identifier.toUpperCase()}_SET`, payload: { id: d.id, value: d }}))
}

const level = newData => epaId => changeLevel(newData, [ epaId ])()

export const actions = baseStore.withLoadAction(url)({
	send: changeLevel(d => d),
	setExternal: (id, value) => ({ type: `${identifier.toUpperCase()}_SET`, payload: { id, value: { external: value }}}),
	levelUpDone: level(epa => ({ id: epa.id, done: epa.done + 1, confident: epa.confident })),
	levelDownDone: level(epa => ({ id: epa.id, done: epa.done - 1, confident: epa.confident })),
	levelUpConfident: level(epa => ({ id: epa.id, done: epa.done, confident: epa.confident + 1 })),
	levelDownConfident: level(epa => ({ id: epa.id, done: epa.done, confident: epa.confident - 1 })),
})

const transform = data => [
	d => d.bewertungen,
	d => d.map( a => ({
		id: a.epaId, 
		datum: new Date(a.datum),
		done: a.gemacht,
		confident: a.zutrauen,
		externals: (a.fremdbewertungen || []).map( ass => ({ id: ass.fremdbewertungsId, value: ass.wert })),
	})),
	d => d.reduce( (a,v) => ({ ...a, [v.id]: v }), {})
].reduce((f,g) => g(f), data)

const setEpa = (state, {id, value}) => ({...state, [id]: { id, ...state[id], ...value }})
const items = (state = {}, action) => {
    switch(action.type) {
		case `${identifier.toUpperCase()}_SET`:
			return setEpa(state, action.payload)
        case `${identifier.toUpperCase()}_DATA_FETCHED`:
            return transform(action.payload)
		default:
			return state
	}
}

const status = (state = {sending: false, error: null, sent: false}, action) => {
    switch(action.type) {
        case `${identifier.toUpperCase()}_SENDING`:
            return { sending: true, error: null, sent: false }
        case `${identifier.toUpperCase()}_SENT`:
            return { sending: false, error: null, sent: true }
        case `${identifier.toUpperCase()}_SEND_FAILED`:
            return { sending: false, error: action.payload, sent: true }
		default:
			return state
	}
}

export const reducer = combineReducers({
	...baseStore.withLoadedReducer(items),
	status
})