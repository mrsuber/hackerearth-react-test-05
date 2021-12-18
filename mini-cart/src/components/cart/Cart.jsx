import React from 'react'
import './Cart.css'
import pd from '../../images/product.jpeg'
const Cart = ({img, name,handleAddToCart, id}) => {
  const handleitem = ()=>{
    handleAddToCart(id)
  }
  return (
    <div className="cart__wrapper">

    <div className="cart__img"> <img className="product_img" src={pd} alt={name}/></div>
    <div className="cart__footer">
    <h3>Product Name: {name}</h3>
    <span className="btn" onClick={handleitem}>add to cart</span>
    </div>
    </div>
  )
}

export default Cart
