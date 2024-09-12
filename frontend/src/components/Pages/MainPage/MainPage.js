import React, { Component } from "react";
import { GoogleLogin } from '@react-oauth/google';
import { withFuncProps } from "../../withFuncProps";
import RecordTable from "../../Functions/Table/RecordTable/RecordTable";
import './MainPage.css';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            codeInput: "",
            classTable: [],
            isAuthenticated: false
        };
    }

    handleLoginSuccess = (credentialResponse) => {
        console.log(credentialResponse);
        this.setState({ isAuthenticated: true });
    };

    handleLoginError = () => {
        console.log('Login Failed');
    };

    render() {
        return (
            <div className="main-page-body">
                <div className="main-page-container">
                    {!this.state.isAuthenticated ? (
                        <div className="google-login-container">
                            <GoogleLogin
                                onSuccess={this.handleLoginSuccess}
                                onError={this.handleLoginError}
                            />
                        </div>
                    ) : (
                        <div className="record-table-section">
                            <RecordTable />
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default withFuncProps(MainPage);
