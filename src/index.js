import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './js/store/Store';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react';

ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
