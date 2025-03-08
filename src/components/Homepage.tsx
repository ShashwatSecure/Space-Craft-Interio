import Image from "next/image"
import Link from "next/link"
import HomePageSection from "./HomePageSection"

const Homepage = () => {
    return (
        <div className="homepage px-4 md:px-8 lg:px-12">
            {/* Home Interiors Made Easy Section */}
            <HomePageSection
                key={1}
                title="Home Interiors Made Easy"
                description="You book a consultation, get guided by one of the 400+
                    top-notch interior designers, and we take care of the rest,
                    from start to finish. We have done it for more than 10,000
                    homes already."
                cards={[
                    {
                        imageUrl:
                            "https://res.cloudinary.com/dj59omo7m/image/upload/v1739875324/book-appointment-with-best-interior-designers-340x340_jxwgm9.jpg",
                        title: "01 Book an appointment",
                    },
                    {
                        imageUrl:
                            "https://res.cloudinary.com/dj59omo7m/image/upload/v1739875324/meet-best-interior-designers-near-me-340x340_frcjli.jpg",
                        title: "02 Meet Our Designers",
                    },
                    {
                        imageUrl:
                            "https://res.cloudinary.com/dj59omo7m/image/upload/v1739875325/personalised-interior-designs-by-top-interior-designers-340x340_dkkbm5.jpg",
                        title: "03 Personalize your designs",
                    },
                    {
                        imageUrl:
                            "https://res.cloudinary.com/dj59omo7m/image/upload/v1739875324/best-interiors-delivered-mumbai-bangalore-hyderabad-340x340-1_aqisxt.webp",
                        title: "04 Move in",
                    },
                ]}
                cta="Get Started Now!"
            />

            {/* Home Interior Section */}
            <HomePageSection
                key={4}
                title="Home Interior Designs"
                cards={[
                    {
                        imageUrl:
                            "https://res.cloudinary.com/dj59omo7m/image/upload/v1739876741/home-show_tmuu8b.jpg",
                        title: "A Modern 3BHK Flat",
                    },
                    {
                        imageUrl:
                            "https://res.cloudinary.com/dj59omo7m/image/upload/v1739877692/3bhk_ubjybe.jpg",
                        title: "A Modern 2BHK Flat",
                    },
                ]}
            />

            {/* Browse Our Popular Designs Section */}
            <HomePageSection
                key={2}
                title="Browse Our Popular Designs"
                description="Explore handpicked interior designs crafted by top experts."
                cards={[
                    {
                        title: "Modern 3BHK Flat",
                        imageUrl:
                            "https://res.cloudinary.com/dj59omo7m/image/upload/v1739865350/dining-room-interior-design-for-modern-3-bhk-flat-bangalore_xu6rrg.jpg",
                        description:
                            "Sleek and stylish interiors with contemporary elements.",
                    },
                    {
                        title: "Luxury Living Room",
                        imageUrl:
                            "https://res.cloudinary.com/dj59omo7m/image/upload/v1739873015/industrial-style-living-room-interior-with-furniture-sofa_uxllhr.jpg",
                        description:
                            "A spacious living area with elegant décor.",
                    },
                    {
                        title: "Minimalist Bedroom",
                        imageUrl:
                            "https://res.cloudinary.com/dj59omo7m/image/upload/v1739867555/compact-bedroom-design-comes-with-queen-size_qkvgfw.jpg",
                        description:
                            "A cozy yet modern bedroom with minimal design.",
                    },
                    {
                        title: "Classic Wooden Kitchen",
                        imageUrl:
                            "https://res.cloudinary.com/dj59omo7m/image/upload/v1739872510/l-shaped-modualr-kitchen-with-marble-and-wood-makes-modern-kitchen-design_ane2oz.jpg",
                        description:
                            "A warm and inviting kitchen with wooden finishes.",
                    },
                ]}
            />
            {/* Portfolio Section */}
            <HomePageSection
                key={3}
                title="Our Projects"
                cards={[
                    {
                        imageUrl:
                            "https://res.cloudinary.com/dj59omo7m/image/upload/v1740475085/KP_aryynd.png",
                        title: "Project for Kanchan Paul",
                        description:
                            "A stunning transformation with elegant decor and cozy ambiance.",
                    },
                    {
                        imageUrl:
                            "https://res.cloudinary.com/dj59omo7m/image/upload/v1740473705/AC1_go2arx.jpg",
                        title: "Project for Dr. Ashwariya Choudhry",
                        description:
                            "A sleek and functional kitchen space designed for modern homes.",
                    },
                    {
                        imageUrl:
                            "https://res.cloudinary.com/dj59omo7m/image/upload/v1740475273/NM_fxjzu1.png",
                        title: "Project for Niraj Mishra",
                        description:
                            "A serene and stylish bedroom with premium furnishing and lighting.",
                    },
                ]}
            />

            {/* Testimonials Section */}
            <section className="testimonials mt-16">
                <h2 className="text-3xl font-semibold text-center text-gray-900">
                    What Our Clients Say
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    {[
                        {
                            id: 1,
                            name: "Kanchan Paul",
                            review: "The renovation and furnishing work exceeded my expectations! My home feels brand new, and every detail was taken care of with perfection. Highly recommended!",
                        },
                        {
                            id: 2,
                            name: "Dr. Aishwarya Choudhry",
                            review: "The interior work was top-notch! From design to execution, everything was handled meticulously, and my home now reflects elegance and comfort. Thank you for the amazing work!",
                        },
                        {
                            id: 3,
                            name: "Murli Mishra",
                            review: "Highly professional service with outstanding results. My home has been beautifully furnished and renovated beyond my imagination. Thank you for the hard work!",
                        },
                        {
                            id: 4,
                            name: "Rashid Ahmad",
                            review: "The transformation of my home is incredible! The renovation work was done with precision, and the interiors now have a luxurious feel. Great job by the team!",
                        },
                    ].map((review) => (
                        <div
                            key={review.id}
                            className="bg-gray-100 p-6 rounded-lg shadow-lg relative"
                        >
                            <p className="text-gray-700 italic mb-4">
                                &quot;{review.review}&quot;
                            </p>
                            <p className="absolute bottom-4 left-4 font-semibold text-gray-900">
                                - {review.name}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-6 mb-4">
                    <Link
                        href="/customer-reviews"
                        className="text-green-600 font-semibold hover:underline"
                    >
                        View all reviews
                    </Link>
                </div>
            </section>
            
        </div>
    )
}

export default Homepage
