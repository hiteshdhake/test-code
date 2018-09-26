import { handleActions } from 'redux-actions';
import { FETCH_PROPERTY_INITIALIZE, FETCH_PROPERTY_FAILURE, FETCH_PROPERTY_SUCCESS } from '../action-types';

export default handleActions({
    [FETCH_PROPERTY_INITIALIZE]: (state, action) => ({ ...state, status: 'fetching' }),
    [FETCH_PROPERTY_SUCCESS]: (state, action) => ({ ...state, ...action.payload }),
    [FETCH_PROPERTY_FAILURE]: (state, action) => ({ ...state, status: 'failure', ...action.payload })
}, {});