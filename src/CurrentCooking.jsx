

const CurrentCooking  = ({handleClick}) => {
//   const [items, setItems] = useState([]);

//   const handleClick = (data) => {
//     // Update items state with new data
//     setItems([...items, data]);
//   };



  return (
    <div>
        
      {/* Button to trigger handleClick */}
      {/* <button onClick={() => handleClick()}>
        Add Item to Cart
      </button> */}
      {/* Display items in the cart */}
      <div>
        
        
          
           <div>
                         {items.map((item, index) => (
                        <div className='flex gap-2 font-medium'>
                           <h5 className=''> {item.recipe_name}</h5>
                           <h5> {item.preparing_time}</h5>
                           <h5> {item.calories}</h5>
                           
                        </div>
          ))}
        
      </div> 
    </div>

    // <div>
    //     <div>
    //              {items.map((item, index) => (
    //              <div className='flex gap-2 font-medium'>
    //                 <h5 className=''> {item.recipe_name}</h5>
    //                 <h5> {item.preparing_time}</h5>
    //                 <h5> {item.calories}</h5>
                    
    //              </div>
    //              ))}
    //           </div>
    // </div>
  );
};

export default CurrentCooking;
