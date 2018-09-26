import React from 'react';
import { connect } from 'react-redux';
import { getEmployees } from '../selectors';
import Dashboard from '../components/Dashboard';

const mapStateToProps = (state, props) => {
    const employees = getEmployees(state) || [];
    return { employees }
}

export default connect(mapStateToProps)(Dashboard)
