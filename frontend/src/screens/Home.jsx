import React from "react"; 
import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const images = ["https://www.giva.co/cdn/shop/files/Hero_web_Bestsellers-min.jpg?v=1714041427&width=3000", "https://www.giva.co/cdn/shop/files/Hero_web_Gold_Jewellery_2_-min.jpg?v=1714163504&width=3000" ];

const specialBanners = [
    {
        image: "https://res.cloudinary.com/df9vmrdna/image/upload/v1714287618/SPARK%20Jewellery/specialBanners/t94chsdyaehh21s2myyw.webp",
    },
    {
        image: "https://res.cloudinary.com/df9vmrdna/image/upload/v1714287618/SPARK%20Jewellery/specialBanners/i6vo1buaiy77osedm7s4.webp",
    },
    {
        image: "https://res.cloudinary.com/df9vmrdna/image/upload/v1714287616/SPARK%20Jewellery/specialBanners/dazy8jthneoibpwmcgz3.webp",
    },
];

const collections = [
    {
        image: "https://res.cloudinary.com/df9vmrdna/image/upload/v1714291885/SPARK%20Jewellery/collections/pendants_wndu5s.webp",
        name: "Pendants",
    },
    {
        image: "https://res.cloudinary.com/df9vmrdna/image/upload/v1714291888/SPARK%20Jewellery/collections/rings_hdhzsv.webp",
        name: "Rings",
    },
    {
        image: "https://res.cloudinary.com/df9vmrdna/image/upload/v1714291877/SPARK%20Jewellery/collections/earrings_srxoi9.webp",
        name: "Earrings",
    },
    {
        image: "https://res.cloudinary.com/df9vmrdna/image/upload/v1714291802/SPARK%20Jewellery/collections/bracelets_w33sy6.webp",
        name: "Bracelets",
    },
    {
        image: "https://res.cloudinary.com/df9vmrdna/image/upload/v1714312020/SPARK%20Jewellery/collections/chains_vcl4ar.webp",
        name: "Chains",
    },
    {
        image: "https://res.cloudinary.com/df9vmrdna/image/upload/v1714291880/SPARK%20Jewellery/collections/mangalsutras_hzykud.webp",
        name: "Mangalsutras",
    },
    {
        image: "https://res.cloudinary.com/df9vmrdna/image/upload/v1714291882/SPARK%20Jewellery/collections/nosepins_w8vuve.webp",
        name: "Nose Pins",
    },
    {
        image: "https://res.cloudinary.com/df9vmrdna/image/upload/v1714291899/SPARK%20Jewellery/collections/toerings_djresk.webp",
        name: "Toe Rings",
    },
];

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
        ],
        ratingCount: 5,
        orderCount: 6,
    },
    {
        id: "3",
        name: "Rose Gold Mother's Love Necklace",
        metal: "Gold",
        collection: "Pendant",
        description: "A stunning pendant featuring a genuine sapphire gemstone surrounded by sparkling diamonds. Crafted in 14k white gold.",
        price: 5799,
        discountPrice: 2899,
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

const Home = () => {
    return(
        <>
            <Carousel items={images} />
            <div className="z-20 w-full text-gray-900">
                <div className="max-w-[1200px] mx-auto">
                    {/* collections */}
                    <div className="my-8">
                        <h1 className="text-3xl font-light">Collections</h1>
                        <div className="flex items-center justify-between gap-8 py-8">
                            {
                                collections.map((item, index) => (
                                    <Link to={`/collections/${item.name}`} key={index}>
                                        <img src={item.image} alt={item.name} className="rounded-lg shadow-md shadow-gray-300 hover:scale-105 transition-all duration-500" />
                                        <p className="text-center text-sm mt-1">{item.name}</p>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>

                    {/* special banners */}
                    <div className="flex items-center justify-between gap-8 my-8">
                    {
                        specialBanners.map((item, index) => (
                            <div key={index} className="">
                                <img src={item.image} alt={"img"} className="w-full h-full object-cover" />
                            </div>
                        ))
                    }
                    </div>

                    {/* special offers */}
                    <div className="my-8">
                        <div className="flex items-center justify-between">
                            <h1 className="text-3xl font-light">Special Offers</h1>
                            <Link to={"/products"} className="text-sm font-normal text-gray-500 cursor-pointer hover:underline">View All</Link>
                        </div>
                        <div className="flex items-center justify-between gap-8 py-8">
                        {
                            products.map((item, index) => (
                                <div key={item.id} className="rounded-lg shadow-md overflow-hidden bg-white w-1/4">
                                    <div className="relative">
                                        <img className="w-full h-48 object-cover" src={item.images[0].image} alt={item.images[0].image} />
                                        <div className="shadow flex items-center justify-center bg-gray-100 text-sm rounded-full absolute bottom-0 left-0 m-4 px-2">
                                            <span>{item.ratingCount}</span>
                                            <FaStar className="text-yellow-500" />
                                            <span className="px-1">|</span>
                                            <span>{item.reviews.length}</span>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h5 className="text-xl font-light tracking-tight text-gray-900 text-nowrap overflow-hidden text-ellipsis">
                                        {item.name}
                                        </h5>
                                        <p className="mt-1 text-md font-bold text-gray-700">Rs {item.discountPrice.toFixed(2)}</p>
                                    </div>
                                    <div className="flex items-center justify-between px-4 pb-2">
                                        <Link
                                        to={`/product/${item.id}`}
                                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800"
                                        >
                                        View Details
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }
                        </div>
                    </div>

                    {/* Most Ordered */}
                    <div className="my-8">
                        <div className="flex items-center justify-between">
                            <h1 className="text-3xl font-light">Most Ordered</h1>
                            <Link to={"/products"} className="text-sm font-normal text-gray-500 cursor-pointer hover:underline">View All</Link>
                        </div>
                        <div className="flex items-center justify-between gap-8 py-8">
                        {
                            products.map((item, index) => (
                                <div key={item.id} className="rounded-lg shadow-md overflow-hidden bg-white w-1/4">
                                    <div className="relative">
                                        <img className="w-full h-48 object-cover" src={item.images[0].image} alt={item.images[0].image} />
                                        <div className="shadow flex items-center justify-center bg-gray-100 text-sm rounded-full absolute bottom-0 left-0 m-4 px-2">
                                            <span>{item.ratingCount}</span>
                                            <FaStar className="text-yellow-500" />
                                            <span className="px-1">|</span>
                                            <span>{item.reviews.length}</span>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h5 className="text-xl font-light tracking-tight text-gray-900 text-nowrap overflow-hidden text-ellipsis">
                                        {item.name}
                                        </h5>
                                        <p className="mt-1 text-md font-bold text-gray-700">Rs {item.discountPrice.toFixed(2)}</p>
                                    </div>
                                    <div className="flex items-center justify-between px-4 pb-2">
                                        <Link
                                        to={`/product/${item.id}`}
                                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800"
                                        >
                                        View Details
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home;