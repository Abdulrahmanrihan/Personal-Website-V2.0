export default function Footer(){
    return(
        <div className="flex flex-col sticky bottom-0 w-full font-extrabold text-white bg-gradient-to-r from-green-400 via-blue-400 to-blue-600 pt-1">
            <div className="w-full py-4 bg-gray-300">
                <div className="flex flex-col text-center justify-around ">
                    <p>Made and designed by Abdelrahman Rihan</p>
                    <p >Reach out to me via <span className="underline">abdelrahman.rihan@ejust.edu.eg</span></p>
                </div>
            </div>
        </div>
    );
}