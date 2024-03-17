

const SingleCooking = ({cooking, handleCart}) => {
    console.log(cooking);
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={cooking.recipe_image} alt="Shoes" /></figure>
            <div className="card-body">
            <h2 className="text-2xl font-medium">{cooking.recipe_name}</h2>
            <p>{cooking.short_description}</p>
<hr />
    <div className='space-y-3'>
        <h4 className='font-semibold'>Ingredients: 6</h4>
        <ul>
          <li> {cooking.ingredients[0] }</li>
          <li>  {cooking.ingredients[1] }</li>
          <li> {cooking.ingredients[2] }</li>
        </ul>
    </div>
    <hr />
    <div className='flex justify-around'>
      <p><span>{cooking.preparing_time}</span></p>
      <p><span>{cooking.calories}</span> </p>
    </div>
    <div className="card-actions ">

      <button onClick={()=>handleCart(cooking)} className="btn btn-primary">Want to Cook</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default SingleCooking;