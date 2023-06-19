import Header from "@/components/header";
import Footer from "@/components/footer";
import { Spotify } from "react-spotify-embed";

export default function About(){
    return(
        <main className="bg-white text-black">
        <Header/>
        <div className="flex flex-row w-full">
            <div className="w-2/3 mx-auto">
                <div className="my-24">
                    <h1 className="text-5xl bold font-extrabold bg-gradient-to-r from-green-400 via-blue-400 to-blue-600 bg-clip-text text-transparent ">About Me </h1>
                </div>
                <div className="text-lg text-gray-700 mb-24">
                    <p>My name is <span className="bg-green-100">Abdulrahman Rihan</span>, I&apos;m a junior at <span className="bg-green-100">Egypt-Japan university for science and technology</span>, and currently located in Cairo, Egypt. I&apos;m a <span className="bold">freelance full-stack web developer</span>. I lovee chess and pretty much all mind-challenging games and puzzles, and I am a two times national boxing championship finalist</p><br/>
                    <p>I have been learning programming since <span className="bold">2017</span>. I started with xml and java for android mobile development, I was super hooked on the fact that I might be able to develop mobile games by myself. I slowly started learning more and more about other programming languages, and gradually disregarded the latter idea. By <span className="bold">2020</span> I was fully invested in both <span className="bg-green-100">web development</span> and <span className="bg-green-100">machine learning</span></p><br/>
                    <p>I cofounded my first web development startup that year, but ig I wasn&apos;t ready for that yet so we shut it down 6 months after, and for almost two years I honed my skills and started freelancing in <span className="bold">2023</span>.</p>
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
            </div>
        </div>
        <Footer/>
    </main>
    );
}