import React,{Component} from 'react';
import {RootContext} from '../../../Home/Home';
// import {connect} from 'react-redux'; //m


class Counter extends Component {
        //state : utk update / render ulang
        state = {
            order : 5
    }
    
    // membuat metode handle
    
        handleCounterChange = (newValue) =>{  //mengambil data new value
            this.props.onCounterChange(newValue) //ini juga
        }
    
    
        handlePlus = () =>{     //nama metod
         //   alert('plused');// menampilkan alert
            this.setState({ //memberi fungsi metode +1
                order : this.state.order + 1
            },() => {
                this.handleCounterChange(this.state.order);
            })
        }
    
        handleMinus = () =>{    //nama metod
          if(this.state.order > 0){ //memberi statemen jika diatas 0 maka akan melanjutkan ..
            this.setState({ //.. melanjutkan fungsi dibawah (-1)
                order : this.state.order -1
            },() => { //arrow function ditambahkan ke setelah koma pokoke
                this.handleCounterChange(this.state.order);
            })
          }
    
        }

        render(){
            return(
                <RootContext.Consumer>
                    {       
                    //jgn lupa panggil arrow function value
                        value => {     
                            return(
                                <div className="counter">
                                            {/* onClick : aksi, this.Handel : Memanggil fungsi Handel */}
                                    <button className="minus" onClick={this.handleMinus}> - </button> 
                                            {/* this state order, memanggil order state diatas yang jnisnya angka */}
                                    <input className="boxvalue" type="text" value={value.totalOrder}/> 
                                        {/* onCLick memberi aksi, handle plus memanggil metod handel plus  */}
                                    <button className="plus" onClick={this.handlePlus}> + </button>
                                </div>
                            )                                   
                        }
                    }
                </RootContext.Consumer>
            )
        }
}

const mapStateToProps = (state) => {            //memanggil stateGlobal
    return {
        order : state.totalOrder
    }
}
// connect(mapStateToProps)(Counter) connect(mapStateToProps)(Counter)
export default Counter; //(store, dispatch)