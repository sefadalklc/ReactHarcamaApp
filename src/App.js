import React from 'react';
import './App.css';
import Header from './components/Header';
import { useState,useEffect } from 'react';
import products from "./products.json"
import Product from './components/Product';
import Basket from "./components/Basket"


function App() {

  const [money,setMoney] = useState(500000)
  const [basket,setBasket] = useState([])
  const [total,setTotal] = useState(0)


  function reset () {
    setBasket ([])
  }

  useEffect(() => {
    setTotal(
       basket.reduce((acc, item) => {
        return acc + (item.amount * (products.find(product => product.id === item.id).price))
      }, 0)
    )
  },[basket])

  return (
    <div >
     <Header total={total} money={money} />
     {products.map(product => (
      <Product key={product.id} total={total} money={money} basket={basket} setBasket={setBasket} product={product} />
     ))}
      <Basket products={products} basket={basket} total={total} />
      <button onClick={reset}>Sıfırla</button>
   
     
    </div>
  );
}

export default App;
