import heroImg from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-sky-200 py-24">
      <div className="mx-auto max-w-7xl px-8 grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">I'm Andrew</h1>
          <p className="mt-4 text-2xl text-slate-600 capitalize tracking-wide">
            Full-Stack Developer
          </p>
          <p className="mt-2 text-lg text-slate-600 capitalize tracking-wide">
            Solving difficult problems with smart and friendly people.
          </p>
          <div className="flex gapx-4 mt-4">
            <a href="https://github.com/AjFroster">
              <FaGithubSquare className="h-8 w-8 text-slate-400 hover:text-black duration-300"></FaGithubSquare>
            </a>
            <a href="https://www.linkedin.com/in/andrew-foster-518b32156/">
              <FaLinkedin className="h-8 w-8 text-slate-400 hover:text-black duration-300"></FaLinkedin>
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} className="h-80 lg:h-96"></img>
        </article>
      </div>
    </div>
  );
};

export default Hero;
