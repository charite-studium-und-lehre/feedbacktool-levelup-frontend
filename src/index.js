import 'bootstrap/dist/css/bootstrap.css';

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './i18n'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
