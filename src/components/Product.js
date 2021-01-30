import React, { useState } from 'react'
import { useStateValue } from '../StateManagment/StateProvider'
import './Product.css'

function Product({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    console.log('--basket---', basket)

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id,
                title,
                image,
                price,
                rating
            }
        })
    }

    return (
        <div className="product">

            <div className="product_info"></div>
            <p>{title}</p>
            <p className="product+price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product_rating">
                {
                    Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p key={i}>🌟</p>
                        ))
                }
            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product

