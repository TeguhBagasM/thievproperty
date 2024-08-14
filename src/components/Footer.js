import React, { useEffect, useRef, useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    const currentRef = ref.current; // Save ref.current to a variable

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Use the saved variable
      }
    };
  }, []);

  return (
    <footer
      ref={ref}
      className={`bg-gray-900 text-white py-10 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-5">
        <div>
          <h2 className="text-2xl font-bold mb-4">MyProperty</h2>
          <p className="text-gray-400">
            MyProperty adalah platform pencarian properti terbaik di Indonesia, memberikan kemudahan
            dalam menemukan properti impian Anda.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2">
              <a href="/" className="text-gray-400 hover:text-white">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="/about" className="text-gray-400 hover:text-white">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="/properties" className="text-gray-400 hover:text-white">
                Properties
              </a>
            </li>
            <li className="mb-2">
              <a href="/contact" className="text-gray-400 hover:text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition"
            >
              <FaFacebookF className="text-white" />
            </a>
            <a
              href="https://twitter.com"
              className="bg-blue-400 p-3 rounded-full hover:bg-blue-500 transition"
            >
              <FaTwitter className="text-white" />
            </a>
            <a
              href="https://instagram.com"
              className="bg-pink-600 p-3 rounded-full hover:bg-pink-700 transition"
            >
              <FaInstagram className="text-white" />
            </a>
            <a
              href="https://linkedin.com"
              className="bg-blue-800 p-3 rounded-full hover:bg-blue-900 transition"
            >
              <FaLinkedinIn className="text-white" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-800 pt-4 text-center text-gray-500">
        &copy; {new Date().getFullYear()} MyProperty. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
