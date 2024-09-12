import React, { Component } from "react";
import { GoogleLogin } from '@react-oauth/google';
import { withFuncProps } from "../../withFuncProps";
import RecordTable from "../../Functions/Table/RecordTable/RecordTable";
import './MainPage.css';
import {jwtDecode} from "jwt-decode"; 

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            codeInput: "",
            classTable: [],
            isAuthenticated: false,
            userInfo: null 
        };
    }

    handleLoginSuccess = (credentialResponse) => {
        console.log(credentialResponse);
        const decodedUserInfo = jwtDecode(credentialResponse.credential); 
        console.log("Decoded User Info:", decodedUserInfo);
        
        this.setState({
            isAuthenticated: true,
            userInfo: decodedUserInfo 
        });
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
                            <h3>Welcome, {this.state.userInfo?.name}</h3>
                            <RecordTable />
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default withFuncProps(MainPage);
