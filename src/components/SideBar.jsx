import React, {useState} from "react";
import {
    RiCloseFill,
    RiFileCopyLine, 
    RiHome3Line, 
    RiMore2Fill,
    RiPieChartLine, 
    RiWalletLine} from "react-icons/ri";

const Sidebar = () =>{
    const [showMenu, setshowMenu] = useState(false);

    return (
    <>
    <div className={`h-full bg-primary-900 fixed lg:static w-[80%] md:w-[40%] lg:w-full transition-all z-50 duration-300
                    ${showMenu ? "bottom-0" : "-bottom-full"}`}>
        {/* Profile */}
        <div className="flex flex-col items-center justify-center p-8 gap-2 h-[30vh]">
            <img src="https://img.freepik.com/psd-gratis/3d-ilustracion-persona-cabello-largo_23-2149436197.jpg" 
            className="w-20 h-20 rounded-full object-cover ring-2 ring-gray-100" alt="" />
            <h1 className="text-xl text-white font-bold">Avatar</h1>
            <p className="bg-primary-100 py-1 px-3 rounded-full text-white font-medium">Hello</p>
        </div>
        {/* nav */}
        <div className="bg-primary-300 p-8 rounded-tr-[100px] h-[70vh] overflow-y-auto flex flex-col justify-between gap-8">
            <nav className="flex flex-col gap-4">
                <a href="#" className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors">
                    <RiHome3Line/> Home
                </a>
                <a href="#" className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors">
                    <RiFileCopyLine/> Projects
                </a>
                <a href="#" className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors">
                    <RiWalletLine/> Invoices
                </a>
                <a href="#" className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors">
                    <RiPieChartLine/> Reports
                </a>
            </nav>
            <div className="bg-primary-900/50 text-white p-4 rounded-xl z-50">
                <p className="text-gray-400">How are you?</p>
                <a href="#">Contact us</a>
            </div>
        </div>
    </div>
    {/*Button menu*/}
    <button 
    onClick={() => setshowMenu(!showMenu)}
    className="lg:hidden fixed right-4 bottom-4 text-2xl bg-primary-900 rounded-full p-2 text-white">
        {showMenu ? <RiCloseFill/> : <RiMore2Fill/>}
    </button>
    </>
    )
}

export default Sidebar