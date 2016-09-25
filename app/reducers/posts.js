import Immutable from 'immutable';
import * as types from '../constants/actionTypes';

// const initialItems = Immutable.fromjs({
//     'list':[]
// });

const initialItems = {
    'list':[]
};

export default function posts(state = initialItems, action = {})
{
    switch (action.type)
    {
        case types.GET_LATEST_LIST:
            let data = state.list.concat(action.data);
            state = Object.assign({}, state, data, {
                'list':data
            });
            return state;
        default:
            return state;
    }
}
