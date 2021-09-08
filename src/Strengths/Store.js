import { selectors as MCSelectors, actions as MCActions } from '../Exams/MC/Store'
import { selectors as PtmSelectors, actions as PtmActions } from '../Exams/Ptm/Store'
import { flow, over, overEvery } from '../Utils/utils.js'

const getData = flow(

    over([MCSelectors.getSubjectsTotals, flow(PtmSelectors.getLatest, PtmSelectors.getFaecher)]),

    data => data.map(exams => {
        let out = {}
        for (let i = 0; i < exams.length; i++) out[exams[i].titel] = exams[i]
        return out
    }),

    ([ mcFaecher, ptmFaecher ]) => {
        const subs = [...new Set([...Object.keys(mcFaecher), ...Object.keys(ptmFaecher)])]
        return subs.map(s => ({
            titel: s,
            mc: mcFaecher[s] && { ...mcFaecher[s], value: mcFaecher[s].ergebnisPunktzahl },
            ptm: ptmFaecher[s] && { ...ptmFaecher[s], value: ptmFaecher[s].ergebnisRichtigPunktzahl },
        }))
    },

    d => ({ subjects: d })
)

const selectors = {
    loaded: overEvery([PtmSelectors.loaded, MCSelectors.loaded]),
    getData,
}

const actions = {
    load: () => over([PtmActions.load(), MCActions.load()])
}

export { selectors, actions }
