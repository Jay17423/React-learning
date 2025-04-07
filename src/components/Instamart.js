import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black p-4 m-4 rounded-lg shadow-md bg-yellow-50">
      <h3 className="font-bold text-xl flex items-center gap-2">
        {title}
        <button
          className="text-blue-600 underline ml-auto"
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? "Hide" : "Show"}
        </button>
      </h3>
      {isVisible && <p className="mt-2 text-gray-700">{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("about");

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-extrabold text-center text-orange-600 mb-6">
        🛒 Instamart - Coming Soon! 🚀
      </h1>

      <p className="text-center text-gray-600 mb-6">
        We're working hard to bring Instamart to life. Check out what’s coming 👇
      </p>

      <Section
        title={"📦 About Instamart"}
        description={
          "Instamart is your ultra-fast online delivery partner for groceries, essentials, and much more! 🥦🥛🍞 Get ready for a smarter, faster shopping experience. We're gearing up to change the game!"
        }
        isVisible={visibleSection === "about"}
        setIsVisible={() =>
          setVisibleSection(visibleSection === "about" ? false : "about")
        }
      />

      <Section
        title={"👨‍💻 Meet the Instamart Team"}
        description={
          "Behind the scenes, we’ve got a superhero team of developers, designers, and dreamers! 💻🚀🧠 Together, we're building something epic just for you. Stay tuned!"
        }
        isVisible={visibleSection === "team"}
        setIsVisible={() =>
          setVisibleSection(visibleSection === "team" ? false : "team")
        }
      />

      <Section
        title={"🎯 Instamart Careers"}
        description={
          "Wanna join our squad? We're hiring soon! 🤝💼 Whether you're into coding, marketing, or ops — there's a place for you at Instamart. Let’s build the future together!"
        }
        isVisible={visibleSection === "career"}
        setIsVisible={() =>
          setVisibleSection(visibleSection === "career" ? false : "career")
        }
      />
    </div>
  );
};

export default Instamart;
