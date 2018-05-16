import React from "react";
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import API from "../../utils/API.js";



class Calendar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            startDate: moment(),
            endDate: moment()
        };

        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
        this.saveDates = this.saveDates.bind(this);
    };

    handleChangeStart(date) {
        this.setState({
            startDate: date
        });
    };

    handleChangeEnd(date) {
        this.setState({
            endDate: date
        });
    };

    saveDates() {
        var starting = this.state.startDate.format();
        var ending = this.state.endDate.format();

        API.saveDates({
            startdate: starting,
            enddate: ending
        });
    };





    render() {
        return (
            <div className='calendar-container profile-card card-panel grey lighten-5  '>
                <h3 className='profile-header'>My Availability</h3>
                <span className= "profile-text">
                I can help take care of pack dogs starting....
                <DatePicker
                    selected={this.state.startDate}
                    selectsStart
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onChange={this.handleChangeStart}
                />
                until...
                <DatePicker
                    selected={this.state.endDate}
                    selectsEnd
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onChange={this.handleChangeEnd}
                />
                </span>

                <button className="waves-effect waves-light btn .home-btn" onClick={this.saveDates} > Save Dates </button>

            </div>
        )

    }
};

export default Calendar;