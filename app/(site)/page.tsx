import { getProjects } from "@/sanity/sanity-utils";
import { getBlogPosts } from "@/sanity/sanity-utils";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Skill from "@/components/skill";

import Link from "next/link";

import { PortableText } from "@portabletext/react";

const skills = [
  {
    title: "Mindstorm",
    description: "Learnt the whole frmeowork to participate in the FLL and SUMO robotics Competitions",
    category: "lego",
    key: 1
  },
  {
    title: "Front-end",
    description: "I have a solid professional experience in Vanilla JS and a few JS frameworks such as React (gatsby/next) and svelteJs",
    category: "Web",
    key: 2
  },
  {
    title: "C plus plus",
    description: "I learnt c++ in terms of competitive programming in addition to the basic data structures and algorithms",
    category: "C++",
    key: 3
  },
  {
    title: "Python",
    description: "Me and python go way back to when I started learning programming in 2017, since then I learnt how to use tkinter, pandas, numpy, sklearn, keras, matplotlib and many more",
    category: "Python",
    key: 4
  },
  {
    title: "SQL",
    description: "I have a good grasp of sql commands and database principles. I also learnt how to configure web projects with existing sql databses",
    category: "database",
    key: 5
  },
  {
    title: "back-end",
    description: "Basic knowledge of APIs and back-end configuration using sanity.io and cockpit, and also very basic knowledge in asp.net and SQL SMS.",
    category: "Web",
    key: 6
  }
]



export default async function Home() {
  const projects = await getProjects();
  const blogs = await getBlogPosts();
  return(
    <div className="w-full bg-white regular">
      <Header/>
      <div className="mx-auto md:w-2/3 w-full m-6">
        <div className="my-24">
          <h1 className="text-5xl p-6 md:p-0 my-12 font-extrabold text-black">Hola <span className="inline">&#128075;</span> I&apos;m
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-blue-600 hover:from-green-200 hover:via-green-400 hover:to-blue-400 bg-clip-text text-transparent bold"> Abdulrahman</span> !
          </h1>
          <p className="mt-3 p-6 md:p-0 text-xl text-gray-600 tracking-wide">A PASSIONATE CS STUDENT WHO WISHES TO LEAVE AN ETERNAL IMPACT ON EARTH. I CODE STUFF FOR A LIVING AND CODE OTHER STUFF FOR FUN. MAY WE FOREVER STAY YOUNG, AMEN!</p>
          <p className="mt-3 p-6 md:p-0 text-xl text-gray-600 tracking-wide">I MADE THIS WEBSITE TO PUT MYSELF OUT IN THE OPEN SO PEOPLE WILL KNOW ME BETTER</p>
        </div>

        <div className="md:-ml-24 w-44 text-center bg-gradient-to-r from-green-400 to-blue-500 md:-rotate-12 rounded-lg mb-8 ml-8 md:ml-0 p-1">
          <div className="bg-white h-full p-2">
            <p className="text-black text-xl font-bold">Skills</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:flex-wrap text-black mb-24">
            {
              skills.map((skill) =>
              <Skill key={skill.key} title={skill.title} category={skill.category} description={skill.description}/>
              )
            }
        </div>
        <div className="md:-ml-24 w-44 text-center bg-gradient-to-r from-green-400 to-blue-500 md:-rotate-12 rounded-lg mb-8 ml-8 md:ml-0 p-1 ">
          <div className="bg-white h-full p-2">
            <p className="text-black text-lg font-bold">Recent Projects</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:flex-wrap mb-24 w-full">
          {projects.slice(0, 2).map((project) => (
            <div key={project._id} className="w-full md:w-1/2 p-6 mx-auto flex flex-col ">
              <div className="pb-3 mx-2 md:mx-0 bold text-lg text-black " >
                {project.name}
              </div>
              <div className="pb-5 mx-2 md:mx-0 text-gray-700"><PortableText value={project.content}/></div>
              <button className="text-white text-sm ronuded-xl p-2 m-2 bg-gradient-to-r from-green-400 to-blue-500 w-1/2 hover:scale-105">View project</button>
            </div>
          ))}
        </div>
        <div className="md:-ml-24 w-44 text-center bg-gradient-to-r from-green-400 to-blue-500 md:-rotate-12 rounded-lg mb-8 ml-8 md:ml-0 p-1 ">
          <div className="bg-white h-full p-2">
            <p className="text-black text-xl font-bold">Recent Blogs</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:flex-wrap justify-between mb-24">
          {blogs.slice(0, 3).map((blog) => (
            <Link key={blog._id} href={`/blog/${blog.slug}`} className="p-8 md:p-0 w-full md:w-1/4 mr-3 text-black hover:scale-105">
              <div className="flex flex-row">
                <div className="text-lg bold mr-1">{blog.name}</div>
                <div className="mb-3 h-min border p-1 text-sm border-blue-200 rounded-lg">{blog.category}</div>
              </div>
              <div className="text-sm">{blog.subtitle}</div>
            </Link>
          ))}
        </div>
        </div>
      <Footer/>
    </div>
  );
}