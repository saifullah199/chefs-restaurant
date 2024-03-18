

const CurrentCooking = ({items,}) => {
  return (
    <div>

            <div>
                <h3 className='font-medium'>Currently cooking <span> </span> </h3>
                <hr />

                <div className='flex gap-16 font-medium'>
                  <p>Name</p>
                  <p>Time</p>
                  <p>Calories</p>
                </div>
            </div>

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
  );
};

export default CurrentCooking;