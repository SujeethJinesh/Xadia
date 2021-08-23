import React, { Component } from 'react';
import { Navbar, FileUpload, DisplayCSV } from '../components';

/**
 * This is where the user uploads their dataset
 */
class UploadPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            files: []
        }
    }

    handleFiles = files => {
        console.log(files)
    }

    render() {
        return (
            <React.Fragment>
                <Navbar></Navbar>
                <FileUpload/>
                <DisplayCSV/>
            </React.Fragment>
        )
    }

}

export default UploadPage;
