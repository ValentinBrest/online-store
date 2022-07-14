import React from 'react';
import Product from '../../components/Product/Product';
import cl from './Products.module.css';
import {date} from '../../products';
import { useState, useEffect } from 'react';

const ProductsList = ({ setQuantityProducts, products }) => {
    useEffect(() => {
        
    }, [products]);
    return (
        <div className={cl.products}>
            {products.map((_, i) => {
                return (
                    <Product date={date[i]} key={date.title} setQuantityProducts={setQuantityProducts} />
                );
            })}
        </div>
    );
};

export default ProductsList;