import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="p-10 bg-gradient-to-br from-white via-orange-50 to-yellow-50 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl p-10 border border-[#FEA116]/30">
        <h1 className="text-5xl font-extrabold text-[#FEA116] text-center mb-6">
          About FoodFusion 🍽️
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-6 text-center">
          Welcome to{" "}
          <span className="font-semibold text-[#FEA116]">FoodFusion</span>, your
          go-to destination for discovering amazing food, connecting with local
          restaurants, and enjoying seamless food ordering experiences. Our goal
          is simple — to bring joy to your plate with every click.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {/* Our Mission */}
          <div>
            <h2 className="text-2xl font-bold text-[#FEA116] mb-3">
              🚀 Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We're passionate about making food discovery effortless and
              delightful. Whether you're searching for your favorite dish or
              exploring something new, FoodFusion helps you find it quickly and
              enjoyably.
            </p>
          </div>

          {/* Our Vision */}
          <div>
            <h2 className="text-2xl font-bold text-[#FEA116] mb-3">
              🌟 Our Vision
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To become the most loved food tech platform where people don’t
              just order food, but experience cultures, cuisines, and creativity
              — all from one place.
            </p>
          </div>

          {/* What We Offer */}
          <div>
            <h2 className="text-2xl font-bold text-[#FEA116] mb-3">
              🍱 What We Offer
            </h2>
            <ul className="list-disc pl-5 text-gray-600 leading-relaxed space-y-2">
              <li>Curated restaurant listings based on cuisine and ratings</li>
              <li>Easy-to-use interface for smooth browsing & ordering</li>
              <li>Real-time offers, deals & delivery tracking</li>
              <li>Mobile-first experience with lightning-fast performance</li>
            </ul>
          </div>

          {/* The Journey */}
          <div>
            <h2 className="text-2xl font-bold text-[#FEA116] mb-3">
              👨‍💻 The Journey
            </h2>
            <p className="text-gray-600 leading-relaxed">
              This website is part of a React learning project, and today marks
              the
              <span className="font-semibold text-[#FEA116]"> 20th day </span>
              of building and experimenting with frontend development. Every
              component here is crafted with passion, curiosity, and a hunger to
              learn more!
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-xl font-semibold text-[#FEA116] mb-2">
            Ready to Taste the Fusion?
          </h3>
          <Link to="/">
            <button className="px-6 py-3 bg-[#FEA116] text-white rounded-full font-semibold hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-[#FEA116]/50 transition-all">
              Explore Restaurants 🍕
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
