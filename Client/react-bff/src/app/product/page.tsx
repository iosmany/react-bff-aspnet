'use client'

import { useState, useEffect } from "react";
import ProductCard from "./components/productCard";
import { Product } from "../data/products/constants";

interface ProductPageProps {
    id: string;
}

const ProductPage = ({ id }: ProductPageProps) => {

    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
       setProduct({
            id: 1,
            name: "Product 1",
            price: 100,
            image: "https://i1.perfumesclub.com/grandewp/103837.webp"
       })
    }, [id]);

    return (
        <div>
        {product && <ProductCard {...product} />}
        </div>
    );
}

export default ProductPage;