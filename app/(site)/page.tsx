import { getProjects } from "@/sanity/sanity-utils";
import { getBlogPosts } from "@/sanity/sanity-utils";

import Header from "@/components/header";
import Footer from "@/components/footer";

import Link from "next/link";

import { Spotify } from "react-spotify-embed";
import { PortableText } from "@portabletext/react";



export default async function Home() {
  const projects = await getProjects();
  const blogs = await getBlogPosts();
  return(
    <div className="w-full bg-white regular">
      <Header/>
      <div className="mx-auto w-2/3">
        <div className="my-24">
          <h1 className="text-5xl my-12 font-extrabold text-black">Hola! I&apos;m
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-blue-600 hover:from-green-200 hover:via-green-400 hover:to-blue-400 bg-clip-text text-transparent"> Abdulrahman</span> !
            </h1>
          <p className="mt-3 text-xl font-extralight text-gray-600 tracking-wide">A PASSIONATE CS STUDENT WHO WISHES TO LEAVE AN ETERNAL IMPACT ON EARTH. I CODE STUFF FOR A LIVING AND CODE OTHER STUFF FOR FUN. FINALLY, MAY WE FOREVER STAY YOUNG, AMEN!</p>
          <p className="mt-3 text-xl font-extralight text-gray-600 tracking-wide">I MADE THIS WEBSITE TO PUT MYSELF ALL OUT THERE SO PEOPLE WILL KNOW ME BETTER</p>
        </div>
        <div className="flex flex-row w-full mx-auto">
          <div className="flex flex-wrap flex-col mr-2 w-1/2">
            <Spotify className="mb-2" wide link="https://open.spotify.com/track/3Y4rUyw7XBCK6hGHCOt6rp?si=e30a2c0214eb4fc5" />
            <Spotify className="mb-2" wide link="https://open.spotify.com/track/6QpZXzHcOgXK41Y3YCx203?si=1779e929168a4d1c" />
            <Spotify className="mb-2" wide link="https://open.spotify.com/track/3OFejsaM3NDkclJg3rjWI2?si=0fa3b7f8a84149aa" />
          </div>
          <div className="flex flex-wrap flex-col w-1/2">
            <Spotify className="mb-2" wide link="https://open.spotify.com/track/6wmAHw1szh5RCKSRjiXhPe?si=c97470d9e7ee4de3" />
            <Spotify className="mb-2" wide link="https://open.spotify.com/track/23OXdR7YuUBVWh5hSnYJau?si=27addf7aaaa3412e" />
            <Spotify className="mb-2" wide link="https://open.spotify.com/track/3xKsf9qdS1CyvXSMEid6g8?si=7fc842a08470419c" />
          </div>
        </div>
        
        <div className="-ml-32 -mt-36 mb-60 w-max -rotate-90">
          <p className="font-bold text-xl text-black bg-gradient-to-r from-blue-300  to-blue-600 bg-clip-text text-transparent">All-time fav tracks</p>
        </div>

        <div className="-ml-24 w-44 text-center bg-gradient-to-r from-green-400 to-blue-500 -rotate-12 rounded-lg mb-8 p-1">
          <div className="bg-white h-full p-2">
            <p className="text-black text-xl font-bold">Skills</p>
          </div>
        </div>
        <div className="flex flex-row flex-wrap text-black mb-24">
            <div className="flex w-1/3 flex-col h-full p-4 bg-white rounded-xl">
              <p className="text-lg">Mindstorm</p>
              <p className="font-thin text-sm tracking-wide">Learnt the whole frmeowork in two weeks to participate in the FLL and SUMO Competitions</p>
            </div>
        </div>
        <div className="-ml-24 w-44 text-center bg-gradient-to-r from-green-400 to-blue-500 -rotate-12 rounded-lg mb-8 p-1 ">
          <div className="bg-white h-full p-2">
            <p className="text-black text-xl font-bold">Projects</p>
          </div>
        </div>
        <div className="flex flex-row flex-wrap mb-24 w-full">
          {projects.slice(0, 2).map((project) => (
            <div className="w-1/3 mx-auto flex flex-col ">
              <div className="pb-5 bold mx-auto text-lg text-black " key={project._id}>
                {project.name}
              </div>
              <div className="thin pb-5"><PortableText value={project.content}/></div>
              <button className="text-white mx-auto text-sm ronuded-xl p-2 m-2 bg-gradient-to-r from-green-400 to-blue-500 w-1/2 hover:scale-105">View project</button>
            </div>
          ))}
        </div>
        <div className="-ml-24 w-44 text-center bg-gradient-to-r from-green-400 to-blue-500 -rotate-12 rounded-lg mb-8 p-1 ">
          <div className="bg-white h-full p-2">
            <p className="text-black text-xl font-bold">Blog</p>
          </div>
        </div>
        <div className="flex flex-row flex-wrap mb-24">
          {blogs.slice(0, 2).map((blog) => (
            <Link href={`/blog/${blog.slug}`} className="w-1/4 text-black hover:scale-105" key={blog._id}>
              <div>{blog.name}</div>
              <div>{blog.subtitle}</div>
            </Link>
          ))}
        </div>
        </div>
      <Footer/>
    </div>
  );
}