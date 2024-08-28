import React, { Component } from 'react';
import './Application.css';
import { createRecord } from '../../../connector.js';


class ApplicationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            company: '',
            positionType: '',
            receivedInterview: '',
            jobTitle: '',
            dateApplied: '',
            applicationLink: '',
            comment: ''
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.handleCreateRecord();
    }

    handleCreateRecord = async () => {
        const { company, positionType, receivedInterview, jobTitle, dateApplied, applicationLink, comment } = this.state;
    
        const recordData = {
            company,
            type: positionType,
            jobTitle,
            date: dateApplied,
            receivedInterview: receivedInterview === 'YES',
            websiteLink: applicationLink,
            comment: comment === ''? '' : comment,
            click: 1
        };
    
        try {
            const response = await createRecord(recordData);
            console.log('Record created:', response);
        } catch (error) {
            console.error('Error creating record:', error);
        }
    }
    
    render() {
        return (
            <div className="application-form-container">
                <form className="application-form" onSubmit={this.handleSubmit}>
                    <h2>Add Your Application</h2>
                    <input 
                        type="text" 
                        name="company" 
                        placeholder="Company" 
                        value={this.state.company} 
                        onChange={this.handleChange} 
                    />
                    <div className='line'>
                    <select 
                        name="positionType" 
                        placeholder="Type of Position"
                        value={this.state.positionType} 
                        onChange={this.handleChange}
                    >
                        <option value="">Type of Position</option>
                        <option value="Intern">Intern</option>
                        <option value="Part-Time">Part-Time</option>
                        <option value="Full-Time">Full-Time</option>
                        <option value="Coop">Coop</option>
                    </select>
                    
                    <select 
                        name="receivedInterview" 
                        placeholder="Received Interview"
                        value={this.state.receivedInterview} 
                        onChange={this.handleChange}
                    >
                        <option value="">Received Interview?</option>
                        <option value="YES">YES</option>
                        <option value="NO">NO</option>

                    </select>
                    </div>
                    <input 
                        type="text" 
                        name="jobTitle" 
                        placeholder="Job Title" 
                        value={this.state.jobTitle} 
                        onChange={this.handleChange} 
                    />
                    <input 
                        type="date" 
                        name="dateApplied" 
                        value={this.state.dateApplied} 
                        onChange={this.handleChange} 
                    />
                    <input 
                        type="url" 
                        name="applicationLink" 
                        placeholder="Application Link" 
                        value={this.state.applicationLink} 
                        onChange={this.handleChange} 
                    />
                    <textarea 
                        name="comment" 
                        placeholder="Comment" 
                        value={this.state.comment} 
                        onChange={this.handleChange} 
                    />
                    <button type="submit" className="submit-button">Submit Application</button>
                </form>
            </div>
        );
    }
}

export default ApplicationForm;
