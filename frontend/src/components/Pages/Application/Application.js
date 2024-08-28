import React, { Component } from 'react';
import './Application.css';

class ApplicationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            company: '',
            jobSeletion:'',
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
                    <select
                        name="jobSelection"
                        value={this.state.jobSeletion}
                        onChange={this.handleChange}
                    >
                        <option value="">Job Selection</option>

                    </select>
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
