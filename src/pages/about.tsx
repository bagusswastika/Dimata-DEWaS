import Image from "next/image";
import Footer from "./Component/Footer";
import Navbar from "./Component/NavBar";
import { useState, useEffect } from "react";

export default function About() {
  const features = [
    {
      title: "Emergency Reporting",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "/emergen.png",
    },
    {
      title: "Additional Media",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "/addtional.png",
    },
    {
      title: "Feedback Issue Reporting",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "/feedback.png",
    },
  ];

  const profile = [
    {
      name: "John Doe",
      potition: "director",
      image: "/jhon-doe.svg",
    },
    {
      name: "John Doe",
      potition: "director",
      image: "/jhon-doe.svg",
    },
    {
      name: "John Doe",
      potition: "director",
      image: "/jhon-doe.svg",
    },
    {
      name: "John Doe",
      potition: "director",
      image: "/jhon-doe.svg",
    },
    {
      name: "John Doe",
      potition: "director",
      image: "/jhon-doe.svg",
    },
    {
      name: "John Doe",
      potition: "director",
      image: "/jhon-doe.svg",
    },
    {
      name: "John Doe",
      potition: "director",
      image: "/jhon-doe.svg",
    },
    {
      name: "John Doe",
      potition: "director",
      image: "/jhon-doe.svg",
    },
    // Other profile items...
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleNext = () => {
    if (currentIndex < profile.length - 4) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="relative">
      <div className="relative w-full h-[50vh]">
        <Image
          src="/new-about.png"
          alt="about Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
          priority
        />
        <div className="absolute top-0 left-0 right-0 z-20">
          <Navbar />
        </div>
        <div className="absolute inset-0 z-10 flex justify-center items-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-semibold mt-10">
            ABOUT DEWaS
          </h1>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-4">
            Comprehensive Digital Emergency System
          </h2>
          <p className="text-gray-600 text-center max-w-full mx-auto mb-12">
            Dimata DEWaS offers comprehensive solutions to streamline business
            operations for various industries. Our expertise includes efficient
            inventory management, point-of-sale (POS) integration, and
            data-driven insights to support decision-making and operational
            efficiency.
          </p>
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center md:items-start px-64"
              >
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={300}
                  height={200}
                  className="shadow-md"
                />
                <div className="md:ml-6 mt-4 md:mt-0">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 max-w-2xl">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <div className="text-left m-48">
        <div className="flex justify-between">
          <div>
            <p className="text-4xl">
              <b>The Minds Behind Dimata DEWaS</b>
            </p>
            <br />
            <p>
              Dimata’s success is powered by a passionate team committed to
              innovation, collaboration, and delivering impactful solutions to
              our clients.
            </p>
            <br />
          </div>
          {isClient && (
            <div className="flex mt-4">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={`p-2 ${
                  currentIndex === 0 ? "opacity-50" : "opacity-100"
                }`}
              >
                <Image src="/prev.png" alt="prev" width={30} height={30} />
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex >= profile.length - 4}
                className={`p-2 ${
                  currentIndex >= profile.length - 4
                    ? "opacity-50"
                    : "opacity-100"
                }`}
              >
                <Image src="/next.png" alt="next" width={30} height={30} />
              </button>
            </div>
          )}
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 25}%)` }}
          >
            {profile.map((card, index) => (
              <div key={index} className="min-w-[25%] px-2">
                <Image
                  src={card.image}
                  alt={card.name}
                  width={350}
                  height={150}
                  className="w-full h-50 object-cover"
                />
                <p className="mt-4 font-bold text-lg text-center">
                  {card.name}
                </p>
                <p className="text-gray-600 text-center">{card.potition}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
