import React, { Component, Fragment } from 'react';
import Post from '../../../component/Post/Post'
import './BlogPost.css'
import './BlogPostForm.css';
import API from '../../../services';

class BlogPost extends Component {

    state = {
        post: [],
        formPost: {
            id: 1,
            title: '',                                                      //state array utk perulangan
            body: ''
        },
        isUpdate: false,
        comments : []
    }

    getPostAPI = () => {
        API.getNewsBlog()                                                    //ambil data API json
            .then((result) => {
                this.setState({
                    post: result
                })
            })
        // API.getComment()
        // .then((result) => {
        //     this.setState({
        //         comments: result
        //     })
        // })
    }

    postDataToAPI = () => {                                                    //post data API
        API.postNewsBlog(this.state.formPost).then((result) => {
            this.getPostAPI();
            this.setState({
                isUpdate: false,
                formPost :{
                    id: 1,
                    title: '',                                                 //state array utk perulangan
                    body: ''
                }
            })
        })
    }

    putDataToAPI = () =>{
        API.updateNewsBlog(this.state.formPost, this.state.formPost.id, this.state.formPost).then((result) => {
            console.log(result);
            this.getPostAPI();
            this.setState({
                isUpdate: false,
                formPost :{
                    id: 1,
                    title: '',                                                      //state array utk perulangan
                    body: ''
                },
            })
        })
    }

    handleDetail = (id) =>{
            this.props.history.push(`/detail-post/${id}`)
    }

    handleHapus = (data) => {                               //metode menghapus data dari API
        API.deleteNewsBlog(data).then((result) => {
            this.getPostAPI();
        })
    }

    handleUpdate = (data) => {
        console.log(data);
        this.setState({
            formPost : data,
            isUpdate : true
        })
    }

    handleFormChange = (event) => {
        let formPostNew = { ...this.state.formPost };                    //copi blogPost
        let timestamp = new Date().getTime();                           //memanggil TanggalWaktu utk ID
        if(!this.state.isUpdate){
            formPostNew['id'] = timestamp;
        }
        formPostNew[event.target.name] = event.target.value;           //menyasar ke 'name' ... 
        this.setState({
            formPost: formPostNew
        }
        )
    }

    handleSubmit = () => {
        if(this.state.isUpdate){
            this.putDataToAPI();
        } else{
            this.postDataToAPI();
        }
    }

    componentDidMount() {
        this.getPostAPI();
    }

    render() {
        return (
            <Fragment>
                <hr />

                <div id="faruq-style">
                    <div className="faruq-form">
                        {/* 'name' memberi nama target sesuai kolom data */}
                        <input type="text" value={this.state.formPost.title}name="title" placeholder="title" onChange={this.handleFormChange} /><br />
                        <input type="text" value={this.state.formPost.body} name="body" placeholder="body" onChange={this.handleFormChange} /><br />
                        <input className='submitbutton' type='submit' value='Simpan' onClick={this.handleSubmit} />
                    </div>
                </div>
                <p className="title">Blog Post</p>
                {
                    this.state.post.map(post => {       //default mapping
                        //melakukan perulangan pada props.. id, title, body diambil dr json
                        return <Post key={post.id} data={post} hapus={this.handleHapus} update={this.handleUpdate} goDetail={this.handleDetail} />
                    })
                }
            </Fragment>
        )
    }
}

export default BlogPost;