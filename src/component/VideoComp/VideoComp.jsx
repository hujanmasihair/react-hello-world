import React from 'react'; //wajib
import './VideoComp.css'; //import CSS

const VideoComp = (props) => { //props : function input data otomatis
    return(
        <div className = "video-wrapper">
            <div className="img-thumb">
                <img src="https://i.ytimg.com/vi/9_XBSEcYxxo/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDhjX6o5EyLDH2fEkz_Gl_HRYEQxw" alt=""/>
            </div> 
            {/* untuk mengambil data props */}
            <p className="title">{props.judul}</p> 
            <p className="desc">{props.desc}</p>
        </div>
    )
}

VideoComp.defaultProps = {     //default props, jika ada props yang tidak diisi, maka defaultnya :
    judul : "Untitled Video",
    desc : "00rb x tonton. 0 hari yang lalu"
}

export default VideoComp; //wajib export untuk mengeluarkan hasil