import React, { Component, useCallback } from 'react';
import { Navbar, FileUpload } from '../components';
import Dropzone from 'react-dropzone';
import ReactFileReader from 'react-file-reader';

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
                {/* <ReactFileReader handleFiles={this.handleFiles}>
                    <button>Upload</button>
                </ReactFileReader> */}

                {/* <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                    {({getRootProps, getInputProps}) => (
                        <section>
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <p>Drag 'n' drop some files here, or click to select files</p>
                        </div>
                        </section>
                    )}
                </Dropzone> */}
                <FileUpload/>
            </React.Fragment>
        )
    }

}

export default UploadPage;
