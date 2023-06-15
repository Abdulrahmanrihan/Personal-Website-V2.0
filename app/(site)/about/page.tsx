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
                    <h1 className="text-5xl font-extrabold bg-gradient-to-r from-green-400 via-blue-400 to-blue-600 bg-clip-text text-transparent ">About Me </h1>
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