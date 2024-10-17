import React from "react";
import SectionTitle from "./SectionTitle";
import aboutSvg from "../assets/about.svg";
import about2Svg from "../assets/about2.svg";

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="mx-auto max-w-7xl px-8 py-4 grid gap-16 md:grid-cols-2 items-center">
        {/* <!-- First Row: Text + Img --> */}

        <article>
          <SectionTitle text="Coding and Climbing" />
          <p className="text-slate-600 mt-8 leading-loose">
            I am a versatile Software Engineer with 3+ years of professional
            experience, proficient in Python, C, JavaScript, and Java, with a
            solid foundation in version control systems and cloud platforms like
            Azure. My expertise spans backend development, algorithm design,
            software architecture, and database management, with hands-on
            experience in building secure, scalable solutions.
          </p>
        </article>
        <img
          src={aboutSvg}
          alt="About Coding"
          className="w-full h-64 object-contain"
        />

        {/* <!-- Second Row: Image + Text --> */}
        <img
          src={about2Svg}
          alt="About Climbing"
          className="w-full h-64 object-contain"
        />
        <p className="text-slate-600 mt-8 leading-loose">
          When I'm not coding, I enjoy rock climbing, pushing both my physical
          and mental limits on the wall. I also coach part-time, helping others
          develop their skills and passion for the sport. In addition to
          climbing, I give back to the community by volunteering coding lessons
          for children, introducing them to programming through fun and
          interactive languages like Scratch and Python. Teaching young minds
          how to think computationally and solve problems creatively has been
          one of the most rewarding experiences outside of my professional
          career.
        </p>
      </div>
    </section>
    // <section className="bg-white py-20" id="about">
    //   <div className="mx-auto max-w-7xl px-8 py-4 grid md:grid-cols-2 item-center gap-16">
    //     <img src={aboutSvg} className="w-full h-64" />

    //     <article>
    //       <SectionTitle text="Coding and Climbing"></SectionTitle>
    //       <p className="text-slate-600 mt-8 leading-loose">
    //         I am a versatile Software Engineer with 3+ years of professional
    //         experience, proficient in Python, C, JavaScript, and Java, with a
    //         solid foundation in version control systems and cloud platforms like
    //         Azure. My expertise spans backend development, algorithm design,
    //         software architecture, and database management, with hands-on
    //         experience in building secure, scalable solutions.{" "}
    //       </p>
    //       <img src={about2Svg} className="w-full h-64" />
    //       <p className="text-slate-600 mt-8 leading-loose">
    //         When I'm not coding, I enjoy rock climbing, pushing both my physical
    //         and mental limits on the wall. I also coach part-time, helping
    //         others develop their skills and passion for the sport. In addition
    //         to climbing, I give back to the community by volunteering coding
    //         lessons for children, introducing them to programming through fun
    //         and interactive languages like Scratch and Python. Teaching young
    //         minds how to think computationally and solve problems creatively has
    //         been one of the most rewarding experiences outside of my
    //         professional career.
    //       </p>
    //     </article>
    //   </div>
    // </section>
  );
};

export default About;
