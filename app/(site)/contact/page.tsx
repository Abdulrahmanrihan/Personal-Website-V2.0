import Header from "@/components/header";
import Footer from "@/components/footer";


export default function About(){
    return(
        <main className="bg-white text-black">
        <Header/>
        <div className="flex flex-row w-full">
            <div className="w-2/3 mx-auto">
                <div className="my-24">
                    <h1 className="text-5xl font-extrabold bg-gradient-to-r from-green-400 via-blue-400 to-blue-600 bg-clip-text text-transparent ">Contact information </h1>
                </div>
            </div>
        </div>
        <Footer/>
    </main>
    );
}