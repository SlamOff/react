import React from 'react'
import {render} from 'react-dom'
import App from './components/App'
import App2 from './components2/App2'

render(<App />, document.getElementById('root'))

render(<App2 />, document.getElementById('root2'))