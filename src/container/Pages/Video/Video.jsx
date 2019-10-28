import React, {Component, Fragment}from 'react';
import VideoComp from '../..//../component/VideoComp/VideoComp';

class VideoC extends Component{
    render(){
        return(
            <Fragment>
                    <VideoComp
                    judul="Judul 1"
                    desc="15rb x tonton. 10 hari yang lalu"/>
                <VideoComp
                    judul="Judul 2"
                    desc="19rb x tonton. 12 hari yang lalu"/>
                <VideoComp
                    judul="Judul 3"
                    desc="11rb x tonton. 13 hari yang lalu"/>
                <VideoComp
                    judul="Judul 4"
                    desc="12rbx  tonton. 20 hari yang lalu"/>
                <VideoComp /> 
            </Fragment>
        );
    }

}
export default VideoC;