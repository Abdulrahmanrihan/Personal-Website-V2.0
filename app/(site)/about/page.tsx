import Header from "@/components/header";
import Footer from "@/components/footer";
import { Spotify } from "react-spotify-embed";

export default function About(){
    return(
        <main className="bg-white text-black min-h-screen">
        <Header/>
        <div className="flex flex-row w-full">
            <div className="w-full md:w-2/3 mx-auto px-6 md:px-0">
                <div className="my-24">
                    <h1 className="text-5xl bold font-extrabold bg-gradient-to-r from-green-400 via-blue-400 to-blue-600 bg-clip-text text-transparent">About Me</h1>
                </div>

                {/* Bio */}
                <div className="text-lg text-gray-700 mb-16 space-y-5 leading-relaxed max-w-2xl">
                    <p>
                        My name is <span className="bg-green-100 px-1 rounded">Abdelrahman Rihan</span>. I graduated in 2025 from{" "}
                        <span className="bg-green-100 px-1 rounded">Egypt-Japan University of Science and Technology</span> with a BSc in Computer Science (AI), CGPA 3.38/4.0.
                        I&apos;m based in Cairo, Egypt.
                    </p>
                    <p>
                        I started programming in <span className="font-bold">2016</span> with XML and Java for Android, gradually expanding into Python, C++, and beyond.
                        By <span className="font-bold">2020</span> I was fully invested in both <span className="bg-green-100 px-1 rounded">web development</span> and{" "}
                        <span className="bg-green-100 px-1 rounded">machine learning</span>, and I&apos;ve been building production-level projects across both domains since.
                    </p>
                    <p>
                        I&apos;m currently working as an <span className="font-bold">AI Engineer Intern at Enza Group</span> (Jan 2026–present), where I contribute to a
                        production-level RAG system on AWS and help develop AI-driven automations for internal workflows. Prior to that, I interned at{" "}
                        <span className="font-bold">OBM Education</span> (Jun–Sep 2024) as an AI/Data Science Intern, building LLM-powered chatbots and career assessment AI for a mobile application.
                    </p>
                    <p>
                        On the web side, I worked as a <span className="font-bold">Front-end Developer at Codex Solutions</span> (Mar 2022–May 2025), delivering clean, responsive frontends for high-profile clients including Al Ahly Bank.
                    </p>
                    <p>
                        Outside of tech, I was a two-time national boxing championship finalist and a passionate chess player. I also led a{" "}
                        <span className="font-bold">Hack Club</span> chapter from 2020 to 2022, teaching C and C++ to students and hosting school-wide programming competitions.
                    </p>
                </div>

                {/* Quick Facts */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">Quick Facts</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border border-gray-200 rounded-xl p-4">
                            <p className="text-sm text-gray-500 mb-1">Languages</p>
                            <p className="font-semibold text-gray-800">Arabic (Native) · English (C2, IELTS 8.5) · German (A1) · French (Basic)</p>
                        </div>
                        <div className="border border-gray-200 rounded-xl p-4">
                            <p className="text-sm text-gray-500 mb-1">Education</p>
                            <p className="font-semibold text-gray-800">BSc CS (AI) — EJUST, 2021–2025, CGPA 3.38</p>
                        </div>
                        <div className="border border-gray-200 rounded-xl p-4">
                            <p className="text-sm text-gray-500 mb-1">Currently</p>
                            <p className="font-semibold text-gray-800">AI Engineer Intern @ Enza Group, Cairo</p>
                        </div>
                        <div className="border border-gray-200 rounded-xl p-4">
                            <p className="text-sm text-gray-500 mb-1">Interests</p>
                            <p className="font-semibold text-gray-800">Chess · Boxing · Competitive Programming</p>
                        </div>
                    </div>
                </div>

                {/* Spotify */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">All-time favourite tracks</h2>
                    <div className="flex flex-col md:flex-row w-full gap-2">
                        <div className="flex flex-col gap-2 w-full md:w-1/2">
                            <Spotify wide link="https://open.spotify.com/track/3Y4rUyw7XBCK6hGHCOt6rp?si=e30a2c0214eb4fc5" />
                            <Spotify wide link="https://open.spotify.com/track/6QpZXzHcOgXK41Y3YCx203?si=1779e929168a4d1c" />
                            <Spotify wide link="https://open.spotify.com/track/3OFejsaM3NDkclJg3rjWI2?si=0fa3b7f8a84149aa" />
                        </div>
                        <div className="flex flex-col gap-2 w-full md:w-1/2">
                            <Spotify wide link="https://open.spotify.com/track/6wmAHw1szh5RCKSRjiXhPe?si=c97470d9e7ee4de3" />
                            <Spotify wide link="https://open.spotify.com/track/23OXdR7YuUBVWh5hSnYJau?si=27addf7aaaa3412e" />
                            <Spotify wide link="https://open.spotify.com/track/3xKsf9qdS1CyvXSMEid6g8?si=7fc842a08470419c" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </main>
    );
}
