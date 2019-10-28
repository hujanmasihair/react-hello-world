import React, {Component, Fragment} from 'react'; //extends dan fragment adl tmbhan library
import './Produk.css';
import KartuProduk from './KartuProd/KartuProduk';
import { GlobalConsumer } from '../../../context/context';


class Produk extends Component{
    render(){
        return( //fragment memunculkan code html 
                            <Fragment>
                                <p className="produknya">PRODUK ASUS</p>
                                <div className="header">
                                        <img className="logo" src="https://tr.rbxcdn.com/0aeba3672f14d7ed5afe9732124fd56f/420/420/Decal/Png" alt="logo"></img>
                                        <img  className="troli" src="https://www.desimoneluca.com/wp-content/uploads/2017/06/cart-add-icon.png" alt="troli"/>
                                        <div className="troli-angka">{this.props.state.totalOrder}</div>
                                </div>
                                <div className="kartu">
                                    <KartuProduk />
                                </div>
                            </Fragment>
        );
    }
}

export default GlobalConsumer(Produk);