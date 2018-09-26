import { createAction } from 'redux-actions';
import { FETCH_PROPERTY_INITIALIZE, FETCH_PROPERTY_SUCCESS, FETCH_PROPERTY_FAILURE } from '../action-types';
import mockData from '../sample-data.json';

const getCompanyEmployeeRecord = () => new Promise((resolve, reject) => {
   if (mockData) return resolve(mockData);

   return reject({ error: 'mock data not found' });
});

export default () => (dispatch) => {
    dispatch(createAction(FETCH_PROPERTY_INITIALIZE));

    getCompanyEmployeeRecord().then(
        data => dispatch(createAction(FETCH_PROPERTY_SUCCESS)(data)),
        error => dispatch(createAction(FETCH_PROPERTY_FAILURE)(error))
        )
}