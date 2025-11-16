import { Link } from "react-router-dom";

export const ProductCard = ({ item }) => {
    return (
        <Link
            to={`/product/${item.id}`}
            className="bg-[#f9f8f8] rounded-xl p-2 w-[315px] shadow hover:shadow-lg transition"
        >
            <span className="text-sm bg-main text-white px-2 py-1 rounded-md">
                {item.category}
            </span>
            <img src={item.img} alt={item.name} className="w-full my-3 h-50 object-contain" />
            <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
            <div className="flex justify-between">
                <div className="flex gap-2 mt-1">
                    <p className="line-through text-gray-400">${item.oldPrice}</p>
                    <p className="text-lg font-bold text-MainGreen">${item.price}</p>
                </div>
                <p className="text-yellow-500">{'★'.repeat(item.rating)}</p>
            </div>
        </Link>
    );
};
