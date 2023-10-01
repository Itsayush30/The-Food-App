const Contact = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold text-center mb-8">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Customer Support</h2>
            <p className="text-gray-600">
              Have any questions, issues, or feedback? Our customer support team
              is here to help you.
            </p>
            <p className="text-gray-600">
              Email:{" "}
              <a href="mailto:support@example.com">itsayush@gmail.com</a>
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Form</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2" htmlFor="name">
                  Your Name
                </label>
                <input
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Ayush Gupta"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="itsayush@gmail.com"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500"
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
