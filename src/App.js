import React from 'react';
import { useHistory } from 'react-router-dom';
import { subscribe } from './services/api';
import store from './redux/store';
import Routes from './routes/routes';

function App() {
    subscribe(store, useHistory()); // initializing axios
    return (
        <div className="App">
            <Routes />
        </div>
    );
}

export default App;
