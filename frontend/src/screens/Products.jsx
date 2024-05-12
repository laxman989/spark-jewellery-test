import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProducts } from "../actions/ProductAction";
import toast from "react-hot-toast";
import Loader from "../components/Loader";
import ProductDetails from "./ProductDetails";

const Products = () => {
    const dispatch = useDispatch();
    const { keyword } = useParams();

    const { loading, products, productsCount, error } = useSelector(state => state.productsReducer);

    const [sort, setSort] = useState("");
    const [collection, setCollection] = useState("");
    const [page, setPage] = useState(1);
    const handleChange = (e) => {
        setSort(e.target.value);
    }

    useEffect(() => {
        if(error) {
            toast.error(error);
        }
        dispatch(getProducts(keyword, sort, collection, page));
        
    }, [dispatch, error, keyword, sort, collection, page]);

    if(loading === true) return <Loader />

    return (
        <div className="w-full text-gray-900">
            <div className="max-w-[1200px] mx-auto gap-8 py-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-semibold">{`Products Count - ${productsCount}`}</h1>
                    <div>
                        <label htmlFor="sort">Collection
                        <select className="ml-2 px-4 py-2 border rounded-md outline-none focus:border-slate-800" name="sort" id="sort" value={collection} onChange={(e) => setCollection(e.target.value)}>
                            <option value="">None</option>
                            <option value="pendants">Pendants</option>
                            <option value="rings">Rings</option>
                            <option value="earings">Earings</option>
                            <option value="bracelets">Bracelets</option>
                            <option value="nosePin">Nose Pin</option>
                            <option value="mangalsutra">Mangalsutra</option>
                        </select>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="sort">Sort By
                        <select className="ml-2 px-4 py-2 border rounded-md outline-none focus:border-slate-800" name="sort" id="sort" value={sort} onChange={(e) => setSort(e.target.value)}>
                            <option value="">None</option>
                            <option value="new">What's New</option>
                            <option value="popularity">Popularity</option>
                            <option value="betterDiscount">Better Discount</option>
                            <option value="priceHighToLow">Price: High to Low</option>
                            <option value="priceLowToHigh">Price: Low to High</option>
                            <option value="betterRating">Customer Rating</option>
                        </select>
                        </label>
                    </div>
                </div>
                <div className="grid md:grid-cols-5 sm:grid-cols-4 grid-cols-2 gap-4">
                    {
                        products && products.map(product => (
                            <ProductDetails product={product} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Products;