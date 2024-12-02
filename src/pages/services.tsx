import Image from "next/image";
import Footer from "./Component/Footer";
import Navbar from "./Component/NavBar";

export default function Projects() {
  return (
    <div className="relative">
      <div className="relative w-full h-[50vh]">
        <Image
          src="/serv-img.png"
          alt="services image"
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
            SERVICE DEWaS
          </h1>
        </div>
      </div>
      <section className="container mx-auto pt-10 px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Card 1 */}
          <div className="relative">
            <Image
              src="/serv1.png"
              alt="project Image"
              width={2000}
              height={1000}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="flex items-center">
            <div className="p-6 md:p-10 lg:p-16 text-center md:text-left mt-4 md:mt-6">
              {" "}
              {/* Tambahkan margin atas */}
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                Emergency Reporting
              </h3>
              <p className="text-sm md:text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center">
            <div className="p-6 md:p-10 lg:p-16 text-center md:text-right mt-4 md:mt-6">
              {" "}
              {/* Tambahkan margin atas */}
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                Emergency Reporting
              </h3>
              <p className="text-sm md:text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/serv2.png"
              alt="project Image"
              width={2000}
              height={1000}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Card 3 */}
          <div className="relative">
            <Image
              src="/serv3.png"
              alt="project Image"
              width={2000}
              height={1000}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="flex items-center">
            <div className="p-6 md:p-10 lg:p-16 text-center md:text-left mt-4 md:mt-6">
              {" "}
              {/* Tambahkan margin atas */}
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                Emergency Reporting
              </h3>
              <p className="text-sm md:text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
