"use client";
import Image from "next/image";
import Portfolio from "./components/portfolio";
import Footer from "./components/footer";
import Header from "./components/header";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="flex flex-row">
        <Header />
      </div>
      <div className="relative">
        <Image
          src="/moment_background.png"
          alt="home"
          width={1476}
          height={1179}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <p className="text-white text-center font-extrabold text-6xl mb-10">
            YOUR ONE-STOP
            <br />
            MULTI-MEDIA COMPANY
          </p>
          <p className="text-center font-extrabold text-white text-4xl mb-10">
            ...pofessional photgraphy, videography, <br /> branding, and
            creative media services
          </p>
          <div className="flex flex-row gap-34.5">
            <div className="flex flex-row  gap-20">
              {" "}
              <button className="w-116.5 h-19.5 text-gray-600 rounded-2xl bg-white">
                Join as a creative
              </button>
            </div>{" "}
            <button className="w-116.5 h-19.5 rounded-2xl bg-blue-600">
              Find a creative
            </button>
          </div>
        </div>
      </div>

      <div>
        <button className="block w-82.5 h-19.5 mx-auto my-15 bg-blue-600 text-white text-2xl font-extrabold rounded-2xl ">
          About moment
        </button>
        <p className=" text-center text-[#1E3A8A] text-lg ">
          Moment is a multimedia services platform designed to connect
          <br /> customers with professional photography, videography, branding,
          and
          <br /> creative media services through a unified digital experience.
          The
          <br />
          platform will allow users to discover services, book appointments,
          <br />
          manage projects, communicate with creatives, and receive <br />
          deliverables seamlessly. Moment aims to digitize and streamline the
          <br /> fragmented media services market by providing transparency in
          <br /> pricing, availability, and service quality while empowering
          media
          <br /> professionals with tools to manage their bookings and client
          <br /> relationships.
        </p>
        <section className="flex flex-row gap-52.5 justify-center mt-12 items-center">
          <div className=" border-blue-600 border-2 p-10 ">
            <h1 className="text-2xl text-[#1E3A8A] font-bold">
              20+ <br />{" "}
              <span className="text-base font-light text-[#1E3A8A]">
                of branches <br />
                in Africa
              </span>
            </h1>
          </div>
          <div className=" border-blue-600 border-2 p-10 ">
            <h1 className="text-2xl text-[#1E3A8A] font-bold">
              1,000+ <br />
              <span className="text-base font-light text-[#1E3A8A]">
                of satisfied <br /> clients worldwide
              </span>
            </h1>
          </div>
          <div className=" border-blue-600 border-2 p-10 ">
            <h1 className="text-2xl text-[#1E3A8A] font-bold">
              700+ <br />
              <span className="text-base font-light text-[#1E3A8A]">
                of professionals
                <br /> in creative depth
              </span>
            </h1>
          </div>
        </section>
      </div>

      <div className="p-20 bg-gray-200">
        <div className="flex flex-row justify-between">
          <div>
            <h1 className="text-center text-2xl my-10">How Moments works</h1>
            <p className=" text-center text-[#1E3A8A] leading-7 text-lg ">
              Our services include Film (from concept development and
              <br />
              script-writing to filming and editing), Photography and Events.{" "}
              <br />
              We use innovative equipment and techniques to capture stunning{" "}
              <br />
              visuals and crisp audio, and our team of editors and animators
              <br />
              will bring your footage to life with eye-catching graphics and
              <br />
              engaging effects. Whether you’re looking to promote a product,
              <br />
              showcase a service, tell an impact story, or produce an event,
              <br /> we have the expertise and experience to bring your vision
              to life.
              <br />
            </p>
          </div>
          <div className="flex justify-center items-center border-2 rounded-xl">
            <Image
              src="/how_moment_works.png"
              alt="how moment works"
              width={464}
              height={570}
            />
          </div>
        </div>
        <h1 className="text-2xl text-center mt-10 font-extrabold text-blue-600">
          Featured servies
        </h1>
        <div className="flex flex-row  p-20 justify-evenly ">
          <div className=" flex flex-col gap-4 justify-center items-center p-5 border-blue-950 border-2 w-47 h-45">
            <Image
              src="/photography.png"
              alt="photo"
              width={91.5}
              height={91.5}
            />
            <p className="text-base font-light text-[#1E3A8A]">Photography</p>
          </div>
          <div className=" flex flex-col gap-4 justify-center items-center p-5 border-blue-950 border-2 w-47 h-45">
            <Image
              src="/video_editing.png"
              alt="video"
              width={91.5}
              height={91.5}
            />
            <p className="text-base font-light text-[#1E3A8A]">Video editing</p>
          </div>
          <div className=" flex flex-col gap-4 justify-center items-center p-5 border-blue-950 border-2 w-47 h-45">
            <Image
              src="/content.png"
              alt="content"
              width={91.5}
              height={91.5}
            />
            <p className="text-base font-light text-[#1E3A8A]">
              Content creation
            </p>
          </div>
          <div className=" flex flex-col gap-4 justify-center items-center p-5 border-blue-950 border-2 w-47 h-45">
            <Image
              src="/marketing.png"
              alt="marketing"
              width={91.5}
              height={91.5}
            />
            <p className="text-base font-light text-[#1E3A8A]">SM Marketing</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button className="w-92.75 h-15.75 bg-blue-600 text-xl text-white font-extrabold rounded-2xl">
            Explore more creatives
          </button>
        </div>
      </div>

      <div className="bg-[#9fb0d3] p-20">
        <div className="flex flex-row justify-between">
          <h1 className="text-blue-900 text-base font-extrabold">
            Portfolio Highlights/Testimonials/Reviews
            <br />{" "}
            <span className="font-light text-0.5">
              we are a creative and multimedia agency that meets need
            </span>
          </h1>
          <p className="flex flex-row gap-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.55865 11.7586C8.71954 11.5973 8.79998 11.4 8.79998 11.1666C8.79998 10.9333 8.71954 10.736 8.55865 10.5746C8.39776 10.4133 8.20042 10.3329 7.96665 10.3333C7.73287 10.3338 7.53576 10.4144 7.37531 10.5753C7.21487 10.7362 7.1342 10.9333 7.13331 11.1666C7.13242 11.4 7.21309 11.5973 7.37531 11.7586C7.53754 11.92 7.73465 12.0004 7.96665 12C8.19865 11.9995 8.39598 11.9195 8.55865 11.7586ZM7.36665 9.43332H8.59998C8.59998 9.06665 8.64176 8.77776 8.72531 8.56665C8.80887 8.35554 9.04487 8.06665 9.43331 7.69998C9.7222 7.41109 9.94998 7.13598 10.1166 6.87465C10.2833 6.61332 10.3666 6.29954 10.3666 5.93332C10.3666 5.31109 10.1389 4.83332 9.68331 4.49998C9.22776 4.16665 8.68887 3.99998 8.06665 3.99998C7.43331 3.99998 6.91954 4.16665 6.52531 4.49998C6.13109 4.83332 5.85598 5.23332 5.69998 5.69998L6.79998 6.13332C6.85554 5.93332 6.98065 5.71665 7.17531 5.48332C7.36998 5.24998 7.66709 5.13332 8.06665 5.13332C8.4222 5.13332 8.68887 5.23065 8.86665 5.42532C9.04443 5.61998 9.13331 5.83376 9.13331 6.06665C9.13331 6.28887 9.06665 6.49732 8.93331 6.69198C8.79998 6.88665 8.63331 7.06709 8.43331 7.23332C7.94442 7.66665 7.64442 7.99443 7.53331 8.21665C7.4222 8.43887 7.36665 8.84443 7.36665 9.43332ZM7.99998 14.6666C7.07776 14.6666 6.21109 14.4918 5.39998 14.142C4.58887 13.7922 3.88331 13.3171 3.28331 12.7167C2.68331 12.1162 2.20843 11.4106 1.85865 10.6C1.50887 9.78932 1.33376 8.92265 1.33331 7.99998C1.33287 7.07732 1.50798 6.21065 1.85865 5.39998C2.20931 4.58932 2.6842 3.88376 3.28331 3.28332C3.88243 2.68287 4.58798 2.20798 5.39998 1.85865C6.21198 1.50932 7.07865 1.33421 7.99998 1.33332C8.92131 1.33243 9.78798 1.50754 10.6 1.85865C11.412 2.20976 12.1175 2.68465 12.7166 3.28332C13.3158 3.88198 13.7909 4.58754 14.142 5.39998C14.4931 6.21243 14.668 7.07909 14.6666 7.99998C14.6653 8.92087 14.4902 9.78754 14.1413 10.6C13.7924 11.4124 13.3175 12.118 12.7166 12.7167C12.1158 13.3153 11.4102 13.7904 10.6 14.142C9.78976 14.4935 8.92309 14.6684 7.99998 14.6666ZM7.99998 13.3333C9.48887 13.3333 10.75 12.8166 11.7833 11.7833C12.8166 10.75 13.3333 9.48887 13.3333 7.99998C13.3333 6.51109 12.8166 5.24998 11.7833 4.21665C10.75 3.18332 9.48887 2.66665 7.99998 2.66665C6.51109 2.66665 5.24998 3.18332 4.21665 4.21665C3.18331 5.24998 2.66665 6.51109 2.66665 7.99998C2.66665 9.48887 3.18331 10.75 4.21665 11.7833C5.24998 12.8166 6.51109 13.3333 7.99998 13.3333Z"
                fill="black"
              />
            </svg>
            <p className="text-blue-900">Need help?</p>
          </p>
        </div>
        <Portfolio />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
