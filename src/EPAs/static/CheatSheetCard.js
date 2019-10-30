import React from 'react'
import { withTranslation } from 'react-i18next'
import makeExtendable from '../../Core/makeExtendable'
import Legend from "../../Charting/Legend"

import Legends from "../../Core/LegendTexts";

const CheatSheetCard = () => {
    return (
        <div className="card p-3 mt-2">
            <Legend title={Legends.EPAs.CheatSheetCard.levels.title}>
                {Legends.EPAs.CheatSheetCard.levels.text}
            </Legend>
            <p style={{color: "white", lineHeight:"1rem"}}> </p>
            <Legend title={Legends.EPAs.CheatSheetCard.video.title}>
                {Legends.EPAs.CheatSheetCard.video.text}
            </Legend>
        </div>
    )
}
export default withTranslation()(makeExtendable()(CheatSheetCard))