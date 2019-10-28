import React, {Component, Fragment} from 'react';
import './LifeCycle.css';
// import {RootContext} from '../../Home/Home';
import {GlobalConsumer} from '../../../context/context'


class LifeCycle extends Component{
    constructor (props){ 
        super(props); //digunakan untuk meng extends Component
        this.state = { //memberi state nilai 1
            count : 1
        }
    }

    static getDerivedStateFromProps(props, state){  //mengambil data dari props
        console.log('getDerived ambil data')
    }

    componentDidMount(){                            //memasang data 
        setTimeout(() => {                          //atur jeda..
            console.log('Mount Memasang')           //tempat terbaik untuk update
            this.setState({                         // setState atur state baru
                count : 2
            })
        },5000)                                     //.. jeda 3 detik

    }

    shouldComponentUpdate(nextProps, nextState){                        // konfirmasi update data
        console.log('shouldUpdt 0/1 return')

        return true;
    }

    getSnapshotBeforeUpdate(prevProps, nextState){                      //snap data
        console.log('getSnap')
    }

    componentDidUpdate(prevProps, prevState){                           //update data
        console.log('compDidComp update data')
        return null;
    }

    componentWillMount(){                           //pasang data
        console.log('compMount dipasang')
    }

    render(){                                       //menampilkan data
        console.log('render menampilkan')
        return(
                        <Fragment>
                            <button className='btn'>Nilai : {this.state.order}</button>
                            <p> Total Order : {this.props.state.totalOrder}</p>
                        </Fragment>
        )
    }
}

export default GlobalConsumer(LifeCycle);