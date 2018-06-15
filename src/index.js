import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import App2 from './components2/App2';
import App3 from './wix/App3';

render(<App />, document.getElementById('root'));

render(<App2 />, document.getElementById('root2'));

render(<App3 />, document.getElementById('root3'));