import React from "react";
import Image from "next/image";

const Homepage = () => {
  return (
    <div className="homepage px-4 md:px-8 lg:px-12">

      {/* Home Interiors Made Easy Section */}
      <section className="mt-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Home Interiors Made Easy</h2>
        <p className="text-lg text-gray-600 mt-2">
          You book a consultation, get guided by one of the 400+ top-notch interior designers,
          and we take care of the rest, from start to finish. We have done it for more than 10,000 homes already.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md">
            <Image
              src="https://res.cloudinary.com/dj59omo7m/image/upload/v1739875324/book-appointment-with-best-interior-designers-340x340_jxwgm9.jpg"
              alt="Book an appointment"
              width={200}
              height={150}
              className="rounded-lg"
            />
            <p className="text-lg font-semibold mt-2">01 Book an appointment</p>
          </div>

          <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md">
  <Image
    src="https://res.cloudinary.com/dj59omo7m/image/upload/v1739875324/meet-best-interior-designers-near-me-340x340_frcjli.jpg"
    alt="Meet our designers"
    width={200}
    height={150}
    className="rounded-lg"
  />
  <p className="text-lg font-semibold mt-2">02 Meet our designers</p>
</div>

<div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md">
  <Image
    src="https://res.cloudinary.com/dj59omo7m/image/upload/v1739875325/personalised-interior-designs-by-top-interior-designers-340x340_dkkbm5.jpg"
    alt="Personalize your designs"
    width={200}
    height={150}
    className="rounded-lg"
  />
  <p className="text-lg font-semibold mt-2">03 Personalize your designs</p>
</div>

<div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md">
  <Image
    src="https://res.cloudinary.com/dj59omo7m/image/upload/v1739875324/best-interiors-delivered-mumbai-bangalore-hyderabad-340x340-1_aqisxt.webp"
    alt="Move in"
    width={200}
    height={150}
    className="rounded-lg"
  />
  <p className="text-lg font-semibold mt-2">04 Move in</p>
</div>

        </div>

        <div className="flex justify-center mt-6">
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-teal-600 transition">
            Get Started Now
          </button>
        </div>
      </section>

      {/* Home Interior Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-center text-gray-900">Home Interior Designs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
  <div className="relative">
    <Image
      src="https://res.cloudinary.com/dj59omo7m/image/upload/v1739876741/home-show_tmuu8b.jpg"
      alt="A Modern 3BHK Flat"
      className="rounded-lg shadow-lg w-full h-64 object-cover"
    />
    
  </div>
  <div className="relative">
    <Image
      src="https://res.cloudinary.com/dj59omo7m/image/upload/v1739877692/3bhk_ubjybe.jpg"
      alt="Ritesh Tiwari’s 3BHK Home"
      className="rounded-lg shadow-lg w-full h-64 object-cover"
    />
    
  </div>
</div>

      </section>

      {/* Browse Our Popular Designs Section */}
      <section className="popular-designs mt-16">
        <h2 className="text-3xl font-semibold text-center text-gray-900">Browse Our Popular Designs</h2>
        <p className="text-center text-gray-600 mt-2">
          Explore handpicked interior designs crafted by top experts.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
  {[
    { id: 1, title: "Modern 3BHK Flat", image: "https://res.cloudinary.com/dj59omo7m/image/upload/v1739865350/dining-room-interior-design-for-modern-3-bhk-flat-bangalore_xu6rrg.jpg", description: "Sleek and stylish interiors with contemporary elements." },
    { id: 2, title: "Luxury Living Room", image: "https://res.cloudinary.com/dj59omo7m/image/upload/v1739873015/industrial-style-living-room-interior-with-furniture-sofa_uxllhr.jpg", description: "A spacious living area with elegant décor." },
    { id: 3, title: "Minimalist Bedroom", image: "https://res.cloudinary.com/dj59omo7m/image/upload/v1739867555/compact-bedroom-design-comes-with-queen-size_qkvgfw.jpg", description: "A cozy yet modern bedroom with minimal design." },
    { id: 4, title: "Classic Wooden Kitchen", image: "https://res.cloudinary.com/dj59omo7m/image/upload/v1739872510/l-shaped-modualr-kitchen-with-marble-and-wood-makes-modern-kitchen-design_ane2oz.jpg", description: "A warm and inviting kitchen with wooden finishes." }
  ].map((design) => (
    <div key={design.id} className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col items-center">
      <Image src={design.image} alt={design.title} width={300} height={200} className="rounded-lg object-cover" />
      <h3 className="text-lg font-semibold mt-2 text-center">{design.title}</h3>
      <p className="text-gray-600 text-sm mt-1 text-center">{design.description}</p>
    </div>
  ))}
</div>


      </section>

      {/* Portfolio Section */}
      <section className="portfolio mt-16">
        <h2 className="text-3xl font-semibold text-center text-gray-900">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <Image src="/project1.jpg" alt="Project 1" width={400} height={300} className="rounded-lg shadow-lg" />
          <Image src="/project2.jpg" alt="Project 2" width={400} height={300} className="rounded-lg shadow-lg" />
          <Image src="/project3.jpg" alt="Project 3" width={400} height={300} className="rounded-lg shadow-lg" />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials mt-16">
        <h2 className="text-3xl font-semibold text-center text-gray-900">What Our Clients Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {[
            { id: 1, name: "Amit Sharma", review: "Absolutely stunning designs that transformed our space!" },
            { id: 2, name: "Neha Verma", review: "Great attention to detail and professional service. Highly recommended!" },
            { id: 3, name: "Rahul Mehta", review: "The best interior design experience! My home looks amazing now." },
            { id: 4, name: "Priya Kapoor", review: "Elegant and stylish designs that perfectly matched our taste!" }
          ].map((review) => (
            <div key={review.id} className="bg-gray-100 p-6 rounded-lg shadow-lg relative">
              <p className="text-gray-700 italic mb-4">&quot;{review.review}&quot;</p>
              <p className="absolute bottom-4 left-4 font-semibold text-gray-900">- {review.name}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-6 mb-4">
          <a href="#" className="text-green-600 font-semibold hover:underline">View all reviews</a>
        </div>
      </section>
      <section className="blogs mt-16">
        <h2 className="text-3xl font-semibold text-center text-gray-900">Get Design Ideas on Our Blogs</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Left Side - Featured Blog */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <Image src="/blog-featured.jpg" alt="Featured Blog" width={600} height={350} className="rounded-lg" />
            <h3 className="text-xl font-semibold text-gray-900 mt-4">10 Stunning Interior Design Ideas for 2025</h3>
            <p className="text-gray-700 mt-2">
              Discover the latest interior design trends that will elevate your space in 2025. From modern minimalism to vibrant aesthetics...
            </p>
            <a href="#" className="text-green-600 font-semibold mt-2 inline-block hover:underline">Read More</a>
          </div>

          {/* Right Side - Blog List */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            {[
              "How to Choose the Perfect Color Palette for Your Home",
              "5 Space-Saving Ideas for Small Apartments",
              "Luxury vs. Budget Interiors – What Should You Choose?",
              "Top 7 Lighting Trends to Brighten Your Home",
              "Eco-Friendly Interior Design Tips for a Sustainable Home"
            ].map((title, index) => (
              <div key={index} className="border-b border-gray-300 py-3">
                <a href="#" className="text-gray-900 font-semibold hover:text-green-600 transition">{title}</a>
              </div>
            ))}

            <div className="text-center mt-4">
              <a href="#" className="text-green-600 font-semibold hover:underline">View All Blogs</a>
            </div>
          </div>
        </div>
      </section>

    </div>



  );
};

export default Homepage;
