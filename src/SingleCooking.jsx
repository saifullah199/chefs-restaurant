

const SingleCooking = () => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src="https://i.ibb.co/n0S4knX/top-view-baked-pizza-sliced-with-seasonings-white.jpg" alt="Shoes" /></figure>
            <div className="card-body">
            <h2 className="card-title">Spaghetti Bolognese</h2>
            <p>Classic Italian pasta dish with savory meat 
sauce.</p>
<hr />
    <div className='space-y-3'>
        <h4 className='font-semibold'>Ingredients: 6</h4>
        <ul>
          <li> 500g ground beef</li>
          <li>  1 onion, choppe</li>
          <li> 2 cloves garlic, minced</li>
        </ul>
    </div>
    <hr />
    <div className='flex justify-around'>
      <p><span>30</span>minutes</p>
      <p><span>600</span> calories</p>
    </div>
    <div className="card-actions ">

      <button className="btn btn-primary">Want to Cook</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default SingleCooking;