import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    return(
        <div key={product.id} className="rounded-lg shadow-md overflow-hidden bg-white w-1/4">
            <div className="relative">
                <img className="w-full h-48 object-cover" src={product.images[0].image} alt={product.images[0].image} />
                <div className="shadow flex products-center justify-center bg-gray-100 text-sm rounded-full absolute bottom-0 left-0 m-4 px-2">
                    <span>{product.ratingCount}</span>
                    <FaStar className="text-yellow-500" />
                    <span className="px-1">|</span>
                    <span>{product.reviews.length}</span>
                </div>
            </div>
            <div className="p-4">
                <h5 className="text-xl font-light tracking-tight text-gray-900 text-nowrap overflow-hidden text-ellipsis">
                {product.name}
                </h5>
                <p className="mt-1 text-md font-bold text-gray-700">Rs {product.discountPrice.toFixed(2)}</p>
            </div>
            <div className="flex products-center justify-between px-4 pb-2">
                <Link
                to={`/product/${product.id}`}
                className="inline-flex products-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800"
                >
                View Details
                </Link>
            </div>
        </div>
    )
}

export default ProductCard;