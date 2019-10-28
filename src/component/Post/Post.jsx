import React from 'react';

const Post = (props) => {
    return(
            <div className="frame">
                    <img className="img-thumb" src="https://placeimg.com/200/200/animals" alt=""/>
                    <div className="informasi">
                        <p className="judul" onClick={ () => props.goDetail(props.data.id)}>{props.data.title}</p>
                        <p className="deskripsi"> {props.data.body}</p>
                        <button className="btn-remove" onClick={() => props.hapus(props.data.id)}>Hapus</button>
                        <button className="btn-edit" onClick={() => props.update(props.data)}>Edit</button>
                     </div>
            </div>
    )
}

export default Post;