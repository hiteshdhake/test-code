import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import {getCompanyInfo} from '../selectors';

const mapStateToProps = (state, props) => {
    const { companyName, companyMotto, companyEst } = getCompanyInfo(state) || {};
    return { companyName, companyMotto, companyEst }
};

export default connect(mapStateToProps)(Header)
