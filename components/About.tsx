import  MypfPicture  from "../public/assets/images/MypfPicture.jpg";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
const text="Hello! My name is Keo Ratana and I enjoy creating things that live on the internet. My interest in web development started back in 2023 when I decided to try re-build a website by myself. It made me feel interested in how websites work and their logic. ";
const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          {/* <p> */}
            <p>{text}</p>

          {/* </p> */}
          <p>
            Fast-forward to today, and I had the privilege of working at an
            Backend and Frontend by using React and Laravel, a start-up,{" "}
            <span className="text-textGreen mr-4">
              AWS 
            </span>
            My expertise lies in crafting clean, maintainable code, implementing responsive design principles for compatibility across all devices, and integrating APIs to enhance functionality. With a focus on user experience and performance optimization, I take pride in delivering solutions that not only meet client requirements but also exceed expectations. Whether working on individual projects or collaborating within a team, I am committed to staying up-to-date with the latest industry trends and continually improving my skills to ensure innovative and impactful results.{" "}
            {/* <span className="text-textGreen">
              ab natus possimus? Sint, accusamus!
            </span> */}
          </p>
          <p>
          As someone passionate about web development, I believe that every project is an opportunity to solve problems, tell stories, and make a difference. I thrive on the challenge of transforming complex ideas into intuitive, user-friendly interfaces. Beyond just writing code, I enjoy exploring creative ways to merge functionality and aesthetics, ensuring every project stands out. I am driven by a curiosity to learn and the excitement of pushing boundaries to create digital experiences that leave a lasting impression.


          </p>
          <p>Here are a few technologies I have been working with recently:</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              JavaScript (ES6+)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Joomla
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              React
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Boostrap5
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              TypeScript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              PHP
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Wordpress
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Tailwindcss
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg ">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-cover"
                src={MypfPicture}
                alt="profileImg"
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
