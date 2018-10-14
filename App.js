import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// import IdentificationScreen from './src/screens/IdentificationScreen';
import HomeScreen from './src/screens/HomeScreen';

import rootReducer from './src/reducers';

const store = createStore(rootReducer);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <HomeScreen />
            </Provider>
        );
    }
}
