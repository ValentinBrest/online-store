import React from 'react';
import Product from '../../components/Product/Product';
import cl from './Products.module.css';

const ProductsList = ({ setQuantityProducts, products }) => {
    return (
        <div className={cl.products}>
            {products.map((item, i) => {
                return (
                    <Product date={item} key={item.title} setQuantityProducts={setQuantityProducts} />
                );
            })}
        </div>
    );
};

export default ProductsList;