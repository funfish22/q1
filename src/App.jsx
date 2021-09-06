import { createStore, compose, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';

import Entrance from '@page/App';

import rootReducers from '@reducers/rootReducers';

import { Provider } from 'react-redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReducers, composeEnhancers(applyMiddleware()));

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Entrance />
            </BrowserRouter>
        </Provider>
    );
};

export default App;
