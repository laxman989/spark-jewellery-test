import React, { useState } from 'react';
import { ImSpinner8 } from "react-icons/im";

const UpdateProfile = () => {
    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [gender, setGender] = useState("");
    const [age, setAge] = useState(null);
    const loading = false;

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="w-full py-8 flex flex-col items-center justify-center">
            <form onSubmit={handleSubmit} className="md:w-1/4 sm:w-1/2 w-full md:px-0 px-8 flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold mb-4">Update Profile</h1>
                <p className="text-center text-sm">Kindly enter the following details to update your profile.</p>

                <div className="w-full my-3">
                    <label className="text-sm font-semibold" htmlFor="phoneNumber">Phone Number</label>
                    <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="no-spinner mt-2 bg-gray-50 w-full text-sm px-2 py-2 outline outline-1 outline-gray-300 focus:bg-white focus:outline-2 focus:outline-gray-900 rounded block" id="phoneNumber" maxLength={10} minLength={10} type="number" placeholder="Enter phone number" />
                </div>
                <div className="w-full my-3">
                    <label className="text-sm font-semibold" htmlFor="age">Age</label>
                    <input value={age} onChange={(e) => setAge(e.target.value)} className="no-spinner mt-2 bg-gray-50 w-full text-sm px-2 py-2 outline outline-1 outline-gray-300 focus:bg-white focus:outline-2 focus:outline-gray-900 rounded block" id="age" maxLength={3} minLength={1} type="number" placeholder="Enter age" />
                </div>

                <div className="w-full my-3">
                    <label className="text-sm font-semibold" htmlFor="gender">Gender</label>
                    <div className="flex items-center w-full">
                        <div className="mr-4">
                            <input checked value={"Male"} className="mt-2 text-sm font-medium p-2 text-gray-900" name="gender" id="male" type="radio" />
                            <label className="ml-2 text-sm" htmlFor="male">Male</label>
                        </div>
                        <div className="ml-4">
                            <input value={"Female"} className="mt-2 text-sm font-medium p-2 text-gray-900" name="gender" id="female" type="radio" />
                            <label className="ml-2 text-sm" htmlFor="female">Female</label>
                        </div>
                    </div>
                </div>

                <div onClick={handleSubmit} className="w-full my-3">
                    <button type="submit" className="w-full rounded-md text-sm py-2 font-semibold bg-red-700 text-white hover:bg-red-800 duration-150 ease-in-out">{
                        loading ? <ImSpinner8 className="animate-spin mx-auto text-xl" /> : "Update Profile"
                    }</button>
                </div>
            </form>
        </div>
    )
}

export default UpdateProfile;