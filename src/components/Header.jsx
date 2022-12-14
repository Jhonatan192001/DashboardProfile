import React from "react"
import { RiSearch2Line } from "react-icons/ri"

const Header = () =>{
    
    return(
        <header className="flex flex-col md:flex-row items-center justify-between gap-4">
            <h1 className="text-2xl md:text-3xl font-bold">Good Morning People!</h1>
            <form className="w-full md:w-auto" action="">
                <div className="relative">
                    <RiSearch2Line className="absolute top-1/2 -translate-y-1/2 left-2"/>
                    <input type="text" className="bg-gray-200 outline-none py-2 pl-8 pr-4 rounded-full w-full md:w-auto"
                    placeholder="Project"
                    />
                </div>
            </form>
        </header>
    )
}

export default Header