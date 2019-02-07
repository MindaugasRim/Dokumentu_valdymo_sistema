import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import FileUploadComponent from "./FileUploadComponent";

class FileUploadContainer extends Component {
  state = {
    file: [],
    documentTitle: "",
    //selected document type
    documentType: "",
    //all available document types
    documentTypes: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:8081/api/doctypes")
      .then(response => {
        this.setState({ documentTypes: response.data });
        this.setState({ documentType: response.data[0].title });
      })
      .catch(error => {
        console.log(error);
      });
    console.log(
      "ComponentDidMount inside DocumentTYpesCOntainer >>>>>>>>>> this.state.documetTypes>>>>.",
      this.state.documentTypes
    );
  }

  handleFile = e => {
    console.log(e.target.files, "$$$$-e.target.files");
    console.log(e.target.files[0], "$$$$-e.target.files[0]");
    console.log(e.target.files[1], "$$$$-e.target.files[1]");

    let file = Array.from(e.target.files); //e.target.files[0] was before
    let files = this.state.file;
    file.forEach(element => {
      files.push(element);
    });

    this.setState({ file: files });
    //  this.setState({ file: file });
    console.log("&&&&&&&&&& state.file from handleFile = ", this.state.file);
  };

  handleUpload = e => {
    console.log(this.state, "THE STATE from handleUpload------$$$$$$");

    let files = this.state.file; //was this.state.file before
    for (let i = 0; i < files.length; i++) {
      let formData = new FormData();
      formData.append("file", files[i]); //image was originally, I changed it to file
      formData.append("name", this.state.file[i].name); //2nd parameter was "Paulius cicenas"

      axios({
        url: "http://localhost:8081/files",
        method: "post",
        headers: {
          authorisation: "your token"
        },
        data: formData
      })
        .then(response => {
          console.log("File " + files.name + " is uploaded");
        })
        .catch(function(error) {
          //it works without catch block as well
          console.log(error);
          if (error.response) {
            //HTTP error happened
            console.log(
              "Upload error. HTTP error/status code=",
              error.response.status
            );
          } else {
            //some other error happened
            console.log("Upload error. HTTP error/status code=", error.message);
          }
        });
      let fileInStateCleaned = [];
      this.setState({ file: fileInStateCleaned });
    }
  };

  handleDocumentTitle = e => {
    console.log("$$$$$$$ e.target.value>>>>>>", e.target.value);
    let documentTitle = e.target.value;
    this.setState({ documentTitle: documentTitle });
  };
  handleDocumentType = e => {
    console.log("$$$$$$ DocumentTypeChange occured");
    let documentType = e.target.value;
    this.setState({ documentType: documentType });
    // console.log("$$$$$$ this.state.documentType >>>>>> ", this.state.documentType);
  };

  // handleDocumentType = e => {
  //   console.log(
  //     "$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ DocumentTypeChange occured"
  //   );
  // };
  // handleInitialDocumentType = (e)=>{
  //   let documentType = e.target.value;
  //   this.setState({documentType: documentType});
  //   console.log("$$$$$ initial state.type >>>>>>>>", this.state.type);

  // };
  getMainDocumentName = () => {
    if (this.state.file.length > 0) {
      return this.state.file[0].name;
    }
    return "Nepasirinktas joks failas";
  };

  render() {
    console.log(
      "render() inside DocumentTYpesCOntainer >>>>>>>>>> this.state.documetTypes>>>>.",
      this.state.documentTypes
    );
    return (
      <FileUploadComponent
        onUpload={this.handleUpload}
        onFile={this.handleFile}
        onDocumentTypeChange={this.handleDocumentType}
        onDocumentTitle={this.handleDocumentTitle}
        documentTypes={this.state.documentTypes}
        documentName={this.getMainDocumentName()}
        // onInitialDocumentType={this.handleInitialDocumentType}
      />
    );
  }
}

export default FileUploadContainer;
