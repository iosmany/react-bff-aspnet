
import React from 'react';
import Image from 'next/image';
import { Product } from '../../data/products/constants';

const ProductCard = ({ id, name, price, image  }: Product) => {
  
    return (
        <div className="product-card" key={id}>
            <Image src={image} alt={name} width={100} height={100} />
            <h3>{name}</h3>
            <p>{price}</p>
            <button onClick={()=> console.log("Click")}>Add to Cart</button>
        </div>
    );
}

export default ProductCard;
