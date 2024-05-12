import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoPersonOutline, IoCartOutline, IoSearchOutline } from "react-icons/io5";
import logo  from "../assets/sparkJewelleryLogo.png";

const Header = () => {
    const navigate = useNavigate();

    const [keyword, setKeyword] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();

        if(keyword.trim()) {
            navigate(`/products/${keyword}`);
        }
        else {
            navigate(`/products`);
        }
    }

    return(
        <div className="z-20 w-full bg-gray-50 text-gray-900 sticky top-0 left-0 shadow-md">
            <div className="h-[10vh] max-w-[1200px] m-auto flex items-center justify-between">
                {/* <h1 className="text-3xl font-normal cursor-pointer">SPARK</h1> */}
                <Link to={"/"} className="h-2/3"><img className="h-full object-cover" src={logo} alt="Brand Logo" /></Link>
                <div className="md:flex flex-grow items-center justify-center hidden relative mx-12">
                    <input autoComplete="off" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="bg-gray-50 block w-full text-sm px-2 py-2 outline outline-1 outline-gray-300 focus:bg-white focus:outline-2 focus:outline-gray-900 rounded" id="search" type="text" placeholder="Search for products" />
                    <IoSearchOutline className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" size={20} />
                </div>
                <div className="flex items-center justify-center">
                    <Link to={"/becomeSeller"} className="mx-4 cursor-pointer">Become a Seller</Link>
                    <Link to={"/account/profile"} className="mx-4 cursor-pointer hover:scale-110"><IoPersonOutline size={26} /></Link>
                    <Link to={"/cart"} className="mx-4 cursor-pointer hover:scale-110"><IoCartOutline size={26} /></Link>
                </div>
            </div>
        </div>
    )
}

export default Header;