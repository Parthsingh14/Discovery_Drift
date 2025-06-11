import { motion } from "framer-motion";
import { FaTaxi, FaStar, FaChevronRight } from "react-icons/fa";
import { RiHotelLine, RiCarLine } from "react-icons/ri";

import localCab from "../assets/swift.jpg";
import innovaCab from "../assets/ToyotoInnova.jpeg";
import deluxeCab from "../assets/Delux.jpeg";

import room1 from "../assets/1.jpeg";
import room2 from "../assets/2.jpeg";
import room3 from "../assets/3.jpeg";
import room4 from "../assets/4.jpeg";

const About = () => {
  const cabImages = {
    Local: localCab,
    Innova: innovaCab,
    Deluxe: deluxeCab,
  };

  const hotelRooms = [
    { name: "GK2", image: room4 },
    { name: "Nehru Place", image: room2 },
    { name: "Mahipalpur", image: room3 },
    { name: "Paharganj", image: room1 },
  ];

  return (
    <section id="about" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Title with decorative element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-8 h-0.5 bg-[#F7A62B] mr-3"></div>
            <span className="text-sm font-medium text-[#2BBED6] uppercase tracking-wider">
              Our Offerings
            </span>
            <div className="w-8 h-0.5 bg-[#F7A62B] ml-3"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1F3C5F]">
            Tailored <span className="text-[#F7A62B]">Travel</span> Solutions
          </h2>
        </motion.div>

        {/* Hotel Booking Section - Light Cards */}
        <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hotelRooms.map((room, index) => (
            <motion.div
              key={room.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src={room.image}
                  alt={`${room.name} Hotel`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F3C5F]/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block px-3 py-1 bg-[#F7A62B] text-white text-sm font-medium rounded-full">
                    {room.name}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h4 className="font-semibold text-lg text-[#1F3C5F] mb-2">
                  {room.name}
                </h4>
                <p className="text-gray-600 text-sm md:text-base mb-3">
                  Premium accommodations in {room.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Taxi Booking Section - Clean Design */}
        <div className="mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center mb-8"
          >
            <div className="p-3 rounded-lg bg-[#2BBED6]/10 text-[#2BBED6] mr-4">
              <RiCarLine className="text-2xl" />
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold text-[#1F3C5F]">
              Reliable Transport
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Local", "Innova", "Deluxe"].map((type, index) => (
              <motion.div
                key={type}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-lg transition-all duration-300"
              >
                {/* Cab Image with Gradient Overlay */}
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={cabImages[type]}
                    alt={`${type} Cab`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F3C5F]/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block px-3 py-1 bg-[#F7A62B] text-white text-sm font-medium rounded-full">
                      {type} Cab
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h4 className="font-semibold text-lg text-[#1F3C5F] mb-2">
                    {type} Cab Service
                  </h4>
                  <p className="text-gray-600 text-sm md:text-base mb-4">
                    {type === "Local"
                      ? "Affordable and efficient city transportation"
                      : type === "Innova"
                      ? "Spacious and comfortable for families"
                      : "Premium luxury travel experience"}
                  </p>
                  <div className="flex items-center text-[#2BBED6] group-hover:text-[#F7A62B] transition-colors">
                    <span className="text-xs font-medium tracking-wide">
                      VIEW DETAILS
                    </span>
                    <FaChevronRight className="ml-2 text-xs" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Brand Story Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#1F3C5F] to-[#2BBED6] rounded-2xl p-8 md:p-12 text-white overflow-hidden relative"
        >
          <div className="relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <div className="w-12 h-0.5 bg-[#F7A62B] mr-4"></div>
                <span className="text-sm font-medium tracking-widest text-[#F7A62B]">
                  OUR STORY
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                Redefining Travel Experiences
              </h2>

              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <p className="text-white/90 leading-relaxed text-base md:text-lg">
                    At Discovery Drift, we believe that the journey is just as
                    important as the destination. Founded on a passion for
                    authentic experiences, we create tailor-made adventures for
                    travelers who crave more than just sightseeing.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white/5 p-6 rounded-xl border border-white/10"
                >
                  <h3 className="text-xl font-semibold mb-4 text-[#F7A62B]">
                    Our Mission
                  </h3>
                  <p className="text-white/90 leading-relaxed text-base md:text-lg">
                    To inspire and empower curious travelers to explore the
                    world meaningfully. We craft each journey with care,
                    intention, and a touch of the unexpected.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold mb-4">Why Choose Us?</h3>
                  <ul className="space-y-4">
                    {[
                      "Personalized Itineraries – No two travelers are alike, and neither are our trips.",
                      "Local Insight – Authentic experiences through community partnerships.",
                      "24/7 Support – Dedicated assistance throughout your journey.",
                      "Passion for Discovery – Our team lives to explore.",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 mt-1 mr-3">
                          <FaStar className="text-[#F7A62B]" />
                        </div>
                        <span className="text-white/90 text-base md:text-lg">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
