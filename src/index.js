
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { Provider } from 'react-redux'
import store, {persistor} from './store';
import { PersistGate } from 'redux-persist/es/integration/react'
import 'sweetalert2/dist/sweetalert2.css';
import './styles/main.less';

const onBeforeLift = () => {
  console.log("reading state ...")
}

ReactDOM.render(
    <Provider store={store}>
        <PersistGate onBeforeLift={onBeforeLift} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.querySelector('#root')
);
