import React from "react";
import SimpleBar from "../../Charting/SimpleBar";


export default function BarWithHeader(props) {
    const {result, mean, width, total, colorTotal, colorPartOfTotal, children, name} = props;
    const height = "1.5rem";
    return (
        <div className='row'>
            <div className=" col-12">
                <div style={styles.columnLabel}>{name}</div>
                <div className="animated w-100">
                    <SimpleBar height={height} width={width}
                               value={result} mean={mean} total={total}
                               colorTotal={colorTotal} colorPartOfTotal={colorPartOfTotal}>
                        {children}
                    </SimpleBar>
                </div>
            </div>
        </div>
    );
}

const styles = _ => ({
    columnLabel: {
        color: {
            fontSize: ".9rem",
            marginBottom: "-.3rem",
            color: "var(--color-graphs-grid-text)"
        }
    }
});

