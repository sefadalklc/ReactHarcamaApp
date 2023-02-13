import React from "react"



const Deneme = (props) => {

   
  
    return (
      <div>
        <div className="product">
        <h6>{props.title}</h6>
          <div className="price">$ {props.price}</div>
          <div className="actions">
            <button  >Sat</button>
            <span className='amount'></span>
            <button >Satın Al</button>
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
  
  export default Deneme