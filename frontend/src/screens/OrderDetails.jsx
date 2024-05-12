import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

const OrderDetails = () => {

    const { orderId } = useParams();
    const [order, setOrder] = useState({});

    useEffect(() => {
        myOrders.forEach(order => {
            if(order.id === Number(orderId)) {
                setOrder(order);
            }
        })
    }, [orderId, order, setOrder])

    useEffect(() => {
        window.scrollTo(0, 0)
      }
    );

    return (
        <div className="w-full text-gray-900">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 gap-4 py-4">
                <div className="col-span-1 bg-gray-50 shadow p-4">
                    <h2 className="text-xl font-semibold mb-2">Delivery Details</h2>
                    <div>
                        <div className="flex">
                            <span>Laxman Choudhary</span>
                        </div>
                        <div className="flex">
                            <span>9075467159</span>
                        </div>
                        <div className="flex">
                            <span>5/B, 205, Ostwal Nagari, Central Park Road, Nallasopara East. 401209 Maharashtra India</span>
                        </div>
                    </div>                    
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default OrderDetails;