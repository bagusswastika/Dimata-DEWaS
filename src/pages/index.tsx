import Image from "next/image";
import Footer from "./Component/Footer";
import Navbar from "./Component/NavBar";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/new-nav.png')" }}
      >
        <div className="absolute top-0 left-0 right-0 z-20">
          <Navbar />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-6xl font-bold mb-4">
              Digital Emergency <br /> Warning System
            </h1>
            <p className="text-2xl mb-6 averia-italic">
              “Reporting, Resolving, and Updating Emergencies with Ease”
            </p>
            <a
              href="#consultation"
              className="bg-gray-500 text-white py-3 px-6 rounded-lg hover:bg-gray-600 transition"
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      </header>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-md flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <Image
              src="/about.png"
              alt="about image"
              width={500}
              height={300}
              className="rounded-md"
            />
          </div>
          <div className="md:w-1/2 md:pl-6 mt-4 md:mt-0 ml-20">
            <h2 className="text-[2em] font-bold text-gray-800">About DEWaS</h2>
            <p className="mt-4 text-gray-600">
              The mobile app is designed for the general public and will be used
              by a lot of people. In this app, users can report emergencies
              based on what they've experienced. They can also report
              emergencies taht have already been handle, and if thet fell
              there's a need to change any information, they can update their
              profiles as well. Here are some of the app's benefits.
            </p>
            <button className="mt-6 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700">
              <Link href="/about">Read More</Link>
            </button>
          </div>
        </div>
      </div>
      <section className="bg-gray-100 py-12">
        <div className="max-w-5xl mx-auto px-4">
          {/* Header Section */}
          <div className="flex items-start justify-between mb-6">
            <div className="text-start">
              <h2 className="text-3xl font-bold">Why Choose DEWaS?</h2>
            </div>
            <div className="text-gray-600 mt-1 text-end max-w-lg">
              Experience our unmatched expertise and dedication to delivering
              exceptional results, tailored to meet your unique needs.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-full -mb-36 ">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <Image
                  src="/Vector.png"
                  alt="Icon Light"
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="font-semibold text-xl mb-2">Integration</h3>
              <p className="text-gray-600">
                Prochain provides data and information that flows to all parts
                of the company quickly and accurately.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <Image
                  src="/Vector.png"
                  alt="Icon Light"
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="font-semibold text-xl mb-2">User Friendly</h3>
              <p className="text-gray-600">
                Prochain makes it easy for users to operate the Prochain system.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <Image
                  src="/Vector.png"
                  alt="Icon Light"
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="font-semibold text-xl mb-2">Data Security</h3>
              <p className="text-gray-600">
                The proven data security of the Prochain system ensures that
                company data remains safe.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <Image
                  src="/Vector.png"
                  alt="Icon Light"
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="font-semibold text-xl mb-2">24 / 7 Support</h3>
              <p className="text-gray-600">
                24 hours x 7 days support from the Dimata team guarantees the
                use of the Prochain system with high reliability.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-row gap-16 m-28 pt-24">
        <div className="w-1/2 flex items-center justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.846030212877!2d115.23796897589622!3d-8.706167791342807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd241bfead42cb1%3A0x24c6e2d6d2d87689!2sDimata%20IT%20and%20Software!5e0!3m2!1sid!2sid!4v1730960400785!5m2!1sid!2sid"
            width="400"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="max-w-3xl place-content-center w-1/2 p-6">
          <hr className="w-20 mb-2 h-1 bg-gray-700" />
          <p className="text-gray-700 text-2xl">OUR OFFICE</p>
          <br />
          <p>
            A space built to drive progress and foster creativity. Our modern,
            tech-forward office reflects our commitment to cutting-edge
            solutions and provides the ideal environment for innovation and
            collaboration.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
