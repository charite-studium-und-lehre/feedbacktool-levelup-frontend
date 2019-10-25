import Legend from "../../Charting/Legend";
import Legends from "../../Core/LegendTexts";
import React from "react";

export default () => <div className="card p-2">
    <Legend title={Legends.EPAs.Explanation.title}>{Legends.EPAs.Explanation.text}</Legend>
</div>