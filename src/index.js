import 'antd/dist/antd.css'
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './js/root';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Root/>, document.getElementById('root'));
registerServiceWorker();
