import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { IoInformationCircleOutline } from "react-icons/io5";
import { useState } from "react";
import ProductImagesCarousel from "../components/ProductImagesCarousel";
import { IoCartOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { GoShieldCheck } from "react-icons/go";
import { BsAward } from "react-icons/bs";
import PageNotFound from "./PageNotFound";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../actions/ProductAction";

const products = [
    {
        id: "1",
        name: "Rose Gold Mother's Love Necklace",
        metal: "Gold",
        collection: "Pendant",
        description: "A stunning pendant featuring a genuine sapphire gemstone surrounded by sparkling diamonds. Crafted in 14k white gold.",
        price: 5799,
        discountPrice: 2899,
        stock: 5,
        images: [
            {   imageId: 1,
                image: "https://www.giva.co/cdn/shop/products/PD0866_2.jpg?v=1656053387&width=713"
            },
            {   imageId: 2,
                image: "https://www.giva.co/cdn/shop/products/PD0866_2.jpg?v=1656053387&width=713"
            },
            {   imageId: 3,
                image: "https://www.giva.co/cdn/shop/products/PD0866_4_4.jpg?v=1656070758&width=713"
            },
        ],
        keywords: ["necklace", "pendants", "rose gold", "mothers", "gold necklace"],
        reviews: [
            {
                user: "Laxman Choudhary",
                rating: 5,
                review: "This is the best necklace I have ever purchased. It is made of 100% pure gold. I am very happy with the quality of the product. I would recommend this product to everyone.",
            },
            {
                user: "Rahul Choudhary",
                rating: 3,
                review: "Price is less but quality is average.",
            },
        ],
        ratingCount: 4,
        orderCount: 2,
    },
    {
        id: "2",
        name: "Sparkling Sapphire Pendant",
        metal: "Silver",
        color: "Rose Gold",
        collection: "Pendant",
        description: "A stunning pendant featuring a genuine sapphire gemstone surrounded by sparkling diamonds. Crafted in 14k white gold. ",
        price: 3099,
        discountPrice: 1899,
        stock: 8,
        images: [
            {   imageId: 1,
                image: "https://www.giva.co/cdn/shop/products/PD0866_1.jpg?v=1655989055&width=713"
            },
            {   imageId: 2,
                image: "https://www.giva.co/cdn/shop/products/PD0866_2.jpg?v=1656053387&width=713"
            },
            {   imageId: 3,
                image: "https://www.giva.co/cdn/shop/products/PD0866_4_4.jpg?v=1656070758&width=713"
            },
        ],
        keywords: ["necklace", "pendants", "silver", "mothers", "gold necklace"],
        reviews: [
            {
                user: "Kalpesh Choudhary",
                rating: 4,
                review: "This is the best necklace I have ever purchased. It is made of 100% pure gold. I am very happy with the quality of the product. I would recommend this product to everyone.",
            },
            {
                user: "Khushant Choudhary",
                rating: 2,
                review: "Price is less but quality is average.",
            },
            {
                user: "Kalpesh Choudhary",
                rating: 3,
                review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore recusandae ex alias ipsam temporibus! Asperiores laboriosam cupiditate sed in distinctio!",
            },
            {
                user: "Khushant Choudhary",
                rating: 2,
                review: "Price is less but quality is average.",
            },
            {
                user: "Kalpesh Choudhary",
                rating: 3,
                review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore recusandae ex alias ipsam temporibus! Asperiores laboriosam cupiditate sed in distinctio!",
            },
            {
                user: "Khushant Choudhary",
                rating: 2,
                review: "Price is less but quality is average.",
            },
            {
                user: "Kalpesh Choudhary",
                rating: 3,
                review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore recusandae ex alias ipsam temporibus! Asperiores laboriosam cupiditate sed in distinctio!",
            },
        ],
        ratingCount: 3.5,
        orderCount: 6,
    },
    {
        id: "3",
        name: "Rose Gold Mother's Love Necklace",
        metal: "Gold",
        collection: "Pendant",
        description: "A stunning pendant featuring a genuine sapphire gemstone surrounded by sparkling diamonds. Crafted in 14k white gold.",
        price: 5799,
        discountPrice: 3000,
        stock: 5,
        images: [
            {   imageId: 1,
                image: "https://www.giva.co/cdn/shop/products/PD0866_4_4.jpg?v=1656070758&width=713"
            },
            {   imageId: 2,
                image: "https://www.giva.co/cdn/shop/products/PD0866_2.jpg?v=1656053387&width=713"
            },
            {   imageId: 3,
                image: "https://www.giva.co/cdn/shop/products/PD0866_4_4.jpg?v=1656070758&width=713"
            },
            {   imageId: 4,
                image: "https://www.giva.co/cdn/shop/products/PD0866_2.jpg?v=1656053387&width=713"
            },
            {   imageId: 5,
                image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/k/j/h/-original-imahyexbfrerv6gx.jpeg?q=70&crop=false"
            },
        ],
        keywords: ["necklace", "pendants", "rose gold", "mothers", "gold necklace"],
        reviews: [
            {
                user: "Laxman Choudhary",
                rating: 5,
                review: "This is the best necklace I have ever purchased. It is made of 100% pure gold. I am very happy with the quality of the product. I would recommend this product to everyone.",
            },
            {
                user: "Rahul Choudhary",
                rating: 3,
                review: "Price is less but quality is average.",
            },
            {
                user: "Rahul Choudhary",
                rating: 3,
                review: "Price is less but quality is average.",
            },
            {
                user: "Rahul Choudhary",
                rating: 3,
                review: "Price is less but quality is average.",
            },
            {
                user: "Rahul Choudhary",
                rating: 3,
                review: "Price is less but quality is average.",
            },
        ],
        ratingCount: 4,
        orderCount: 2,
    },
    {
        id: "4",
        name: "Sparkling Sapphire Pendant",
        metal: "Silver",
        collection: "Pendant",
        description: "A stunning pendant featuring a genuine sapphire gemstone surrounded by sparkling diamonds. Crafted in 14k white gold.",
        price: 3099,
        discountPrice: 1899,
        stock: 8,
        images: [
            {   imageId: 1,
                image: "https://www.giva.co/cdn/shop/products/PD0866_1.jpg?v=1655989055&width=713"
            },
            {   imageId: 2,
                image: "https://www.giva.co/cdn/shop/products/PD0866_2.jpg?v=1656053387&width=713"
            },
            {   imageId: 3,
                image: "https://www.giva.co/cdn/shop/products/PD0866_4_4.jpg?v=1656070758&width=713"
            },
        ],
        keywords: ["necklace", "pendants", "silver", "mothers", "gold necklace"],
        reviews: [
            {
                user: "Kalpesh Choudhary",
                rating: 5,
                review: "This is the best necklace I have ever purchased. It is made of 100% pure gold. I am very happy with the quality of the product. I would recommend this product to everyone.",
            },
            {
                user: "Khushant Choudhary",
                rating: 5,
                review: "Price is less but quality is average.",
            },
            {
                user: "Khushant Choudhary",
                rating: 5,
                review: "Price is less but quality is average.",
            },
        ],
        ratingCount: 5,
        orderCount: 6,
    },
];

const ProductDetails = () => {
    const { productId } = useParams();
    // const [product, setProduct] = useState({});

    const [quantity, setQuantity] = useState(1);

    const dispatch = useDispatch();
    const { loading, product, error } = useSelector(state => state.productDetailsReducer);

    const decreaseQuantity = () => {
        (quantity > 1) ? setQuantity(quantity-1) : setQuantity(quantity)
    }
    const increaseQuantity = () => {
        (quantity < product.stock && quantity < 4) ? setQuantity(quantity+1) : setQuantity(quantity)
    }

    useEffect(() => {
        dispatch(getProductDetails(productId));
    }, [dispatch, productId])

    useEffect(() => {
        window.scrollTo(0, 0)
      }
    );


    return(
        <>
            {product && <div className="w-full text-gray-900">
                <div className="max-w-[1200px] mx-auto grid sm:grid-cols-5 grid-cols-1 gap-8 py-4">
                    <div className="sm:col-span-3 col-span-1 w-full">
                        <ProductImagesCarousel data={product.images} />
                    </div>
                    <div className="sm:col-span-2 col-span-1 flex flex-col gap-2">
                        <p className="text-2xl font-semibold">{product.name}</p>
                        <p className="text-sm text-gray-600 font-bold">{product.metal}</p>

                        <div className="flex items-center gap-2">
                            <div className="flex items-center">
                                {Array(5).fill(null).map((_, index) => (
                                    <FaStar size={16} key={index} className={index < Math.round(product.ratingCount) ? "text-yellow-500" : "text-gray-300"} />
                                ))}
                            </div>
                            <p>{product.reviews?.length} reviews</p>
                        </div>

                        {!product.discountPrice ? <div className="flex items-center gap-2">
                            <p className="text-red-700 text-3xl font-bold">Rs {product.price}</p>
                            <span className="relative">
                                <IoInformationCircleOutline className="text-sm text-gray-500 cursor-pointer" />
                                <span className="bg-gray-300 absolute bottom-4 rounded w-max px-3 left-0 opacity-0">Inclusive of all taxes.</span>
                            </span>
                        </div> :
                        <div className="flex items-center gap-2 p-4 rounded bg-gradient-to-br from-red-500 to-red-900">
                            <span className="text-white text-3xl font-semibold">Rs {product.discountPrice}</span> 
                            <span className="text-gray-200 text-sm line-through">Rs {product.price}</span>
                            <span className="relative">
                                <IoInformationCircleOutline className="text-sm text-gray-200 cursor-pointer" />
                                <span className="bg-gray-300 absolute bottom-4 rounded w-max px-3 left-0 opacity-0">Inclusive of all taxes.</span>
                            </span>
                        </div> }
                        
                        <p className={product.stock < 1 ? "text-red-700 text-sm font-medium" : "text-green-700 text-sm font-medium"}>{product.stock < 1 ? "Out of stock" : "In stock"}</p>

                        <div className="flex items-center gap-4 text-lg">
                            <GoShieldCheck />
                            <span>8-Month Warranty</span>
                        </div>
                        <div className="flex items-center gap-4 text-lg">
                            <BsAward />
                            <span>Trustmark Certified</span>
                        </div>

                        <p>{product.description}</p>

                        <div className="flex items-center gap-4">
                            <div className="flex items-center font-thin bg-white border rounded p-2 w-max">
                                <button disabled={quantity <= 1 ? true : false}>
                                    <AiOutlineMinus onClick={decreaseQuantity} size={18} className={quantity <= 1 ? "text-gray-300" : "cursor-pointer"} />
                                </button>
                                <p className="font-semibold mx-6">{quantity}</p>
                                <button disabled={quantity >= 4 ? true : false}>
                                    <AiOutlinePlus onClick={increaseQuantity} size={18} className={quantity >= 4 ? "text-gray-300" : "cursor-pointer"} />
                                </button>
                            </div>

                            <div className="w-full my-3">
                                <button type="submit" className="w-full rounded text-sm py-2 font-semibold bg-red-700 text-white hover:bg-red-800 duration-150 ease-in-out flex items-center justify-center gap-2">
                                    <IoCartOutline size={20} />
                                    <span>Add to Cart</span>
                                </button>
                            </div>
                        </div>

                        {/* <div>
                            <h1 className="font-semibold">Additional Details</h1>
                            <p>Metal: Silver</p>
                            <p>Color: Rose Gold</p>
                            <p></p>
                        </div> */}
                    </div>
                </div>

                <div className="max-w-[1200px] mx-auto py-4">
                    <h2 className="text-xl text-gray-900 font-semibold">Reviews</h2>
                    <div className="grid sm:grid-cols-4 grid-cols-2 gap-4 my-3">
                        {
                            product.reviews && product.reviews.map((item, index) => (
                                <div className="flex flex-col gap-2 rounded shadow border p-2 flex-1">
                                    <div>
                                        <div className="">
                                            <p className="font-semibold text-sm leading-6">{item.user}</p>
                                            <div className="flex items-center">
                                                {Array(5).fill(null).map((_, index) => (
                                                    <FaStar size={14} key={index} className={index < item.rating ? "text-yellow-500" : "text-gray-300"} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <p className="text-sm text-gray-600">{item.review}</p>
                                        
                                    {/* <p className="absolute bottom-1 right-1 text-sm text-gray-600 text-right">5/4/2024</p> */}
                                </div>
                            ))
                        }
                    </div>
                    {product.reviews && product.reviews.length > 8 ? <div className="my-3 grid place-items-center">
                        <button type="submit" className="rounded text-sm px-4 py-2 font-semibold bg-red-700 text-white hover:bg-red-800 duration-150 ease-in-out flex items-center justify-center gap-2">
                            <span>Load More Reviews</span>
                        </button>
                    </div> : ""}
                </div>
            </div>}
        </>
    )
}

export default ProductDetails;