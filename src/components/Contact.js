const Contact = () => {
  return (
    <div className="p-10 bg-gradient-to-br from-white via-orange-50 to-yellow-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl p-10 border border-[#FEA116]/30">
        <h1 className="text-5xl font-extrabold text-[#FEA116] text-center mb-6">
          Contact Us 📞
        </h1>

        <p className="text-gray-700 text-lg text-center mb-10">
          Have a question, suggestion, or just want to say hello?
          We’d love to hear from you!
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="col-span-2 md:col-span-1">
            <label className="block text-gray-700 font-semibold mb-2">Name</label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-[#FEA116]/50"
            />
          </div>

          {/* Email */}
          <div className="col-span-2 md:col-span-1">
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-[#FEA116]/50"
            />
          </div>

          {/* Subject */}
          <div className="col-span-2">
            <label className="block text-gray-700 font-semibold mb-2">Subject</label>
            <input
              type="text"
              placeholder="What’s this about?"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-[#FEA116]/50"
            />
          </div>

          {/* Message */}
          <div className="col-span-2">
            <label className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message here..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-4 focus:ring-[#FEA116]/50"
            ></textarea>
          </div>

          {/* Button */}
          <div className="col-span-2 text-center mt-4">
            <button
              type="submit"
              className="px-8 py-3 bg-[#FEA116] text-white rounded-full font-semibold hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-[#FEA116]/50 transition-all"
            >
              Send Message ✉️
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
