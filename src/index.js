import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CounterContextProvider from './4-context/provider'; /** For 4-context only. */
import { Provider } from 'react-redux'; /** For 5-redux only. */
import store from './5-redux/store'; /** For 5-redux only. */

ReactDOM.render(
    <React.StrictMode>
        {/** For 4-context only. */}
        <CounterContextProvider>
            {/** For 5-redux only. */}
            <Provider store={store}>
                <App />
            </Provider>
        </CounterContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
