import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import TodoList from './components/TodoList'
import store from './store'

const Index = (
    <Provider store={store}>
        <TodoList />
    </Provider>
)

ReactDOM.render(Index, document.getElementById('root'));