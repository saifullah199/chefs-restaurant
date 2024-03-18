

const Cart = ({cart,handlePeoparing}) => {
    return (
        <div>
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
                      <button onClick={()=> handlePeoparing(item.recipe_id)} className='btn btn-accent rounded-full'>Preparing</button>
                    </div>
                  ))
                }
              </div>
          
          </div>
        </div>
    );
};

export default Cart;