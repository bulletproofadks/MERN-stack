
import React from 'react';

import ItemTabs from '../item-tabs/ItemTabs';
import getSymbolFromCurrency from 'currency-symbol-map'

// import styles from './Item.module.css'

import { useDispatch } from 'react-redux'
import { buy } from '../../actions/cart'

const Item = ({ value: item, cartItemQty, history }) => {

    const dispatch = useDispatch()

    const handleBuy = item => {
        dispatch(buy(item))
    }

    const renderBuyBtn = (item) => {
        return (<button onClick={e => handleBuy(item)} disabled={!item.canBuy} className="btn btn-sm btn-dark">buy</button>)
    }

    const renderPrice = (item) => {
        const currencySymbol = getSymbolFromCurrency(item.currency)
        return `${currencySymbol} ${item.price}`
    }

    return (
        <div>
            <div className="row">
                <div className="col-3">
                    <img className="img-fluid" src={item.image} alt={item.name} />
                </div>
                <div className="col-6">
                    <h5>{item.name}</h5>
                    <h6>{renderPrice(item)}</h6>
                    {renderBuyBtn(item)} &nbsp; <span className="badge badge-warning">{cartItemQty}</span>
                    <br /><br />
                    <ItemTabs history={history} value={item} />
                </div>
            </div>
        </div>
    );
};

export default Item;