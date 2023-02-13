



const Product = ({product,basket,setBasket, total , money }) => {

  const basketItem =basket.find(item => item.id === product.id )

 function addBasket (){ 
  const checkBasket = basket.find(item => item.id === product.id)
    //ürün daha önce eklenmiş
    if (checkBasket){
      checkBasket.amount += 1
      setBasket([...basket.filter(item => item.id !== product.id)  ,checkBasket])

    }else{
      setBasket([...basket, {
        id: product.id,
        amount:1
      }])
    }
 }




 const removeBasket = () => {
  const currentBasket = basket.find(item => item.id === product.id)
  currentBasket.amount -= 1
    
    if (currentBasket.amount === 0){
      setBasket([...basket.filter(item => item.id !== product.id) ])
    }else{
      setBasket([...basket.filter(item => item.id !== product.id)  ,currentBasket])
     
    }
 }

  return (
    <div>
      <div className="product">
      <h6>{product.title}</h6>
        <div className="price">$ {product.price}</div>
        <div className="actions">
          <button disabled={!basketItem} onClick={removeBasket}>Sat</button>
          <span className='amount'>{basketItem && basketItem.amount || 0}</span>
          <button disabled={total + product.price > money} onClick={addBasket}>Satın Al</button>
        </div>
        <style jsx>{`
       .product {
        padding: 10px;
        background: #f8f8ff;
        border: 1px solid #ddd;
        margin-top:25px;
      }
        
        `}</style>
      </div>
    </div>
  )
}

export default Product