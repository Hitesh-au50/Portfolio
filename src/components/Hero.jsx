import React from "react";
import hero from "../assets/images/hero2.png";

const Hero = () => {
  const social_media = [
    "logo-instagram",
    "logo-facebook",
    "logo-linkedin",
    "logo-twitter",
    "logo-github",
  ];

  const linkedInProfileUrl = "https://www.linkedin.com/in/hitesh-verma-8b9759251";
  const githubProfileUrl = "https://github.com/Hitesh-au50";

  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={hero} alt="" className="md:w-11/12 h-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Hitesh</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Fullstack Web-Developer
            <div className="text-sm">
              I'm specialized in MERN stack and I'm passionate about building Scalable websites.
            </div>
          </h4>
          <button className="btn-primary mt-8">Contact Me</button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon) => (
              <div
                key={icon}
                className="text-gray-600 hover:text-white cursor-pointer"
              >
                {icon === "logo-linkedin" && (
                  <a href={linkedInProfileUrl} target="_blank" rel="noopener noreferrer">
                    <ion-icon name={icon}></ion-icon>
                  </a>
                )}
                {icon === "logo-github" && (
                  <a href={githubProfileUrl} target="_blank" rel="noopener noreferrer">
                    <ion-icon name={icon}></ion-icon>
                  </a>
                )}
                {icon !== "logo-linkedin" && icon !== "logo-github" && (
                  <ion-icon name={icon}></ion-icon>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;







