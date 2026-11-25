"use client";
import { useState, useEffect } from "react";

const reviews = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Son (Lives in Bangalore)",
    text: "Since I live far away, I was always worried about my father in Delhi. The Family Dashboard and the 'I am fine' check-in give me peace of mind every day. The verified helper network is a lifesaver.",
    rating: 5,
    initial: "R"
  },
  {
    id: 2,
    name: "Sunita Devi",
    role: "Senior Citizen (Delhi)",
    text: "The interface is very easy to use. I don't know much about apps, but I can easily press the 'Order Medicine' button or use the Voice Assistant. The local helpers are very polite and fast.",
    rating: 5,
    initial: "S"
  },
  {
    id: 3,
    name: "Dr. Anil Gupta",
    role: "Partner Doctor",
    text: "Being able to see my elderly patients' medicine history and routine directly on the dashboard helps me give better advice. THE BLUE POINT is truly bridging the gap between healthcare and home.",
    rating: 4,
    initial: "A"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 4000); // Har 4 second mein slide hoga
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-card border-t border-border py-24 px-4 overflow-hidden relative">
      
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1000px] mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-text mb-4">Trusted by Families</h2>
          <p className="text-lg text-text/60">Here is what our users have to say about THE BLUE POINT.</p>
        </div>

        {/* Carousel Container */}
        <div className="relative h-[300px] md:h-[250px] flex items-center justify-center">
          
          {reviews.map((review, index) => {
            // Sirf current, previous aur next card ko style karenge
            const isActive = index === currentIndex;
            const isPrev = index === (currentIndex - 1 + reviews.length) % reviews.length;
            const isNext = index === (currentIndex + 1) % reviews.length;

            // Un cards ko hide karenge jo active, prev ya next nahi hain
            if (!isActive && !isPrev && !isNext) return null;

            return (
              <div 
                key={review.id}
                className={`absolute transition-all duration-700 ease-in-out bg-bg border border-border p-8 rounded-3xl shadow-xl flex flex-col items-center text-center
                  ${isActive ? "w-[90%] md:w-[600px] z-20 scale-100 opacity-100 translate-x-0" : ""}
                  ${isPrev ? "w-[80%] md:w-[500px] z-10 opacity-40 -translate-x-[20%] md:-translate-x-[50%] scale-90 cursor-pointer" : ""}
                  ${isNext ? "w-[80%] md:w-[500px] z-10 opacity-40 translate-x-[20%] md:translate-x-[50%] scale-90 cursor-pointer" : ""}
                `}
                onClick={() => setCurrentIndex(index)}
              >
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-xl ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`}>
                      ★
                    </span>
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-lg md:text-xl text-text/80 italic mb-6 leading-relaxed line-clamp-3">
                  "{review.text}"
                </p>

                {/* User Info */}
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 bg-primary/20 text-primary font-bold text-xl rounded-full flex items-center justify-center">
                    {review.initial}
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-text">{review.name}</h4>
                    <p className="text-xs text-text/60">{review.role}</p>
                  </div>
                </div>
              </div>
            );
          })}

        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === currentIndex ? "bg-primary w-8" : "bg-primary/20 hover:bg-primary/40"
              }`}
              aria-label={`Go to review ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
