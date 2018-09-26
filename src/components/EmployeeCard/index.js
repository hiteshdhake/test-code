import React, { Component, Fragment } from 'react';
import classNames from 'classnames';
import './styles.css'

class employeeCard extends Component {
    constructor() {
        super();
        this.state = {
            shouldDisplayModelPopover: false
        }
    }

    toggleModelPopOver = () => {
        this.setState({
            shouldDisplayModelPopover: !this.state.shouldDisplayModelPopover
        })
    };

    render() {
        const { employee = {} } = this.props;
        const { shouldDisplayModelPopover } = this.state;
        console.log(this.state.shouldDisplayModelPopover);
        const {age, avatar, bio, dateJoined, firstName, id, jobTitle, lastName} = employee;

        return <Fragment>
            <div className={classNames("employeeCard", {highlight: shouldDisplayModelPopover})} onClick={this.toggleModelPopOver}>
                <div className="avatar">
                    <img src={avatar}/>
                </div>
                <div className="info">
                    <h3>{firstName} {lastName}</h3>
                    <p>{jobTitle}</p>
                </div>
            </div>
            {shouldDisplayModelPopover && <div className={"employeeDetailPopOver"}>
                <div className={"employeeDetailOverlay"} onClick={this.toggleModelPopOver}></div>
                <div className={"employeeDetailModel"}>
                    <div className={"closeModel"}><span onClick={this.toggleModelPopOver}>x</span></div>
                    <div className={"employeeDetail"}>
                       <div className="avatar">
                          <img src={avatar}/>
                          <div><strong>{jobTitle}</strong></div>
                          <div>{age}</div>
                          <div>{dateJoined}</div>
                       </div>
                       <div className="info">
                           <h2>{firstName} {lastName}</h2>
                           <p>{bio}</p>
                       </div>
                    </div>
                </div>
            </div>}

        </Fragment>

    }
}

export default employeeCard