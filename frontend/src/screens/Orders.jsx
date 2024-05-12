import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const products = [
    {
        id: 1,
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
        id: 2,
        name: "Sparkling Sapphire Pendant",
        metal: "Silver",
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
            }
        ],
        ratingCount: 3.5,
        orderCount: 6,
    },
]

const myOrders = [
    {
        id: 1,
        name: "Rose Gold Mother's Love Necklace",
        metal: "Gold",
        collection: "Pendant",
        description: "A stunning pendant featuring a genuine sapphire gemstone surrounded by sparkling diamonds. Crafted in 14k white gold.",
        price: 5799,
        discountPrice: 2899,
        quantity: 5,
        images: [
            {   imageId: 1,
                image: "https://www.giva.co/cdn/shop/products/PD0866_1.jpg?v=1655989055&width=713"
            },
            {   imageId: 2,
                image: "https://www.giva.co/cdn/shop/products/PD0866_2.jpg?v=1656053387&width=713"
            }
        ],
        payment: {
            method: "cod",
            status: "Pending"
        },
        status: "Processing",
        shippedAt: "5/5/2024",
        deliveredAt: "5/6/2024",
        cancelledAt: "5/7/2024",
        createdAt: "5/4/2024"
    },
    {
        id: 2,
        name: "Rose Gold Mother's Love Necklace",
        metal: "Silver",
        collection: "Pendant",
        description: "A stunning pendant featuring a genuine sapphire gemstone surrounded by sparkling diamonds. Crafted in 14k white gold.",
        price: 5799,
        discountPrice: 2899,
        quantity: 5,
        images: [
            {   imageId: 1,
                image: "https://www.giva.co/cdn/shop/products/PD0866_2.jpg?v=1656053387&width=713"
            },
            {   imageId: 2,
                image: "https://www.giva.co/cdn/shop/products/PD0866_1.jpg?v=1655989055&width=713"
            },
        ],
        payment: {
            method: "card",
            status: "Completed"
        },
        status: "Shipped",
        shippedAt: "5/5/2024",
        deliveredAt: "5/6/2024",
        cancelledAt: "5/7/2024",
        createdAt: "5/4/2024"
    },
    {
        id: 3,
        name: "Rose Gold Mother's Love Necklace",
        metal: "Silver",
        collection: "Pendant",
        description: "A stunning pendant featuring a genuine sapphire gemstone surrounded by sparkling diamonds. Crafted in 14k white gold.",
        price: 5799,
        discountPrice: 2899,
        quantity: 5,
        images: [
            {   imageId: 1,
                image: "https://www.giva.co/cdn/shop/products/PD0866_2.jpg?v=1656053387&width=713"
            },
            {   imageId: 2,
                image: "https://www.giva.co/cdn/shop/products/PD0866_1.jpg?v=1655989055&width=713"
            },
        ],
        payment: {
            method: "card",
            status: "Completed"
        },
        status: "Delivered",
        shippedAt: "5/5/2024",
        deliveredAt: "5/6/2024",
        cancelledAt: "5/7/2024",
        createdAt: "5/4/2024"
    },
]

const Orders = () => {
    return (
        <div className="w-full text-gray-900">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 gap-4 py-4">
                {
                    myOrders.map((order) => (
                        <Link to={`/account/order/${order.id}`} key={order.id} className="rounded border hover:shadow flex items-start justify-between p-2 gap-4">
                            <img className="sm:w-24 sm:h-24 w-20 h-20 object-contain rounded" src={order.images[0].image} alt="productImage" />
                            <div className="flex-grow pt-2">
                                <p className="">{order.name}</p>
                                <p className="font-semibold text-sm">{order.metal}</p>
                            </div>
                            <div className="flex-grow pt-2">
                                <p className="font-semibold">Rs {order.discountPrice}</p>
                            </div>
                            <div className="flex-grow pt-2">
                                <p className="flex items-center gap-2">
                                    <p className={`h-3 w-3 rounded-full ${order.status === "Delivered" ? "bg-green-600" : order.status === "Shipped" ? "bg-blue-500" : "bg-orange-500"}`}></p>
                                    <p className="font-semibold">{order.status === "Delivered" ? `${order.status} on ${order.deliveredAt}` : order.status === "Shipped" ? `${order.status} on ${order.shippedAt}` : order.status}</p>
                                </p>
                                <p className="text-sm">
                                    {order.status === "Delivered" ? "Your product has been delivered" : order.status === "Shipped" ? "Your product has been shipped" : "Your product is under processing" }
                                </p>
                                {order.status === "Delivered" && <button className="mt-2 rounded text-sm font-semibold text-red-700 hover:underline duration-150 ease-in-out flex items-center gap-2">
                                    <FaStar />
                                    <span>Rate & Review Product</span>
                                </button>}
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Orders;