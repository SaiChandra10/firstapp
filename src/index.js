import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './components/App';
import './components/Keeper-1.css'
import './components/todo_list/todo.css'
import { Provider } from 'react-redux';
import store  from './components/notesUpdated';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

