import React, { Component } from "react";
import { withFuncProps } from "../../withFuncProps";
import './MainPage.css';


class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            codeInput: "",
            errorMessage: "Don't have code?",
            classTable: []
        };
    }

    componentDidMount() {
    }


    handleInputChange = (event) => {
        this.setState({ codeInput: event.target.value });
    }

    handleSubmit = () => {
        const { codeInput } = this.state;
        // Check if codeInput meets length requirements
        if (codeInput.length < 2) {
            this.setState({ errorMessage: "Code must be at least 2 characters long" });
        } 
        else if (!/^\d+$/.test(codeInput)) {
            this.setState({ errorMessage: "Code must contain only numeric characters" });
        }
        else {
            this.checkCodeExist(codeInput)
        }
    }

    checkCodeExist = (input) => {
        const codeExists = this.state.classTable.some(item => item.code === Number(input));
        if (codeExists){
            this.props.navigate("/SelectClass");
        }
        else{
            this.setState({errorMessage: "The code does not exist" });
        }

    }

    render() {
        return (
            <div className="body">
                <div className="RecordPageContainer">
                </div>
            </div>
        );
    }
}

export default withFuncProps(MainPage);
