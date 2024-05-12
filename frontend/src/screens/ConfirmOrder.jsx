import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ImSpinner8 } from "react-icons/im";

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

const ConfirmOrder = () => {
    const navigate = useNavigate();
    const loading = false;
    const shippingCharges = 99;
    const [paymentMethod, setPaymentMethod] = useState("card");
    const [cardNumber, setCardNumber] = useState("");
    const [cardExpiry, setCardExpiry] = useState("");
    const [cardCVV, setCardCVV] = useState("");
    const [cardHolderName, setCardHolderName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`${paymentMethod}: ${cardNumber} - ${cardHolderName}`);
    }

    const handleCheckout = () => {
        navigate("/order/payment");
    }

    return(
        <div className="w-full text-gray-900">
            <div className="max-w-[1200px] mx-auto grid sm:grid-cols-3 grid-cols-1 gap-8 py-4">
                <div className="sm:col-span-2 col-span-1">
                    <div className="bg-gray-50 shadow p-4">
                        <h2 className="text-xl font-semibold mb-2">Shipping Details</h2>
                        <div>
                            <div className="flex">
                                <p className="font-semibold">Name:&nbsp;</p>
                                <span>Laxman Choudhary</span>
                            </div>
                            <div className="flex">
                                <p className="font-semibold">Phone Number:&nbsp;</p>
                                <span>9075467159</span>
                            </div>
                            <div className="flex">
                                <p className="font-semibold">Address:&nbsp;</p>
                                <span>5/B, 205, Ostwal Nagari, Central Park Road, Nallasopara East. 401209 Maharashtra India</span>
                            </div>
                        </div>                    
                    </div>

                    <div className="bg-gray-50 shadow p-4 mt-8">
                        <h2 className="text-xl font-semibold mb-2">Cart Items</h2>
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

                                <div className="flex flex-col items-center">
                                    <p className="text-sm">Quantity</p>
                                    <p className="font-semibold mx-4">{product.quantity}</p>
                                </div>
                            </div>
                        ))}
                    </div>
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

                        <form onSubmit={handleSubmit} className="">
                        <h2 className="text-xl text-gray-900 font-semibold">Payment</h2>
                            <div className="w-full my-3">
                                <label className="text-sm font-semibold" htmlFor="paymentMethod">Payment Method</label>
                                <div className="flex items-center justify-between mt-2 rounded border-red-700 border text-sm font-semibold">
                                    <label className={`flex-1 py-2 rounded-l cursor-pointer ${paymentMethod === "cod" ? "bg-red-700 text-white" : "bg-gray-50 text-red-700"}`}>
                                        <input onClick={(e) => setPaymentMethod(e.target.value)} checked={paymentMethod === "cod"} value="cod" type="radio" name="paymentMethod" className="hidden" />
                                        <p className="text-center">
                                            Cash on Delivery
                                        </p>
                                    </label>
                                    <label className={`flex-1 py-2 rounded-r cursor-pointer ${paymentMethod === "card" ? "bg-red-700 text-white" : "bg-gray-50 text-red-700"}`}>
                                        <input onClick={(e) => setPaymentMethod(e.target.value)} checked={paymentMethod === "card"} value="card" type="radio" name="paymentMethod" className="hidden" />
                                        <p className="text-center">
                                            Credit/Debit Card
                                        </p>
                                    </label>
                                </div>
                            </div>

                            <div className={`w-full my-3 transition-all duration-1000 ease-in-out ${paymentMethod === "cod" ? "hidden" : ""}`}>
                                <div className="w-full my-3">
                                    <label className="text-sm font-semibold" htmlFor="cardNumber">Card Number</label>
                                    <input value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} className="no-spinner mt-2 bg-gray-50 w-full text-sm px-2 py-2 outline outline-1 outline-gray-300 focus:bg-white focus:outline-2 focus:outline-gray-900 rounded block" id="cardNumber" type="number" placeholder="XXXX XXXX XXXX XXXX" />
                                </div>

                                <div className="flex justify-between w-full gap-4 my-3">
                                    <div className="w-1/2">
                                        <label className="text-sm font-semibold" htmlFor="cardExpiry">Expiry</label>
                                        <input value={cardExpiry} onChange={(e) => setCardExpiry(e.target.value)} className="mt-2 bg-gray-50 w-full text-sm px-2 py-2 outline outline-1 outline-gray-300 focus:bg-white focus:outline-2 focus:outline-gray-900 rounded block" id="cardExpiry" type="text" placeholder="XX/XX" />
                                    </div>
                                    <div className="w-1/2">
                                        <label className="text-sm font-semibold" htmlFor="cardCVV">CVV</label>
                                        <input value={cardCVV} onChange={(e) => setCardCVV(e.target.value)} className="no-spinner mt-2 bg-gray-50 w-full text-sm px-2 py-2 outline outline-1 outline-gray-300 focus:bg-white focus:outline-2 focus:outline-gray-900 rounded block" id="cardCVV" type="number" placeholder="***" />
                                    </div>
                                </div>

                                <div className="w-full my-3">
                                    <label className="text-sm font-semibold" htmlFor="cardHolderName">Card Holder Name</label>
                                    <input value={cardHolderName} onChange={(e) => setCardHolderName(e.target.value)} className="no-spinner mt-2 bg-gray-50 w-full text-sm px-2 py-2 outline outline-1 outline-gray-300 focus:bg-white focus:outline-2 focus:outline-gray-900 rounded block" id="cardHolderName" type="text" placeholder="RAHUL SHARMA" />
                                </div>
                            </div>

                            <div onClick={handleSubmit} className="w-full my-3">
                                <button type="submit" className="w-full rounded text-sm py-2 font-semibold bg-red-700 text-white hover:bg-red-800 duration-150 ease-in-out">{
                                    loading ? <ImSpinner8 className="animate-spin mx-auto text-xl" /> : paymentMethod === "cod" ? "Order" : "Pay and Order"
                                }</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmOrder;