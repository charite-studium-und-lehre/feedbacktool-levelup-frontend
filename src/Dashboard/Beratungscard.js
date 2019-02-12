import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class BeratungsCard extends Component {
    render() {
        return (
        
                <div className="col-md-4">
                    <div className="card " >
                        <div className="card-body">
                            <h2 className="card-title">Card title</h2>
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button type="button" class="btn btn-primary">Primary</button>
                        </div>

                    </div>
                </div>
        )
    }

}
export default BeratungsCard;