import React, { useEffect, useRef, useState } from "react";
import Image from "../assets/img/house-banner.png";
import Search from "../components/Search";

const Banner = () => {
  const [isVisible, setIsVisible] = useState({ title: false, image: false });
  const titleRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const titleElement = titleRef.current;
    const imageElement = imageRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({ ...prev, title: true }));
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.1 }
    );

    const imageObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({ ...prev, image: true }));
          imageObserver.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.1 }
    );

    if (titleElement) {
      observer.observe(titleElement);
    }

    if (imageElement) {
      imageObserver.observe(imageElement);
    }

    return () => {
      if (titleElement) {
        observer.unobserve(titleElement);
      }
      if (imageElement) {
        imageObserver.unobserve(imageElement);
      }
    };
  }, []);

  return (
    <section className="h-full max-h-[640px] mb-8 xl:mb-24">
      <div className="flex flex-col lg:flex-row">
        <div
          ref={titleRef}
          className={`lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0 transition-opacity duration-700 ${
            isVisible.title ? "animate-slide-bottom" : "opacity-0"
          }`}
        >
          <h1 className="text-4xl lg:text-[58px] font-semibold leading-none mb-6">
            <span className="text-violet-700">Rent</span> Your Dream House With Us.
          </h1>
          <p className="max-w-[440px] mb-8">
            Discover the most beautiful houses in the world. We have a wide range of properties
            available for rent.
          </p>
        </div>
        <div
          ref={imageRef}
          className={`hidden flex-1 lg:flex justify-end items-end transition-opacity duration-700 ${
            isVisible.image ? "animate-zoom-in" : "opacity-0"
          }`}
        >
          <img src={Image} alt="Banner" />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
