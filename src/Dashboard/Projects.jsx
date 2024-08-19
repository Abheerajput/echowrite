import React, { useEffect, useState } from 'react';
import Navbar from './Layout/Navbar';
import Footer from './Layout/Footer';
import { GoChevronRight } from "react-icons/go";
import mike from "../assets/svg/projectsiconmike.svg";
import plus from "../assets/svg/projectsplusicon.svg";
import bgimg from "../assets/images/Frame.jpg";

// Reusable ProjectCard component
const ProjectCard = ({ img, title, description, bgColor, textColor }) => {
  return (
    <div className={`flex gap-4 sm:gap-6 ${bgColor} ${textColor} items-center py-3 sm:w-[80%] md:w-[48%] xs:w-full min-w-[48%] ps-6 pr-8 rounded-xl`}>
      <p><img src={img} alt="" className="w-8 h-8 sm:w-10 sm:h-10" /></p>
      <div className='w-full'>
        <p className='text-[18px] sm:text-[21px] inter_ff flex justify-between items-center font-bold'>
          {title} <GoChevronRight />
        </p>
        <p className='text-[15px] sm:text-[17px] inter_ff font-medium pt-2 sm:pt-3'>{description}</p>
      </div>
    </div>
  );
};

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = [
        { id: 1, img: plus, title: "Start New Project", description: "Create Text with Voice Speech with inspire", bgColor: "bg-[#498BF7]", textColor: "text-white" },
        { id: 2, img: mike, title: "Start New Project", description: "Create Text with Voice Speech with inspire", bgColor: "bg-[#F5FBFF]", textColor: "text-black" },
        { id: 2, img: mike, title: "Start New Project", description: "Create Text with Voice Speech with inspire", bgColor: "bg-[#F5FBFF]", textColor: "text-black" },
        { id: 2, img: mike, title: "Start New Project", description: "Create Text with Voice Speech with inspire", bgColor: "bg-[#F5FBFF]", textColor: "text-black" },
        { id: 2, img: mike, title: "Start New Project", description: "Create Text with Voice Speech with inspire", bgColor: "bg-[#F5FBFF]", textColor: "text-black" },
        { id: 2, img: mike, title: "Start New Project", description: "Create Text with Voice Speech with inspire", bgColor: "bg-[#F5FBFF]", textColor: "text-black" },
        // Add more project data as needed
      ];
      setProjects(data);
    };

    fetchData();
  }, []);

  return (
    <div className='min-h-screen flex flex-col' style={{
      backgroundImage: `url(${bgimg})`,
      backgroundSize: 'cover',
    }}>
     
      <Navbar />

      <div className='w-full mt-8 sm:mt-12 flex-grow'>
        <div className='mx-4 sm:mx-8 shadow-md lg:mx-12 p-4 sm:p-8 lg:p-10 pb-12 py-4 rounded-xl pt-12 bg-white'>
          <h1 className='text-[22px] sm:text-[26px] text-[#161C2D] inter_ff font-bold'>Speech to Text</h1>
          <p className='text-[12px] sm:text-[13px] font-normal inter_ff'>Create or edit projects</p>

          <div className='pt-6 sm:pt-8 md:pt-8 lg:pt-8 xl:pt-8 w-full sm:justify-center  flex flex-wrap gap-6 sm:gap-8'>
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                img={project.img}
                title={project.title}
                description={project.description}
                bgColor={project.bgColor}
                textColor={project.textColor}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Use Footer */}
      <Footer />
    </div>
  );
};

export default Projects;





