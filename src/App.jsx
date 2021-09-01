import { createStore, compose, applyMiddleware } from 'redux';

import Entrance from '@page/App';

import rootReducers from '@reducers/rootReducers';

import { Provider } from 'react-redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReducers, composeEnhancers(applyMiddleware()));

const App = () => {
    return (
        <Provider store={store}>
            <Entrance />
        </Provider>
    );
};

export default App;
