import { useState } from "react";
import { Link} from "react-router-dom";
import { Bars3Icon } from '@heroicons/react/24/solid'

const NavBar = ()=>{
 const activeMenu = ()=>{
   
    menu? setMenu(false) : setMenu(true)
 }
 const [menu , setMenu] = useState(false)

    return (
        <>
        <nav className="flex justify-between items-center bg-gray-800 p-4 shadow-lg">
        <div className="text-white text-xl font-bold">Brand</div>
        <ul className="hidden md:flex space-x-8">
            <li><Link to="#home" className="text-white hover:text-yellow-400 transition duration-300">Home</Link></li>
            <li><Link to="#about" className="text-white hover:text-yellow-400 transition duration-300">About</Link></li>
            <li><Link to="#services" className="text-white hover:text-yellow-400 transition duration-300">Services</Link></li>
            <li><Link to="#contact" className="text-white hover:text-yellow-400 transition duration-300">Contact</Link></li>
        </ul>
        <div   className="md:hidden  text-white text-2xl cursor-pointer menu-toggle w-8 ">
         <Bars3Icon onClick={()=>activeMenu()} />
        </div>
    </nav>
    <ul className={`nav-links flex-col items-center space-y-4 bg-gray-800 p-4 md:hidden ${menu==false?"hidden":"flex"} absolute top-16 left-0 w-full`}>
        <li><Link to="#home" className="text-white hover:text-yellow-400 transition duration-300">Home</Link></li>
        <li><Link to="#about" className="text-white hover:text-yellow-400 transition duration-300">About</Link></li>
        <li><Link to="#services" className="text-white hover:text-yellow-400 transition duration-300">Services</Link></li>
        <li><Link to="#contact" className="text-white hover:text-yellow-400 transition duration-300">Contact</Link></li>
    </ul>
        </>
       
    )
}

export default NavBar;