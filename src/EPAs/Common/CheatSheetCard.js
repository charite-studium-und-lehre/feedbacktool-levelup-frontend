import React from 'react'
import makeExtendable from '../../Core/makeExtendable'
import Legend from "../../Charting/Legend"
import Level from '../Assessments/Level'
import COLORS from '../../colors'
import Legends from "../../Core/LegendTexts"
import Video from './EPAsVideo'

const CheatSheetCard = () => {
    return (
        <div className="card p-3 mt-2">
            <Legend title={Legends.EPAs.CheatSheetCard.levels.title}>
                {Legends.EPAs.CheatSheetCard.levels.text.map((e, d) =>
                    <div key={d}>
                        <div>{`${d} - ${e}`}</div>
                        <Level color={COLORS.background.grey7} colorBackground={COLORS.background.grey1} value={d} />
                    </div>)
                }
            </Legend>
            <p style={{ color: COLORS.background.base, lineHeight: "1rem" }}> </p>
            <Legend title={Legends.EPAs.CheatSheetCard.video.title}>
                <Video />
            </Legend>
        </div>
    )
}
export default makeExtendable()(CheatSheetCard)