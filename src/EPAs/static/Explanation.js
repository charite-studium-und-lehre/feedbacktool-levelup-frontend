import React from "react";
import Legend from "../../Charting/Legend";
import Legends from "../../Core/LegendTexts";
import Level from '../assessmentViewComponents/Level'
import { colors as epaColors, colorsBackground as epaColorsBackground } from '../assessmentViewComponents/Score'
import COLORS from '../../colors';
const Infos = (props) => (
    <div className='row mt-3'>
        <div className='col-12 col-sm-6 col-md-5 col-xl-4'>
            {props.color ? <div className='ml-1'>
                <Level
                    colorBackground={props.colorBackground}
                    color={props.color}
                    width="1rem"
                    height="1rem"
                    borderRadius="1rem"
                    value={props.value}
                    maxValue={5} />
                <div className="font-weight-bold pr-2 mb-1">{props.title}</div>
            </div> :
                <div className='btn btn-secondary text-nowrap'>{props.button}</div>
            }
        </div>
        <div className='col-12 col-sm-6 col-xl-8'>{props.text}</div>
    </div>
)

export default (props) => <div className="card p-2 mt-2">
    <Legend storageId={'epas.explanation'} title={Legends.EPAs.Explanation.title}>
        <div>
            <div>
                Video: <a className="color-navigation" href="https://levelup.charite.de/videos/epa_2019.mp4">Was sind EPAs?</a>
            </div>
            <div>
                <p>{Legends.EPAs.Explanation.text}</p>
            </div>
            <div>
                Level: <Level className="mx-2 d-inline" value={3} color={COLORS.background.grey7} colorBackground={COLORS.background.grey1} />
            </div>
            <h5 className="mt-4">Schätze dich selbst ein</h5>
            <div>Im Laufe deines Studiums z.B. nach U- oder UaK-Kursen oder Famulaturen kannst du deine Leveleintragen.</div>
            <Infos
                colorBackground={epaColorsBackground[0]}
                color={epaColors[0]}
                value={1}
                title='Habe ich gemacht'
                text='- gibt an unter welchem Level du die jeweilige Tätigkeit ausgeführt hast.'
                {...props} />
            <Infos
                colorBackground={epaColorsBackground[1]}
                color={epaColors[1]}
                value={1.7}
                title='Traue ich mir zu'
                text='- gibt an unter welchem Level du dir die Tätigkeit zutraust.'
                {...props} />
            <h5 className="mt-4">Bitte um eine Fremdeinschätzung</h5>
            <div> Du kannst auch Fremdeinschätzungen von deinen Lehrenden/ Ärzt*innen einholen. </div>
            <Infos
                button='Fremdbewertung einfordern'
                text='- Sende eine Einladung mit einer Fremdbewertungsanforderung an deine*n Dozierende*n.'
                {...props} />
            <Infos
                button='Erhaltene Fremdbewertungen'
                text='- Schau dir alle deine bisher erhaltenen Fremdbewertungen an'
                {...props} />
            <Infos
                colorBackground={epaColorsBackground[2]}
                color={epaColors[2]}
                value={0}
                title='Wird mir zugetraut'
                text='- gibt an unter welchem Level dir deine Lehrenden/ Ärzt*innen die Tätigkeit zutrauen. '
                {...props} />
        </div>
    </Legend>
</div>