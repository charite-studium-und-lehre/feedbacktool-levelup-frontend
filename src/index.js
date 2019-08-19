import 'bootstrap/dist/css/bootstrap.css';

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './i18n'
import App from './App'
import * as serviceWorker from "./serviceWorker"

ReactDOM.render(<App />, document.getElementById('root'))
/*serviceWorker.register({
	onUpdate: registration => {
		const waitingServiceWorker = registration.waiting

		if (waitingServiceWorker) {
			waitingServiceWorker.addEventListener("statechange", event => {
            	if (event.target.state === "activated") {
					window.location.reload()
            	}
        	})
        	waitingServiceWorker.postMessage({ type: "SKIP_WAITING" })
      	}		
    }
})*/
