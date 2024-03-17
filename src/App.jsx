
import { useEffect } from 'react'
import './App.css'
import Banner from './Banner'
import Navbar from './Navbar'
import { useState } from 'react'
import SingleCooking from './SingleCooking'


function App() {
  
  const [cooking, setCooking]= useState([]);
  const [cart, setCart] =useState([]);
  // const [items, setItems] = useState([]);


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

// const handleClick = (data) => {
//   // Update items state with new data
//   setItems([...items, data]);
// };



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
        <p className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Sed maxime fugiat quisquam dolorem velit in?</p>
        <div className="main-container flex justify-around mt-7">
          <div className="cooking-container grid grid-cols-2 gap-4">

        {
          cooking.map(cook => <SingleCooking handleCart={handleCart} cooking={cook}></SingleCooking>)
        }
            
</div>
          <div className="want-cooking">
            
          <div >
            <h3 className='font-medium'>Want to Cook {cart.length}</h3>
            <hr />
            
            <div className='flex gap-16 font-medium'>
              <p>Name</p>
              <p>Time</p>
              <p>Calories</p>
            </div>
              <div>
                {
                  cart.map((item,index) =>(
                    <div className='flex gap-2 font-medium'>
                      <h5>{index+1}</h5>
                      <h5 className=''> {item.recipe_name}</h5>
                      <h5> {item.preparing_time}</h5>
                      <h5> {item.calories}</h5>
                      <button onClick={()=> handlePeoparing(item.recipe_id,)} className='btn btn-accent rounded-full'>Preparing</button>
                    </div>
                  ))
                }
              </div>
          
          </div>
            <div className='currently-cooking'>
                
            <div>
                <h3 className='font-medium'>Currently cooking <span> </span> </h3>
                <hr />

                <div className='flex gap-16 font-medium'>
                  <p>Name</p>
                  <p>Time</p>
                  <p>Calories</p>
                </div>
            </div>

                

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
