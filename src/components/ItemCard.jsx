import { Link } from "react-router-dom";

export const ItemCard = ({ product = {} }) => {
    const { 
        id = 0, 
        name = "Product Name", 
        category = "Category", 
        oldPrice = 0, 
        price = 0, 
        rating = 0, 
        img = "" 
    } = product;

    return (
        <Link
            to={`/product/${id}`}
            className="bg-[#f9f8f8] rounded-xl p-2 w-full max-w-[315px] mx-auto shadow hover:shadow-lg transition-all duration-300 hover:scale-105"
        >
            <span className="text-xs md:text-sm bg-main text-white px-2 py-1 rounded-md inline-block">
                {category || "Category"}
            </span>
            <img src={img} alt={name} className="w-full my-3 h-auto min-h-[180px] object-contain" />
            <h3 className="text-base md:text-lg font-semibold mt-2 mb-2">{name}</h3>
            <div className="flex justify-between items-center">
                <div className="flex gap-2">
                    {oldPrice > 0 && (
                        <p className="line-through text-gray-400 text-sm md:text-base">${oldPrice.toFixed(2)}</p>
                    )}
                    <p className="text-base md:text-lg font-bold text-MainGreen">${price.toFixed(2)}</p>
                </div>
                <p className="text-yellow-500 text-sm md:text-base">{'★'.repeat(rating || 0)}</p>
            </div>
        </Link>
    );
};

