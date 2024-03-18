
import { useEffect } from 'react'
import './App.css'
import Banner from './Banner'
import Navbar from './Navbar'
import { useState } from 'react'
import SingleCooking from './SingleCooking'
import Cart from './Cart'
import CurrentCooking from './CurrentCooking'

function App() {
  
  const [cooking, setCooking]= useState([]);
  const [cart, setCart] =useState([]);
  const [items, setItems] = useState([]);


useEffect(()=>{
  fetch("./cooking.json")
  .then(res => res.json())
  .then(data =>{
    setCooking(data);
  })
},[])
// console.log(cooking)

const handleCart = (p) =>{
  const isExist = cart.find(cook => cook.recipe_id ==p.recipe_id);
  if(!isExist){
    setCart([...cart,p]);
  }
  else{
    alert("already exist")
  }
  
}
const handlePeoparing = (recipe_id) =>{
  const newCart = cart.filter(item =>item.recipe_id != recipe_id)
  setCart(newCart);
  
  // const CurrentCooking = cart.map(item=> item.recipe_name = recipe_name)
  // setItems(CurrentCooking);
}

const handleClick = (data) => {
  const CurrentCooking = cart.map(item=> item.recipe_name = item.recipe_name)
  console.log(CurrentCooking)
  setItems([...items, data]);
};



// console.log(cart)
  return (
    <div>
      <div className='container mx-auto mt-5 w-10/12'>
        <Navbar></Navbar>
      </div>
      <div className='container mx-auto mt-5 w-10/12'>
        <Banner></Banner>
      </div>
      <div className="mt-5">
        <h2 className='text-center text-3xl'>Our Recipes</h2>
        <p className='text-center'>Learn and Master Basic Cooking, Chefs, Daily cooking, <br />
                        Restaurant Chefs to become an exceptionally well world-class Chef.</p>
        <div className="main-container flex justify-around mt-7">
          <div className="cooking-container grid grid-cols-2 gap-4">

        {
          cooking.map(cook => <SingleCooking handleCart={handleCart} cooking={cook}></SingleCooking>)
        }
            
</div>
          <div className="want-cooking">
            <Cart handlePeoparing={handlePeoparing} cart={cart}></Cart>
          
            <div className='currently-cooking'>
                
            <CurrentCooking handleClick={handleClick} items={items} > </CurrentCooking>
                

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
