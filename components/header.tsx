export default function Header(){
    return(
        <div className="flex regular flex-row z-10 sticky top-0 justify-between bg-gray-300 w-full py-2 px-20 font-bold text-white">
            <div className="flex flex-row justify-around w-1/3">
                <a className="m-3 " href="/">Home</a>
                <a className="m-3" href="./about">About</a>
                <a className="m-3" href="./projects">Projects</a>
                <a className="m-3" href="./blogs">Blog</a>
                <a className="m-3" href="./contact">Contact</a>
            </div>
            <div>
                <button className="flex-end rounded-lg my-1 px-5 p-2 bg-gradient-to-r from-green-400 via-blue-400 to-blue-600 transition hover:ease-in duration-150 hover:from-indigo-500 hover:to-red-700 hover:scale-105">Dim it</button>
            </div>
        </div>
    );
}