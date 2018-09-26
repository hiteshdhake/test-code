import React, { Component, Fragment } from 'react';
import './styles.css'

class employeeCard extends Component {
    constructor() {
        super();
        this.state = {
            toggleModelPopOver: false
        }
    }

    toggleModelPopOver = () => {
        this.setState({
            toggleModelPopOver: !this.state.toggleModelPopOver
        })
    };

    render() {
        const { employee = {} } = this.props;
        console.log(this.state.toggleModelPopOver);
        const {age, avatar, bio, dateJoined, firstName, id, jobTitle, lastName} = employee;

        return <Fragment>
            <div className="employeeCard" onClick={this.toggleModelPopOver}>
                <div className="avatar">
                    <img src={avatar}/>
                </div>
                <div className="info">
                    <h3>{firstName} {lastName}</h3>
                    <p>{jobTitle}</p>
                </div>
            </div>
            {this.state.toggleModelPopOver && <div className={"employeeDetailPopOver"}>
                <div className={"employeeDetailOverlay"}></div>
                <div className={"employeeDetailModel"}>
                    <div className={"closeModel"}><span onClick={this.toggleModelPopOver}>x</span></div>
                    <div className={"employeeDetail"}>hello</div>
                </div>
            </div>}

        </Fragment>

    }
}

export default employeeCard