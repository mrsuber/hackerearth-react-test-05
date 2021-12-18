import React,{useEffect, useState} from 'react'
import {Nav,Cart} from '../../components'
import './Rootpage.css'

const Rootpage = ({data}) => {

  const [cartProduct, setCartProduct] = useState([])
  const [number , setNumber] = useState(0)

   let addedProductsToCart
  if(localStorage.getItem("cardProducts")){
   addedProductsToCart = localStorage.getItem("cardProducts").split(",")

  }else{
    addedProductsToCart=[]
  }


  const handleAddToCart = (id)=>{
      for(let i=0; i<data.length; i++){
        if(data[i].id === id){

          addedProductsToCart.push(id)
          localStorage.setItem("cardProducts", addedProductsToCart)
            setNumber(number+1)

        }
      }
  }

  useEffect(()=>{


    setNumber(addedProductsToCart.length)

    let temp =[]
    let product =[]
    let seen = false
    for(let i=0; i<addedProductsToCart.length;i++){
      for(let j=0;j<data.length; j++){
        if(addedProductsToCart[i] === data[j].id.toString() ){

          if(temp.length===0){
            temp.push(addedProductsToCart[i])
            product.push(data[i])
          }
          if(temp.length!==0){
            for(let k=0; k<temp.length; k++){
              if(temp[k] === addedProductsToCart[i]){
                seen = true;
                break;
              }
            }
            if(seen=== false){
              temp.push(addedProductsToCart[i])
              product.push(data[i])
            }

            seen=false;
          }

        }
      }
    }

    setCartProduct(product)

  },[])

  console.log("this is cart product", cartProduct)
  console.log("the items",addedProductsToCart)

  return (

    <div className="root__wrapper">
    <Nav number={number}/>
    <div className="card">
    {
      data.map((item,index)=>(
        <Cart key={index} name={item.title} img={item.image} id={item.id} handleAddToCart={handleAddToCart}/>
      ))
    }
    </div>
    </div>
  )
}

export default Rootpage
