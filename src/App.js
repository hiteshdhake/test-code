import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import HeaderContainer from './containers/Header';
import DashboardContainer from './containers/Dashboard';
import fetchCompanyRecords from './actions/fetchCompanyRecord';
import './App.css';

class App extends Component {
    componentDidMount() {
      this.props.fetchCompanyRecords();
    }

    render() {
        return <Fragment>
            <HeaderContainer />
            <DashboardContainer />
        </Fragment>;
    }
}

// const mapDispatchToProps = (dispatch) => ({
//     fetchCompanyRecord: dispatch()}
// });

export default connect('', { fetchCompanyRecords })(App);
