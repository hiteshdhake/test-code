import { createSelector } from 'reselect';

export const getCompanyInfo = createSelector(
    state => state,
    state => state.companyData.companyInfo
);

export const getEmployees = createSelector(
    state => state,
    state => state.companyData.employees
)