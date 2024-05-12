import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import { ImSpinner8 } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import EmptyCart from "../components/EmptyCart";

const cartItems = [
    {
        id: "1",
        name: "Rose Gold Mother's Love Necklace",
        metal: "Gold",
        collection: "Pendant",
        description: "A stunning pendant featuring a genuine sapphire gemstone surrounded by sparkling diamonds. Crafted in 14k white gold.",
        quantity: 2,
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
        collection: "Pendant",
        description: "A stunning pendant featuring a genuine sapphire gemstone surrounded by sparkling diamonds. Crafted in 14k white gold.",
        quantity: 1,
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
        ],
        ratingCount: 5,
        orderCount: 6,
    },
    {
        id: "3",
        name: "Sparkling Sapphire Pendant",
        metal: "Silver",
        collection: "Pendant",
        description: "A stunning pendant featuring a genuine sapphire gemstone surrounded by sparkling diamonds. Crafted in 14k white gold.",
        quantity: 3,
        price: 3099,
        discountPrice: 1899,
        stock: 8,
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
        ],
        ratingCount: 5,
        orderCount: 6,
    },
    {
        id: "4",
        name: "Sparkling Sapphire Pendant",
        metal: "Silver",
        collection: "Pendant",
        description: "A stunning pendant featuring a genuine sapphire gemstone surrounded by sparkling diamonds. Crafted in 14k white gold.",
        quantity: 1,
        price: 3099,
        discountPrice: 1899,
        stock: 8,
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
]

const cartEmpty = false;

const Cart = () => {
    
    const navigate = useNavigate();
    const loading = false;
    const shippingCharges = 99;

    const decreaseQuantity = (id, quantity, stock) => {
        let newQuantity = quantity - 1;
        if(newQuantity <= 1) {
            return
        }
        // dispatch(addToCart(id, newQuantity));
    }
    const increaseQuantity = (id, quantity, stock) => {
        let newQuantity = quantity + 1;
        if(newQuantity >= stock || newQuantity > 4) {
            return 
        }
        // dispatch(addToCart(id, newQuantity));
    }

    const handleCheckout = () => {
        navigate("/login?redirect=shipping");
    }

    return (
        cartEmpty ? <EmptyCart /> :
        <div className="w-full text-gray-900">
            <div className="max-w-[1200px] mx-auto grid sm:grid-cols-3 grid-cols-1 gap-8 py-4">
                <div className="sm:col-span-2 col-span-1">
                    {cartItems.map((product, index) => (
                        <div className="bg-gray-50 mb-2 p-2 shadow flex items-center justify-between rounded gap-2">
                            <img className="sm:w-24 sm:h-24 w-20 h-20 object-contain rounded" src={product.images[0].image} alt="productImage" />
                            <div className="flex mb-2 flex-1">
                                <div className="flex flex-col justify-between ml-2">
                                    <div>
                                        <p className="sm:text-lg text-sm text-gray-900 font-normal">{product.name}</p>
                                    </div>
                                    <p className="text-gray-900 text-lg">
                                        <span className="font-medium">₹{product.discountPrice}</span>
                                        {/* <span className="text-gray-400 text-[14px] font-medium line-through mx-2">Rs {product.price}</span> */}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center font-thin bg-white border rounded p-1">
                                <button disabled={product.quantity <= 1 ? true : false}>
                                    <AiOutlineMinus onClick={() => decreaseQuantity(product.product, product.quantity, product.stock)} size={18} className={product.quantity <= 1 ? "text-gray-300" : "cursor-pointer"} />
                                </button>
                                <p className="font-semibold mx-4">{product.quantity}</p>
                                <button disabled={product.quantity >= 4 ? true : false}>
                                    <AiOutlinePlus onClick={() => increaseQuantity(product.product, product.quantity, product.stock)} size={18} className={product.quantity >= 4 ? "text-gray-300" : "cursor-pointer"} />
                                </button>
                            </div>

                            <button className="text-red-700 hover:text-red-800 hover:scale-105 duration-200 ease-in-out"><MdDeleteOutline size={24} /></button>
                        </div>
                    ))}
                </div>
                <div className="col-span-1">
                    <div className="rounded shadow bg-gray-50 p-2">
                        <h2 className="text-xl text-gray-900 font-semibold">Order Summary</h2>

                        <div className="my-3">
                            <div className="flex items-center justify-between text-gray-900 leading-7">
                                <p>Sub Total</p>
                                <p>
                                    {cartItems.reduce((acc, item) => acc + (item.quantity * item.discountPrice), 0)}
                                </p>
                            </div>
                            <div className="flex items-center justify-between text-gray-900 leading-7">
                                <p>Discount</p>
                                <p className="">
                                    - {cartItems.reduce((acc, item) => acc + (item.quantity * (item.price - item.discountPrice)), 0)}
                                </p>
                            </div>
                            <div className="flex items-center justify-between text-gray-900 leading-7">
                                <p>Shipping Charges</p>
                                <p>{shippingCharges}</p>
                            </div>
                        </div>
                                
                        <div className="flex items-center justify-between font-semibold text-md text-gray-900 py-3 my-3 border-t border-gray-300">
                            <p>Total <span className="text-sm">(in indian currency)</span></p>
                            <p>
                                Rs {shippingCharges + cartItems.reduce((acc, item) => acc + (item.quantity * item.discountPrice), 0)}
                            </p>
                        </div>

                        <button onClick={handleCheckout} type="submit" className="w-full rounded-md text-sm py-2 font-semibold bg-red-700 text-white hover:bg-red-800 duration-150 ease-in-out">{
                            loading ? <ImSpinner8 className="animate-spin mx-auto text-xl" /> : "Checkout"
                        }</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;