import React, { Component } from 'react';
// import { Link, NavLink } from 'react-router-dom';


class BeratungsCard extends Component {
    render() {
        return (
        
                <div className="col-md-4">
                    <div className="card ">
                        <div className="card-body">
                            <h2 className="card-title">{this.props.h2}</h2>
                            <p className="card-text">Im Laufe des Studiums wirst du sicherlich schon einige Situationen erlebt haben in denen du einen professionellen Rat zu den
                     diversen Themen des Studienalltags gebraucht hättest.  Damit du immer gut informiert bist, wer dir in der jeweiligen
                      Situation weiterhelfen kann, haben wir auf dieser Seite einige hilfreiche Beratungsangebote der Charitè zusammengefasst</p>
                            <button type="button" className="btn btn-primary">Mehr erfahren</button>
                        </div>

                    </div>
                </div>
        )
    }

}
export default BeratungsCard;