import React, {Component, Fragment} from 'react'; //extends dan fragment adl tmbhan library
import Counter from './Counter';



class KartuProduk extends Component{
    render(){
        return( //fragment memunculkan code html 
            <Fragment>
                <div>
                    <img className="img-prod" src="https://www.els.co.id/wp-content/uploads/2018/07/opulf.jpg" alt="rog1"/>
                    <p className="namaproduk">ASUS ROG 890-XY</p>
                    <p className="harga">15.978.000</p>
                </div>
                <Counter />
            </Fragment>
        );
    }
}

export default KartuProduk; //mengekspor hasil kartu produk