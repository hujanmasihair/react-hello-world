import React,{Component} from 'react';
import Axios from 'axios';

class DetailPost extends Component{
    state = {
        post: {
            title :'',
            body :''
        }
    }

    componentDidMount(){
        let id = this.props.match.params.postID;
        Axios.get(`http://localhost:3004/posts/${id}`).then(result => {
            console.log('result ', result);
        let post = result.data;
        this.setState({
            post: {
                title :post.title,
                body :post.body
            }
        })
        })
    }
    render(){
        console.log(this.props)
        return(
            <div>
                <br/>
                <p className="judul">{this.state.post.title}</p>
                <p className="deskripsi">{this.state.post.body}</p>
            </div>
        )
    }
}

export default DetailPost;