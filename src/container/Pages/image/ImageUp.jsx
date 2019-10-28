// import React from 'react';
// import ImageUploader from 'react-images-upload';
//  
// class ImageUp extends React.Component {
//  
    // constructor(props) {
        // super(props);
        //  this.state = { pictures: [] };
        //  this.onDrop = this.onDrop.bind(this);
    // }
//  
    // onDrop(picture) {
        // this.setState({
            // pictures: this.state.pictures.concat(picture),
        // });
    // }
//  
    // render() {
        // return (
            // <ImageUploader
                // withIcon={true}
                // buttonText='Choose images'
                // onChange={this.onDrop}
                // imgExtension={['.jpg', '.gif', '.png', '.gif']}
                // maxFileSize={5242880}
            // />
        // );
    // }
// }
// 
// export default ImageUp;

import React from 'react'
const axios = require("axios");

class ReactUploadImage extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            file: null
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onFormSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('myImage',this.state.file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        axios.post("/upload",formData,config)
            .then((response) => {
                alert("The file is successfully uploaded");
            }).catch((error) => {
        });
    }
    onChange(e) {
        this.setState({file:e.target.files[0]});
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <h1>File Upload</h1>
                <input type="file" name="myImage" onChange={this.onChange} />
                <button type="submit">Upload</button>
            </form>
        )
    }
}

export default ReactUploadImage