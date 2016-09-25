import { createStore, applyMiddleware, compose} from 'redux';
import reducer from '../reducers';
import thunk from 'redux-thunk';

const finalCreateStore = compose(
    applyMiddleware(thunk)
)(createStore);

export default function configureStore(initialState)
{
    const store = finalCreateStore(reducer, initialState);
    return store;
}
