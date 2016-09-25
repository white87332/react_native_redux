import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import Posts from '../components/posts/posts';

const store = configureStore();

export default class App extends Component
{
    render()
    {
        return (
            <Provider store={store}>
                <Posts />
            </Provider>
        );
    }
}
