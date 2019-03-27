import React from 'react'


const TätigkeitenList = props => (

    <div className="row TätigkeitenList">
        <div className="col-md">
            <h4>Ich habe diese Tätigkeit.</h4>
            <ul class="list-group">
                <li className="list-group-item">0.Selbst nicht ausgeführt.</li>
                <li className="list-group-item">1.gemeinsam mit einem Arzt ausgeführt.</li>
                <li className="list-group-item">2.unter Beobachtung eines Arztes ausgeführt.</li>
                <li className="list-group-item">3.eigenständig ausgeführt, alles wurde nachgeprüft (Arzt auf Station).</li>
                <li className="list-group-item">4.eigenständig ausgeführt, Wichtiges wurde nachgeprüft (Arzt auf Station).</li>
                <li className="list-group-item">5.eigenständig ausgeführt, Wichtiges wurde nachgeprüft (Arzt nur telefonisch erreichbar).</li>
                <li className="list-group-item">6.eigenständig ausgeführt, Wichtiges wurde im Nachhinein besprochen (Arzt nicht im Haus).</li>

            </ul>
        </div>
    
    </div>
)

export default TätigkeitenList
 





