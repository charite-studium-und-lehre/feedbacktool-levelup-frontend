import React from 'react'

const TätigkeitenList = props => (

    <div className="row TätigkeitenList">
        <div className="col-md">
            <h4>Level der Tätigkeiten</h4>
            <ul className="list-group">
                <li className="list-group-item">0: keine Ausführung</li>
                <li className="list-group-item">1: gemeinsame Ausführung mit dem Arzt</li>
                <li className="list-group-item">2: Ausführung unter Beobachtung des Arztes </li>
                <li className="list-group-item">3: eigenständige Ausführung und alles wird nachgeprüft (Arzt auf Station)</li>
                <li className="list-group-item">4: eigenständige Ausführung und Wichtiges wird nachgeprüft (Arzt auf Station)</li>
                <li className="list-group-item">5: eigenständige Ausführung und Wichtiges wird nachgeprüft (Arzt nur telefonisch erreichbar)</li>
                <li className="list-group-item">6: eigenständige Ausführung und Wichtiges wird besprochen (Arzt nicht im Haus)</li>
            </ul>
        </div>
    
    </div>
)

export default TätigkeitenList
 





