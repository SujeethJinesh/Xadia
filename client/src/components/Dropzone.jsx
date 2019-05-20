import React, { Component } from 'react';

// File Upload stuff
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';

registerPlugin(FilePondPluginFileValidateSize, FilePondPluginFileValidateType, FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

class FileUpload extends Component {
    constructor(props) {
        super(props);

        this.state = {
            files: []
        }
    }

    handleInit() {
        console.log('FilePond instance has initialised', this.pond);
    }

    render() {
        return (
            <FilePond
                allowMultiple={false}
                files={this.state.files}
                oninit={() => this.handleInit() }
                allowReplace={true}
                dropOnPage={true}
                dropValidation={true}
                instantUpload={false}
                acceptedFileTypes={['application/vnd.ms-excel','text/csv']}
                onupdatefiles={(fileItems) => {
                    // Set current file objects to this.state
                    this.setState({
                        files: fileItems.map(fileItem => fileItem.file)
                    });
                }}
                labelIdle={"Only CSV/Excel files and up to 1 mb size"}
                // This is in bytes
                maxFileSize={500000}/>
        );
    }
}

export default FileUpload;
