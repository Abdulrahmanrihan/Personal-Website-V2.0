export default function Header(){
    return(
        <div className="flex regular flex-row z-10 sticky top-0 justify-between bg-gray-300 dark:bg-gray-600 w-full py-2 px-12 font-bold text-white">
            <div className="flex flex-row justify-around w-1/3">
                <a className="m-3 hover:text-lg hover:m-2 hover:text-green-400" href="/">Home</a>
                <a className="m-3 hover:text-lg hover:m-2 hover:text-blue-400" href="./about">About</a>
                <a className="m-3 hover:text-lg hover:m-2 hover:text-blue-400" href="./projects">Projects</a>
                <a className="m-3 hover:text-lg hover:m-2 hover:text-blue-400" href="./blogs">Blog</a>
            </div>
            <div className="flex flex-row my-auto">
            <a className="hover:scale-105 hover:text-blue-400" href="https://twitter.com/abdulrahmnrihan">
                <svg className="m-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M22.212 5.656a8.384 8.384 0 0 1-2.401.658A4.195 4.195 0 0 0 21.649 4c-.82.488-1.719.83-2.655 1.015a4.182 4.182 0 0 0-7.126 3.814a11.874 11.874 0 0 1-8.621-4.37a4.168 4.168 0 0 0-.566 2.103c0 1.45.739 2.731 1.86 3.481a4.169 4.169 0 0 1-1.894-.523v.051a4.185 4.185 0 0 0 3.355 4.102a4.205 4.205 0 0 1-1.89.072A4.185 4.185 0 0 0 8.02 16.65a8.394 8.394 0 0 1-6.192 1.732a11.831 11.831 0 0 0 6.41 1.88c7.694 0 11.9-6.373 11.9-11.9c0-.18-.004-.362-.012-.541a8.497 8.497 0 0 0 2.086-2.164Z"/></svg></a>

                <a className="hover:scale-105 hover:text-blue-600" href="https://www.facebook.com/abdelrahman.rihan.50/" target="_blank">
                <svg className="m-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5Z"/></svg></a>

                <a className="hover:scale-105 hover:text-orange-400" href="https://www.instagram.com/abdulrahman_rihan/">
                <svg className="m-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"/></svg></a>

                <a className="hover:scale-105 hover:text-blue-500" href="https://www.linkedin.com/in/abdelrahman-rihan-07b989177/">
                <svg className="m-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"/></svg></a>

                <button className="hidden flex-end rounded-lg my-1 px-5 p-2 bg-gradient-to-r from-green-400 via-blue-400 to-blue-600 transition hover:ease-in duration-150 hover:from-indigo-500 hover:to-red-700 hover:scale-105">Dim it</button>
            </div>
        </div>
    );
}