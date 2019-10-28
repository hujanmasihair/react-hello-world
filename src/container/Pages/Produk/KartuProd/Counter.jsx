import React,{Component} from 'react';
import { GlobalConsumer } from '../../../../context/context';
// import {connect} from 'react-redux'; //m


class Counter extends Component {

        render(){
            return(
                <div className="counter">
                                            {/* onClick : aksi, this.Handel : Memanggil fungsi Handel */}
                        <button className="minus" onClick={() => this.props.dispatch({type: 'MINUS_ORDER'})}> - </button> 
                                            {/* this state order, memanggil order state diatas yang jnisnya angka */}
                        <input className="boxvalue" type="text" value={this.props.state.totalOrder}/> 
                                        {/* onCLick memberi aksi, handle plus memanggil metod handel plus  */}
                        <button className="plus" onClick={() => this.props.dispatch({type: 'PLUS_ORDER'})}> + </button>
                </div>
            )
        }
}

// connect(mapStateToProps)(Counter) connect(mapStateToProps)(Counter)
export default GlobalConsumer(Counter); //(store, dispatch)