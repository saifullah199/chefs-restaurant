
import { useEffect } from 'react'
import './App.css'
import Banner from './Banner'
import Navbar from './Navbar'
import { useState } from 'react'
import SingleCooking from './SingleCooking'
function App() {
  
  const [cooking, setCooking]= useState([]);
useEffect(()=>{
  fetch("./cooking.json")
  .then(res => res.json())
  .then(data =>{
    setCooking(data);
  })
},[])
console.log(cooking)
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
          cooking.map(cook => <SingleCooking cooking={cook}></SingleCooking>)
        }
            
</div>
          <div className="want-cooking">
            <h3>Want to Cook</h3>
            <hr />
            <div>
              <table className='mx-4'>
                  <tr className=''>
                    <th>Name</th>
                    <th >Time</th>
                    <th>Calories</th>
                  </tr>
              </table>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
