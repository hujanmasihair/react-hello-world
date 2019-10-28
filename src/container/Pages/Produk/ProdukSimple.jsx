import React, {Component, Fragment} from 'react'; //extends dan fragment adl tmbhan library
import './Produk.css';
import KartuProduk from './KartuProd/KartuProduk';
import Counter from './KartuProd/Counter';


class Produk extends Component{
    //state : utk update / render ulang
    state = {
        order : 5
}

//metode untuk mengubah counter
handleCounterChange = (newValue) =>{ //menentuka nilai new Value
    this.setState({
        order : newValue //value baru
    })
}

    render(){
        return( //fragment memunculkan code html 
            <Fragment>
                <p className="produknya">PRODUK ASUS</p>
                <div className="header">
                        <img className="logo" src="https://tr.rbxcdn.com/0aeba3672f14d7ed5afe9732124fd56f/420/420/Decal/Png" alt="logo"></img>
                        <img  className="troli" src="https://www.desimoneluca.com/wp-content/uploads/2017/06/cart-add-icon.png" alt="troli"/>
                        <div className="troli-angka">{this.state.order}</div>
                </div>
                            <div className="kartu"></div>
                <KartuProduk />
                {/* //memanggil kartu produk -> import dulu */}
                {/* aksi Counterchange akan mengirim value ke handel CC, agar dirubah ke new vaulue */}
                <Counter onCounterChange={(value) => this.handleCounterChange(value)}/> 
            </Fragment>
        );
    }
}

export default Produk;