import React           from 'react'
import AnimatedInteger from '../../Charting/AnimatedInteger'
import SimpleBar       from '../../Charting/SimpleBar'
import COLORS          from '../../colors'

export function chartingFunction({mode, faecher, module}) {
    return mode === 'modules'
           ? module
               .sort(naturalCompareCodes)
               .map((module, index) => <ModulBarWithHeader module={module} key={index}/>)
           : faecher
               .map(fach => <FachBarWithHeader fach={fach} faecher={faecher}/>)
}

function naturalCompareCodes(a, b) {
    let ax = [], bx = []

    a.code.replace(/(\d+)|(\D+)/g, (_, $1, $2) => { ax.push([$1 || Infinity, $2 || '']) })
    b.code.replace(/(\d+)|(\D+)/g, (_, $1, $2) => { bx.push([$1 || Infinity, $2 || '']) })

    while (ax.length && bx.length) {
        let an = ax.shift()
        let bn = bx.shift()
        let nn = (an[0] - bn[0]) || an[1].localeCompare(bn[1])
        if (nn) return nn
    }

    return ax.length - bx.length
}


const ModulBarWithHeader = ({key, module}) => {
    const {titel, ergebnisPunktzahl, durchschnittsPunktzahl} = module
    const colorTotal = COLORS.mc.lighter1
    const colorPartial = COLORS.mc.darker0
    return (
        <BarWithHeader
            key={key}
            name={titel}
            result={ergebnisPunktzahl}
            total={1}
            mean={durchschnittsPunktzahl}
            colorTotal={colorTotal}
            colorPartOfTotal={colorPartial}>

            <AnimatedInteger value={Math.round(ergebnisPunktzahl * 100)}/>
            %

        </BarWithHeader>
    )
}

const FachBarWithHeader = ({fach, faecher}) => {
    const {code, titel, ergebnisPunktzahl, maximalPunktzahl, durchschnittsPunktzahl} = fach
    const colorTotal = COLORS.mc.lighter1
    const colorPartial = COLORS.mc.darker0
    const width = maximalPunktzahl * 100 / Math.max.apply(Math, faecher.map(fach => fach.maximalPunktzahl))
    return (
        <BarWithHeader key={code}
                       name={titel}
                       result={ergebnisPunktzahl}
                       total={maximalPunktzahl}
                       width={`${width}%`}
                       mean={durchschnittsPunktzahl}
                       colorTotal={colorTotal}
                       colorPartOfTotal={colorPartial}>
            {ergebnisPunktzahl} von {maximalPunktzahl}
        </BarWithHeader>
    )
}

function BarWithHeader(props) {
    const {result, mean, width, total, colorTotal, colorPartOfTotal, children, name} = props
    const height = '1.5rem'
    return (
        <div className="row">
            <div className=" col-12">
                <div style={styles.columnLabel}>{name}</div>
                <div className="animated w-100">
                    <SimpleBar height={height}
                               width={width}
                               value={result}
                               mean={mean}
                               total={total}
                               colorTotal={colorTotal}
                               colorPartOfTotal={colorPartOfTotal}>
                        {children}
                    </SimpleBar>
                </div>
            </div>
        </div>
    )
}

const styles = {
    columnLabel: {
        color: {
            fontSize: '.9rem',
            marginBottom: '-.3rem',
            color: 'var(--color-graphs-grid-text)'
        }
    }
}

