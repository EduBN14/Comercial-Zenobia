import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <nav className="grid grid-cols-3 items-center p-4 bg-white gap-4">
            <div className="flex justify-start w-36 ml-12">
                <img className="w-full" src="/Icons/logo.svg" alt="" />
            </div>
            <div className="flex justify-center">
                <ul className="flex space-x-12">
                    <li><Link to="/" className="hover:text-blue-600 transition-colors">Articulos</Link></li>
                    <li><Link to="" className="hover:text-blue-600 transition-colors">Promociones</Link></li>
                    <li><Link to="" className="hover:text-blue-600 transition-colors">Modelos</Link></li>
                    <li><Link to="" className="hover:text-blue-600 transition-colors">Cojines</Link></li>
                </ul>
            </div>
            <div className="flex justify-end mr-12">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors">
                    Sign up
                </button>
            </div>
        </nav>
    )
};