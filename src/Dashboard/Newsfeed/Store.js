import MCInfo from './MCInfo'
import PtmInfo from './PtmInfo'
import StationsInfo from './StationsInfo'
import {selectors as ExamsSelectors, actions as ExamsActions} from '../../Exams/Store'
import {selectors as StationsSelectors} from '../../Exams/Stations/Store'
import {selectors as MCSelectors} from '../../Exams/MC/Store'
import {selectors as PtmSelectors} from '../../Exams/Ptm/Store'
import {color as stationsColor} from '../../Exams/Stations/Stations'
import {color as mcColor} from '../../Exams/MC/MC'
import {color as ptmColor} from '../../Exams/Ptm/Ptm'
import {groupBy} from '../../Utils/utils'

const getData = data => {

    let stationen = StationsSelectors.getTimeline(data).map(
        station => ({...station, ...{icon: 'PP', color: stationsColor, comp: StationsInfo}})
    )

    let mcs = MCSelectors.getTimeline(data).map(
        mc => ({...mc, ...{icon: 'MC', color: mcColor, comp: MCInfo}})
    )

    let ptms = PtmSelectors.getTimeline(data).map(
        ptm => ({...ptm, ...{icon: 'PTM', color: ptmColor, comp: PtmInfo}})
    )

    let epas = [...stationen, ...mcs, ...ptms]

    epas = epas.flat()
        .sort((a, b) => ('' + a.periodeCode) - ('' + b.periodeCode))
        .reverse()

    return Object.values(groupBy(epas, 'zeitsemester'))
}

const selectors = {
    getData,
    loaded: ExamsSelectors.loaded,
}

const actions = {
    load: ExamsActions.load
}

export {selectors, actions}
