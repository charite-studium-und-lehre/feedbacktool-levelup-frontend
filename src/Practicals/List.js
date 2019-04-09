import React from 'react'

const List = props => (

    <div className="row">
        <div className="col-md">
            <h4>Level der Eigenständigkeit und Aufsicht</h4>
            <ul className="list-group">
                <li className="list-group-item">0: keine Ausführung </li>
                <li className="list-group-item">1: gemeinsam mit dem Arzt</li>
                <li className="list-group-item">2: unter Beobachtung des Arztes </li>
                <li className="list-group-item">3: eigenständig, alles wird nachgeprüft (Arzt auf Station)</li>
                <li className="list-group-item">4: eigenständig, Wichtiges wird nachgeprüft (Arzt auf Station)</li>
                <li className="list-group-item">5: eigenständig, Wichtiges wird nachgeprüft (Arzt nur telefonisch erreichbar)</li>
            </ul>
        </div>
    
    </div>
)

export default List
 





