import React, { Component } from "react";
import "./PersonalData.css";


class PersonalData extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        firstName: "",
        lastName: "",
        phone: "",
        address: "",
        aboutMe: "",
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleClick = () => {
        this.props.userData();
    }

    render() {
        return (
            <div className="row" style={{ fontSize: "20px" }}>
                <div className="col s12">
                    <div className="profile-card card-panel grey lighten-5 z-depth-1">
                        <div className="row valign-wrapper">
                            <div className="col m1 s12">
                            </div>
                            <form className="col m5 s12">
                                <div className="row about-row">
                                    <div className="input-field profile-text">  <i className="material-icons">face</i>
                                        <span name="firstName" value={this.props.firstname} onChange={this.handleInputChange} id="firstName" type="text" className="validate profile-text" >{this.props.firstname} </span>
                                    </div>
                                </div>
                                <div className="row about-row">
                                    <div className="input-field profile-text"><i className="material-icons">contact_phone</i>
                                        <span name="phone" value={this.props.phone} onChange={this.handleInputChange} id="phone" type="text" className="validate profile-text" >{this.props.phone} </span>
                                    </div>
                                </div>
                                <div className="row about-row">
                                    <div className="input-field profile-text"><i className="material-icons">home</i>
                                        <span name="address" value={this.props.address} onChange={this.handleInputChange} id="address" type="text" className="validate profile-text"> {this.props.address} </span>
                                    </div>
                                </div>
                                <div className="row about-row" id="aboutMeDiv">
                                    <div className="input-field profile-text"><i className="material-icons">speaker_notes</i>
                                        <span name="aboutMe" value={this.props.about} onChange={this.handleInputChange} id="aboutMe" className="materialize-textarea profile-text ">{this.props.about}</span>
                                    </div>
                                </div>
                                <a onClick={this.handleClick} className="waves-effect waves-light btn " id="btnSave">Save</a>
                            </form>
                            <div className="col m5 s12">
                                <div id="prof-image">
                                    <img src={this.props.picture} alt="user-profile-image" className="responsive-img user-profile-image" />
                                </div>
                            </div>
                            <div className="col m1 s12">
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default PersonalData;
