import React, { Component } from "react";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { getRecords } from '../../../../connector.js';


class RecordTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            records: [],
            columnDefs: [
                { headerName: "Company", field: "company", sortable: true, filter: true },
                { headerName: "Type", field: "type", sortable: true, filter: true },
                { headerName: "Job Title", field: "jobTitle", sortable: true, filter: true },
                { headerName: "Date", field: "date", sortable: true, filter: true },
                { headerName: "Received Interview", field: "receivedInterview", sortable: true, filter: true },
                { headerName: "Website Link", field: "websiteLink", sortable: true, filter: true },
                { headerName: "Comment", field: "comment", sortable: true, filter: true },
                { headerName: "Click", field: "click", sortable: true, filter: true },
            ],
            defaultColDef: {
                flex: 1,
                minWidth: 150,
            }
        };
    }

    componentDidMount() {
        this.loadRecords();
    }

    loadRecords = async () => {
        try {
            const records = await getRecords();
            this.setState({ records });
        } catch (error) {
            console.error("Error loading records:", error);
        }
    };

    render() {
        return (
            <div className="body">
                <div className="RecordPageContainer ag-theme-alpine" style={{ height: 500, width: '100%' }}>
                    <AgGridReact
                        rowData={this.state.records}
                        columnDefs={this.state.columnDefs}
                        defaultColDef={this.state.defaultColDef}
                    />
                </div>
            </div>
        );
    }
}

export default RecordTable;
