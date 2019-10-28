import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import VideoC from '../Pages/Video/Video';
import Produk from '../Pages/Produk/Produk';
import LifeCycle from '../Pages/LifeCycleComp/LifeCycle';
import BlogPost from '../Pages/BlogPost/BlogPosta'
import './home.css';
// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
import DetailPost from '../Pages/BlogPost/DetailPost';
import GlobalProvider from '../../context/context';
import Hooks from '../Pages/Hooks/Hooks';
import Image from '../Pages/image/ImageUp';

class Home extends React.Component{

    render(){
        return(
            <Router>
                <Fragment>
                     {/*dibaca srcr global*/}
                        <div className="topNav" id="myTopnav">
                            <Link to="/" className="btn-Blog">Blog Post</Link>
                            <Link to="/produk">Produk</Link>
                            <Link to="/lifecycle">Life Cycle</Link>
                            <Link to="/hooks">Hooks</Link>
                            <Link to="/image">Image</Link>

                            {/* <Link to="/video">Video</Link> */}
                        </div>

                        <Route exact path="/" component={BlogPost} />
                        <Route path="/detail-post/:postID" component={DetailPost} />
                        <Route path="/produk" component={Produk} />
                        <Route path="/lifecycle" component={LifeCycle} />
                        <Route path="/hooks" component={Hooks} />
                        <Route path="/image" component={Image} />
                        {/* <Route path="/video" component={VideoC} /> */}
                </Fragment>
            </Router>
        )
    }
}
export default GlobalProvider(Home);