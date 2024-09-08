// src/AboutUs.js


const AboutUs = () => {
  return (
    <section  id = "about" className="bg-gray-100 py-12 lg:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text Section */}
          <div className="lg:w-1/2 lg:pr-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-gray-700 mb-4">
              Welcome to [Your Company Name], where we are dedicated to delivering high-quality products and exceptional customer service. Our team of experts is passionate about what they do, and we strive to exceed expectations with every project we undertake. 
            </p>
            <p className="text-gray-700 mb-4">
              With years of experience in the industry, we have built a reputation for reliability and innovation. Whether youre looking for [specific products/services], we are here to help you achieve your goals.
            </p>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Contact Details</h3>
              <p className="text-gray-700 mb-1"><strong>Phone:</strong> (123) 456-7890</p>
              <p className="text-gray-700 mb-1"><strong>Email:</strong> info@yourcompany.com</p>
              <p className="text-gray-700 mb-1"><strong>Address:</strong> 1234 Main Street, Anytown, ST 12345</p>
            </div>
          </div>
          {/* Image Section */}
          <div className="lg:w-1/2 lg:pl-12 mt-8 lg:mt-0">
            <img
              src="https://via.placeholder.com/600x400"
              alt="About Us"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
