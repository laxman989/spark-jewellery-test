import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import boy from "../assets/profile/boy.png";
import girl from "../assets/profile/girl.png";
import man from "../assets/profile/man.png";
import woman from "../assets/profile/woman.png";
import { MdLogout, MdOutlineUpdate } from "react-icons/md";
import { IoIosList } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import { clearErrors, loadUser, logout } from "../actions/UserAction";
import toast from "react-hot-toast";
import Loader from "../components/Loader";

const Account = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { loading, error, user, isAuthenticated } = useSelector(state => state.userReducer);

    const handleUpdate = (e) => {
        e.preventDefault();
        
    }

    useEffect(() => {
        if(error) {
            toast.error(error);
            clearErrors();
        }
        if(!isAuthenticated) {
            navigate("/login");
        }
    }, [navigate, isAuthenticated, error])

    return (
        loading === true ? <Loader /> : <div className="w-full text-gray-900">
        <div className="max-w-[1200px] mx-auto grid sm:grid-cols-4 grid-cols-1 gap-8 py-4">
            <div className="col-span-1">
                {
                    user.gender === "male" ? <img className="w-full p-6 object-contain rounded-full bg-white" src={user.age < 30 ? boy : man} alt="img" /> 
                    : <img className="w-full p-6 object-contain rounded-full bg-white" src={user.age < 30 ? girl : woman} alt="img" /> 
                }
                <Link to={"/account/updateProfile"} className="flex items-center justify-center rounded shadow text-sm py-2 my-2 font-semibold bg-gray-50 hover:bg-gray-100 duration-150 ease-in-out">Update Profile</Link>
                <Link to={"/account/updatePassword"} className="flex items-center justify-center rounded shadow text-sm py-2 my-2 font-semibold bg-red-700 text-white hover:bg-red-800 duration-150 ease-in-out">Update Password</Link>
            </div>
            <div className="col-span-2">
                <div className="flex items-center">
                    <h2 className="text-2xl font-semibold">Personal Information</h2>
                </div>
                <form onSubmit={handleUpdate}>
                
                    <div className="w-full my-3">
                        <label className="text-sm font-semibold" htmlFor="fullName">Full Name</label>
                        <input readOnly value={user.name} className="mt-2 bg-gray-50 w-full text-sm px-2 py-2 outline outline-1 outline-gray-300 rounded block" id="fullName" type="text" />
                    </div>
                    <div className="w-full my-3">
                        <label className="text-sm font-semibold" htmlFor="email">Email</label>
                        <input readOnly value={user.email} className="mt-2 bg-gray-50 w-full text-sm px-2 py-2 outline outline-1 outline-gray-300 rounded block" id="email" type="email" />
                    </div>
                    <div className="w-full my-3">
                        <label className="text-sm font-semibold" htmlFor="phoneNumber">Phone Number</label>
                        <input readOnly value={user.phoneNumber} className="mt-2 bg-gray-50 w-full text-sm px-2 py-2 outline outline-1 outline-gray-300 rounded block" id="phoneNumber" type="number" />
                    </div>

                    {/* <div className="w-full my-3">
                        <label className="text-sm font-semibold" htmlFor="gender">Gender</label>
                        <div className="flex items-center w-full">
                            <div className="mr-4">
                                <input checked disabled value={"Male"} className="mt-2 text-sm font-medium p-2 text-gray-900" name="gender" id="male" type="radio" />
                                <label className="ml-2 text-sm" htmlFor="male">Male</label>
                            </div>
                            <div className="ml-4">
                                <input disabled value={"Female"} className="mt-2 text-sm font-medium p-2 text-gray-900" name="gender" id="female" type="radio" />
                                <label className="ml-2 text-sm" htmlFor="female">Female</label>
                            </div>
                        </div>
                    </div> */}

                    {/* <div className="w-full my-3">
                        <label className="text-sm font-semibold" htmlFor="age">Age</label>
                        <input readOnly value={user.age} className="mt-2 bg-gray-50 w-full text-sm px-2 py-2 outline outline-1 outline-gray-300 rounded block" id="age" type="number" />
                    </div> */}

                    <div className="w-full my-3">
                        <label className="text-sm font-semibold" htmlFor="role">Role</label>
                        <input readOnly value={user.role} className="mt-2 bg-gray-50 w-full text-sm px-2 py-2 outline outline-1 outline-gray-300 rounded block" id="role" type="text" />
                    </div>
                
                </form>
            </div>
            <div className="col-span-1">
                <div className="bg-gray-50 shadow rounded text-sm font-semibold">
                    {user.role === "admin" && <div onClick={() => navigate("/account/admin/dashboard")} className="flex items-center px-4 py-4 cursor-pointer hover:bg-gray-100">
                        <RxDashboard size={16} />
                        <p className="pl-4">Dashboard</p>
                    </div>}
                    <div onClick={() => navigate("/account/orders")} className="flex items-center px-4 py-4 cursor-pointer hover:bg-gray-100">
                        <IoIosList size={16} />
                        <p className="pl-4">My Orders</p>
                    </div>

                    <div onClick={() => {dispatch(logout()); navigate("/login")}} className="flex items-center px-4 py-4 text-red-700 cursor-pointer hover:bg-gray-100">
                        <MdLogout size={16} className="text-red-700" />
                        <p className="pl-4">Logout</p>
                    </div>
                </div>
            </div>
            
        </div>
        </div>
    )
}

export default Account;