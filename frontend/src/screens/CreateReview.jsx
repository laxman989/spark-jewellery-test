import React, { useState } from "react";
import { ImSpinner8 } from "react-icons/im";
import StarRating from "../components/StarRating";
import DeleteModal from "../components/DeleteModal";

const stars = [
    { value: 5, id: 'star5' },
    { value: 4, id: 'star4' },
    { value: 3, id: 'star3', checked: true },
    { value: 2, id: 'star2' },
    { value: 1, id: 'star1' },
  ];

const CreateReview = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState("");

    const loading = false;

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="w-full text-gray-900">
            <div className="max-w-[1200px] mx-auto grid sm:grid-cols-3 grid-cols-1 gap-4 py-4">
                <div className="col-span-1 bg-gray-50 shadow p-4">
                    
                </div>
                <div className="col-span-2 bg-gray-50 shadow p-4">
                    <h2 className="text-xl font-semibold mb-2">Create Review</h2>
                    <form action="">
                        <StarRating stars={stars} />
                        <div className="w-full my-3">
                            <label className="text-sm font-semibold" htmlFor="title">Title</label>
                            <input value={title} onChange={(e) => setTitle(e.target.value)} className="mt-2 bg-gray-50 w-full text-sm px-2 py-2 outline outline-1 outline-gray-300 focus:bg-white focus:outline-2 focus:outline-gray-900 rounded block" id="title" type="text" placeholder="Enter title" />
                        </div>

                        <div className="w-full my-3">
                            <label className="text-sm font-semibold" htmlFor="description">Description</label>
                            <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="mt-2 bg-gray-50 w-full text-sm px-2 py-2 outline outline-1 outline-gray-300 focus:bg-white focus:outline-2 focus:outline-gray-900 rounded block resize-none" id="description" type="text" placeholder="Enter description" />
                        </div>

                        <div onClick={handleSubmit} className="w-full my-3">
                            <button type="submit" className="w-full rounded-md text-sm py-2 font-semibold bg-red-700 text-white hover:bg-red-800 duration-150 ease-in-out">{
                                loading ? <ImSpinner8 className="animate-spin mx-auto text-xl" /> : "Submit Review"
                            }</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateReview;