import { Homepage,Rootpage} from './pages'
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import {useState,useEffect} from 'react'
import axios from 'axios'

let demoData = {
  "products": [
    {
      "id": "123442",
      "title": "Product 1",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      "image": "/product1.jpeg",
      "price": "39",
      "currency": "$"
    },
    {
      "id": "123443",
      "title": "Product 2",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      "image": "/product2.jpeg",
      "price": "39",
      "currency": "$"
    }
  ]
}


const App=()=> {

const [products, setProducts] = useState([])


 useEffect(()=>{
   const fetchNewsData = async()=>{
     const res = await axios.get("https://dnc0cmt2n557n.cloudfront.net/products.json")
     setProducts(res.data.products)
   }

   fetchNewsData()

   setProducts(demoData.products)
 },[])



  return (
    <Router>

        <Switch>

            <Route exact path="/checkout"><Homepage /></Route>
            <Route exact path="/" ><Rootpage data={products}/></Route>

        </Switch>

    </Router>
  );
}

export default App;
