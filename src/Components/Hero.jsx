import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="carousel w-full h-[450px]">

      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://d28ht6kztpdvka.cloudfront.net/media/productthumbnails/78/3D-Burger-Model-2.jpeg"
          className="w-full object-cover"
        />

        <div className="absolute flex flex-col items-center justify-center text-center text-white bg-black/50 w-full h-full">
          <h1 className="text-4xl font-bold mb-3">
            Discover Local Food
          </h1>
          <p className="mb-4">
            Explore amazing street food and restaurants near you
          </p>

          <Link to="/revies">
            <button className="btn text-white rounded-full bg-linear-to-r from-pink-500 to-red-600">Explore Foods Reviews</button>
          </Link>
        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://d28ht6kztpdvka.cloudfront.net/media/productthumbnails/122/Pizza_2.jpeg"
          className="w-full object-cover"
        />

        <div className="absolute flex flex-col items-center justify-center text-center text-white bg-black/50 w-full h-full">
          <h1 className="text-4xl font-bold mb-3">
            Share Your Food Experience
          </h1>
          <p className="mb-4">
            Post reviews and photos of your favorite meals
          </p>

          <Link to="/addreviews">
            <button className="btn text-white rounded-full bg-linear-to-r from-pink-500 to-red-600">Add Review</button>
          </Link>
        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Slide 3 */}
      
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://d28ht6kztpdvka.cloudfront.net/media/productthumbnails/163/Burrito_3D_Model_Capture_1.jpeg"
          className="w-full object-cover"
        />

        <div className="absolute flex flex-col items-center justify-center text-center text-white bg-black/50 w-full h-full">
          <h1 className="text-4xl font-bold mb-3">
            Join Food Lovers Community
          </h1>
          <p className="mb-4">
            Connect with people who love food like you
          </p>

          <Link to="/auth/register">
            <button className="btn text-white rounded-full bg-linear-to-r from-pink-500 to-red-600">Join Now</button>
          </Link>
        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>

    </div>
  );
};

export default Hero;