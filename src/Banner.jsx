

const Banner = () => {
    return (
        <div>
            <div className="hero h-[400px]" style={{backgroundImage: 'url(https://i.ibb.co/16zKZjF/high-angle-asian-food-ingredients-with-copy-space.jpg)' }} >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking <br />
                        class tailored for you!
                        </h1>
                    <p className="mb-5">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br />
                        problems to become an exceptionally well world-class Programmer.
                        </p>
                    <div className="">
                        <button className="btn btn-accent">Explore Now</button>
                        <button className="btn btn-outline ml-5 text-white">Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Banner;