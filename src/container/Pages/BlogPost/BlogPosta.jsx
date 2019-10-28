import React, { Component, Fragment } from 'react';
import Post from '../../../component/Post/Post'
import './BlogPost.css'
// import FormP from '../../component/Post/FormP'
import './BlogPostForm.css';
import axios from 'axios';          //import untuk menggunkan axios

class BlogPost extends Component {

    state = {
        post: [],
        formPost: {
            id: 1,
            title: '',                                                      //state array utk perulangan
            body: ''
        },
        isUpdate: false
    }

    getPostAPI = () => {
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc')            //ambil data API json
            .then((result) => {
                // console.log(result.data);
                this.setState({
                    post: result.data
                })
            })
    }

    postDataToAPI = () => {                                 //post data API
        axios.post('http://localhost:3004/posts', this.state.formPost).then((result) => {
            console.log(result);
            this.getPostAPI();
            this.setState({
                isUpdate: false,
                formPost :{
                    id: 1,
                    title: '',                                                      //state array utk perulangan
                    body: ''
                }
            })
        }, (err) => {
            console.log(err);
        })
    }

    putDataToAPI = () =>{
        axios.put(`http://localhost:3004/posts/${this.state.formPost.id}`, this.state.formPost).then((result) => {
            console.log(result);
            this.getPostAPI();
            this.setState({
                isUpdate: false,
                formPost :{
                    id: 1,
                    title: '',                                                      //state array utk perulangan
                    body: ''
                }
            })
        })
    }

    handleDetail = (id) =>{
            this.props.history.push(`/detail-post/${id}`)
    }

    handleHapus = (data) => {                               //metode menghapus data dari API
        axios.delete(`http://localhost:3004/posts/${data}`).then((result) => {
            console.log(result);
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
        // let title = event.target.value                                 //
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