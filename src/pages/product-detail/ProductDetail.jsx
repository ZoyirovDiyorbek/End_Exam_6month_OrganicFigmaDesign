import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { items, organicItems, seasonal } from '../../content/items';
import baner from "../../images/banners/ProductBanner.png"
import { Button } from '../../components/Button';
import { PageHeader } from '../../components/PageHeader';

export const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    let selectedProduct = items.find((b) => b.id === Number(id));
    if (!selectedProduct) {
        selectedProduct = organicItems.find((b) => b.id === Number(id));
        if (!selectedProduct) {
            selectedProduct = seasonal.find((b) => b.id === Number(id));
            if (!selectedProduct) {
                return <h1 className='container text-4xl md:text-6xl lg:text-8xl py-8 md:py-12'>Not Found</h1>
            }
        }
    }

    const {
        name = "Product Name",
        category = "Category",
        oldPrice = 0,
        price = 0,
        rating = 0,
        img = ""
    } = selectedProduct || {};

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white">
            <PageHeader image={baner} heading={"Shop Single"} />

            <div className="container px-4 py-8 md:py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                    <div className="relative">
                        <div className="bg-gray-50 rounded-lg p-6">
                            <span className="absolute top-4 left-4 bg-main text-white px-3 py-1 rounded text-sm font-medium">
                                {category || "Category"}
                            </span>
                            <img
                                src={img}
                                alt={name}
                                className="w-full h-96 object-contain"
                            />
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">{name}</h2>

                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-orange-400 text-xl md:text-2xl">
                                {'★'.repeat(rating || 0)}
                            </span>
                        </div>

                        <div className="flex items-center gap-3 mb-6">
                            {oldPrice > 0 && (
                                <span className="text-lg md:text-xl text-gray-400 line-through">
                                    ${oldPrice.toFixed(2)}
                                </span>
                            )}
                            <span className="text-xl md:text-2xl font-bold text-MainGreen">
                                ${price.toFixed(2)}
                            </span>
                        </div>

                        <p className="text-MainGrey leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                            Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                        </p>

                        <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 mb-6 md:mb-8">
                            <span className="font-bold text-base md:text-lg lg:text-[20px]">Quantity:</span>
                            <div className="flex items-center border border-gray-300 rounded-lg w-full md:w-auto">
                                <span className="w-full md:w-[134px] text-center border-x border-gray-300 py-4 md:py-7">1</span>
                            </div>
                            <Button text={"Add To Cart"} />

                        </div>
                    </div>
                </div>

                <div className="mt-16">
                    <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center">
                        <Button text={"Product Description"} textSize='text-base md:text-xl lg:text-[25px]' />
                        <Button text={"Additional Info"} textSize='text-base md:text-xl lg:text-[25px]' bgcolor='bg-[#eff6f1]' textcolor='text-main' />
                    </div>
                    <div className="py-6 md:py-8 flex justify-center">
                        <p className="text-MainGrey text-center leading-relaxed max-w-4xl text-sm md:text-base">
                            Welcome to the world of natural and organic. Here you can discover the bounty of nature.
                            We have grown all the principles of health ecology, and care. We aim to give you the experience about the organic natural nutrition.
                            It offers about 8% protein, 15% of dietary fiber, B vitamins and dietary minerals in modest amounts.
                        </p>
                    </div>
                </div>

                <div className="mt-16">
                    <h3 className="text-[28px] md:text-[38px] lg:text-5xl font-bold text-center mb-8 md:mb-12">Related Products</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                        {items.filter(p => p.id !== selectedProduct.id).slice(0, 4).map((product) => (
                            <div
                                key={product.id}
                                onClick={() => {
                                    navigate(`/product/${product.id}`);
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition cursor-pointer group"
                            >
                                <div className="relative bg-gray-50 p-6">
                                    <span className="absolute top-3 left-3 bg-main text-white px-2 py-1 rounded text-xs font-medium">
                                        {product.category}
                                    </span>
                                    <img
                                        src={product.img}
                                        alt="img"
                                        className="w-full h-48 object-contain group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-4">
                                    <h4 className="font-semibold mb-2">{product.name}</h4>
                                    <div className="mb-2">
                                        <span className="text-orange-400">{'★'.repeat(product.rating)}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {product.oldPrice && (
                                            <span className="text-sm text-gray-400 line-through">
                                                ${product.oldPrice.toFixed(2)}
                                            </span>
                                        )}
                                        <span className="text-lg font-bold text-MainGreen">
                                            ${product.price.toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}