import React, {useState} from "react";
import {connect} from "react-redux";
import {withTranslation} from "react-i18next";
import _ from "lodash/fp";
import Legend from "../../Charting/Legend";
import AnimatedInteger from "../../Charting/AnimatedInteger";
import Legends from "../../Core/LegendTexts";
import needsData from "../../Core/needsData";
import BarWithHeader from "./BarWithHeader";
import {actions, selectors} from "./Store";
import COLORS from "../../colors";
import {InlineKohortenMittelDot} from "../../Charting/KohortenMittelDot";
import utils from "./Utils";


const stateToProps = (state, ownProps) => ({...selectors.getById(state, ownProps.id)});

const Chart = _.compose(needsData(selectors.loaded, actions.load), connect(stateToProps))(({mode, faecher, module}) => mode === "modules"
    ? module.sort(utils.naturalCompareCodes).map((module, index) => {
        return <ModulBarWithHeader module={module} key={index}/>;
    })
    : faecher.map(fach => {
            return <FachBarWithHeader fach={fach} faecher={faecher}/>;
        }
    ));

const ModulBarWithHeader = ({key, module}) => {
    const {titel, ergebnisPunktzahl, durchschnittsPunktzahl} = module;
    const colorTotal = COLORS.mc.lighter1;
    const colorPartial = COLORS.mc.darker0;
    return (
        <BarWithHeader
            key={key}
            name={titel}
            result={ergebnisPunktzahl}
            total={1}
            mean={durchschnittsPunktzahl}
            colorTotal={colorTotal}
            colorPartOfTotal={colorPartial}
        ><AnimatedInteger value={Math.round(ergebnisPunktzahl * 100)}/> %</BarWithHeader>
    );
};

const FachBarWithHeader = ({fach, faecher}) => {
    const {code, titel, ergebnisPunktzahl, maximalPunktzahl, durchschnittsPunktzahl} = fach;
    const colorTotal = COLORS.mc.lighter1;
    const colorPartial = COLORS.mc.darker0;
    const width = maximalPunktzahl * 100 / Math.max.apply(Math, faecher.map(fach => fach.maximalPunktzahl));
    return (<BarWithHeader
        key={code}
        name={titel}
        result={ergebnisPunktzahl}
        total={maximalPunktzahl}
        width={`${width}%`}
        mean={durchschnittsPunktzahl}
        colorTotal={colorTotal}
        colorPartOfTotal={colorPartial}
    >{ergebnisPunktzahl} von {maximalPunktzahl}</BarWithHeader>);
};

const Details = withTranslation()(({t, id}) => {
    // mode is set to either modules or faecher
    const [mode, setMode] = useState("modules");
    const LegendText = Legends.Exams.MC;
    return (
        <div className='card p-3'>
            <Legend title={LegendText.Details.title}>
                {LegendText.Details.text}
                <div className="position-relative">
                    Der <InlineKohortenMittelDot
                    placing="inline"/> {t(`kennzeichnet den Kohortenmittelwert.`)}
                </div>
            </Legend>
            <div>
                <div className="mt-2">
                    <label className="m-0 mr-2"><input type="radio" name="details.mode"
                                                       id='Switch-> Module'
                                                       checked={mode === "modules"}
                                                       onChange={() => setMode("modules")}
                                                       className="mx-2"/>Module</label>
                    <label><input type="radio" name="details.mode" id='Switch-> Fächer'
                                  checked={mode === "subjects"}
                                  onChange={() => setMode("subjects")}
                                  className="mx-2"/>{t("Fächer")}</label>
                </div>
            </div>
            <div className="mt-2">
                <Chart mode={mode} id={id}/>
            </div>
        </div>
    );
});

export default Details;