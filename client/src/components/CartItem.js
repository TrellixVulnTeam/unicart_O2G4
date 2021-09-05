import React, { useState, useEffect } from "react";
import styled from "styled-components";

function CartItem({item, updateCartItemQuantity, removeFromCart}) {
    const [quantity, setQuantity] = useState(item.quantity)

    const handleChange = (e) => {
        setQuantity(e.target.value);
        updateCartItemQuantity(item.id, e.target.value)
      };

      const handleDelete = () => {
          removeFromCart(item.id)
      }


    return(
        <div>
            <Container>
                <Card>
            <Image src={item.product.image_url} alt="pic"/>
            </Card>
            <ItemContainer>
            <h1>{item.store.name}</h1>
            <h1>{item.product.name}</h1>
            <h1>${item.product.price * item.quantity}</h1>
            <h1>Quantity: {item.quantity}</h1>
            <label for="quant">Update Quantity</label>
        <select name="quant" onChange={handleChange} defaultValue={item.quantity}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <br></br>
            <div class="wrapper" >
  <div class="link_wrapper">
    <button onClick={handleDelete}>Remove from Cart</button>
    <div class="icon">
    <svg class="svg-icon" viewBox="0 0 20 20">
    <path d="M10.034,3.635h4.106c0.227,0,0.41-0.184,0.41-0.411c0-0.227-0.184-0.411-0.41-0.411h-4.106c-0.227,0-0.411,0.184-0.411,0.411C9.623,3.451,9.807,3.635,10.034,3.635 M17.412,14.412h0.002l1.643-7.392l-0.008-0.002c0.008-0.032,0.02-0.063,0.02-0.098c0-0.227-0.184-0.411-0.41-0.411H5.492L4.909,4.338L4.903,4.34C4.853,4.171,4.702,4.045,4.516,4.045H1.41C1.184,4.045,1,4.229,1,4.456S1.184,4.867,1.41,4.867h2.791l2.564,9.563h0.001c0.035,0.117,0.119,0.209,0.229,0.258c-0.154,0.25-0.247,0.541-0.247,0.857c0,0.906,0.735,1.643,1.643,1.643c0.907,0,1.643-0.736,1.643-1.643c0-0.301-0.087-0.58-0.228-0.822h4.562c-0.141,0.242-0.229,0.521-0.229,0.822c0,0.906,0.736,1.643,1.643,1.643c0.908,0,1.643-0.736,1.643-1.643c0-0.316-0.092-0.607-0.246-0.857C17.295,14.637,17.381,14.535,17.412,14.412 M15.74,7.331h2.406l-0.365,1.643h-2.223L15.74,7.331z M5.712,7.331h2.722l0.183,1.643H6.152L5.712,7.331z M6.813,11.438L6.373,9.795h2.336l0.183,1.643H6.813z M7.034,12.26h1.949L9.165,13.9h-1.69L7.034,12.26zM8.392,16.365c-0.454,0-0.822-0.367-0.822-0.82s0.368-0.822,0.822-0.822c0.454,0,0.821,0.369,0.821,0.822S8.845,16.365,8.392,16.365 M11.678,13.9H9.991L9.809,12.26h1.869V13.9z M11.678,11.438H9.717L9.534,9.795h2.144V11.438zM11.678,8.974H9.443L9.261,7.331h2.417V8.974z M14.184,13.9h-1.686V12.26h1.869L14.184,13.9z M14.457,11.438h-1.959V9.795h2.143L14.457,11.438z M14.732,8.974h-2.234V7.331h2.416L14.732,8.974z M15.783,16.365c-0.453,0-0.82-0.367-0.82-0.82s0.367-0.822,0.82-0.822s0.822,0.369,0.822,0.822S16.236,16.365,15.783,16.365 M16.686,13.9H15.01l0.184-1.641h1.857L16.686,13.9zM15.283,11.438l0.184-1.643H17.6l-0.365,1.643H15.283z"></path>    </svg>
    </div>
  </div>
</div> 
            </ItemContainer>
</Container>
        </div>
    )

}
const Container = styled.div`
float: right;
margin-right: 5%;
margin-bottom: 10px;
display: grid;
  grid-template-columns: 2fr 2fr ;
    grid-row-gap: 20vh;
`;

const Image = styled.img`
margin-top: 5px;
  width: 10vw;
  height: 15vw;
`;

const ItemContainer = styled.div`
float: right;
margin-right: 5%;
margin-bottom: 10px;
display: grid;
//   width: 100%;
`;

const Card = styled.div`
margin-top: 10px;
margin-bottom: 10px;
margin-right: 10px;
margin-left: 10px
  height: 5vw;
  width: 2vw;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  border: 1px solid transparent;
//   box-shadow: 0 30px 40px rgba(0,0,0,.1);
//   background: linear-gradient(to left, #CEDBE4, white 25%, white 75%, #CEDBE4 100%);

`;

export default CartItem;