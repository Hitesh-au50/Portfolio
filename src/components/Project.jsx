import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.jpg";
import project3 from "../assets/images/project-3.png";
import project4 from "../assets/images/project-4.png";
import project5 from "../assets/images/project-5.jpg";
import project_person from "../assets/images/project_person2.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Chit-Chat",
      github_link: "https://github.com/Hitesh-au50/chatApp",
      live_link: "https://drive.google.com/file/d/1Njc3Rem7FDWL0D4cx7_TYBrzwx1aLAST/view?usp=sharing",
    },
    {
      img: project2,
      name: "Tour-Managemant",
      github_link: "https://github.com/Hitesh-au50/world-Tour/tree/main/tour-management",
      live_link: "https://drive.google.com/file/d/1z1gQJbS14EdHj4Sh0ihmGVeLd2VgEoJU/view?usp=sharing",
    },
    {
      img: project3,
      name: "Stack OverFlow-Clone",
      github_link: "https://github.com/Hitesh-au50/stackoverflow",
      live_link: "https://drive.google.com/file/d/1AqY9FAS-VZ8FCTu-Tk1bAVGxXljS3C0S/view?usp=sharing",
    },
    {
      img: project4,
      name: "E-commerce medecine website",
      github_link:
        "https://github.com/Hitesh-au50/e-commerce",
      live_link: "https://drive.google.com/file/d/1QdMS45EJ6GJISRnJpGkwPQnw-VGOmLer/view?usp=sharing",
    },
    {
      img: project5,
      name: "SRMS",
      github_link:
        "https://github.com/Hitesh-au50/SRMS",
      live_link: "https://youtu.be/qC4ZsNQY3gw",
    }
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden">
          <img src={project_person} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Project;
