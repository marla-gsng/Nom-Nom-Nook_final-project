import heroImage from "../assets/images/FP-hero-op1.jpeg";
import "../App.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__container">
        <img src={heroImage} alt="Delicious Food" className="hero__img" />

        <div className="middle-section bg-orange-200 bg-opacity-75 p-6 rounded-lg">
          <h1 className="hero__title text-black">Let's get cooking...</h1>
          <p className="hero__description text-lg text-bold text-indigo-600">
            Get inspired by our recipes and start your cooking journey now!
          </p>
          <input
            style={{ display: "flex", alignItems: "center" }}
            type="text"
            placeholder="Search recipes..."
            className="hero__search-bar text-lg p-2 rounded-xl w-full mt-4 h-16"
          />
          <button className="bg-indigo-600 text-white font-bold py-2 px-4 rounded mt-4 hover:bg-indigo-700">
            <i className="fas fa-search">Find</i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
