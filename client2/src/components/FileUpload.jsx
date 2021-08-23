import React, { Component } from 'react';

// File Upload stuff
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';

// CSV
import { CsvToHtmlTable } from 'react-csv-to-table';

registerPlugin(FilePondPluginFileValidateSize, FilePondPluginFileValidateType, FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

class FileUpload extends Component {
    constructor(props) {
        super(props);

        this.state = {
            files: [],
            cleanCSV: ""
        }

        this.displayData = this.displayData.bind(this);
    }

    handleInit() {
        console.log('FilePond instance has initialised', this.pond);
        this.setState({
            files: []
        });
    }

    displayData(results) {
        console.log(results);

        if (results.data.length > 20) {
            results = results.data.slice(0, 20)
        }

        const Papa = require('papaparse'); 
        var parsedResults = Papa.unparse(results);
        debugger;
        
        this.setState({
            cleanCSV: parsedResults
        });
    }

    render() {
        return (
            <React.Fragment>
                <FilePond
                    allowMultiple={false}
                    files={this.state.files}
                    oninit={() => this.handleInit() }
                    allowReplace={true}
                    dropOnPage={true}
                    dropValidation={true}
                    instantUpload={false}
                    acceptedFileTypes={[/** 'application/vnd.ms-excel',*/ 'text/csv']}
                    onupdatefiles={fileItems => {
                        // Set currently active file objects to this.state
                        this.setState({
                            files: fileItems.map(fileItem => fileItem.file),
                        })

                        const Papa = require('papaparse');
                        
                        if (fileItems !== undefined && fileItems.length !== 0) {
                            Papa.parse(fileItems[0].file, {
                                header: true,
                                dynamicTyping: true,
                                complete: this.displayData
                            });
                        }
                    }}
                    labelIdle={"Only CSV/Excel files and up to 5MB size"}
                    // This is in bytes
                    maxFileSize={5000000}/>
                <CsvToHtmlTable
                    data={this.state.cleanCSV}
                    csvDelimiter=","
                    tableClassName="table table-striped table-hover"
                />
            </React.Fragment>
        );
    }
}

export default FileUpload;
