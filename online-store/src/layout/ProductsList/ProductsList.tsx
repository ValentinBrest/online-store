import React from 'react';
import Product from '../../components/Product/Product';
import { ProductsListProps } from './ProductsList.props';
import cl from './ProductsList.module.css';

const ProductsList = ({ setQuantityProducts, products, setProducts, data, quantityProducts }: ProductsListProps): JSX.Element => {
    return (
        <div className={cl.products}>
            {products.length === 0 ? (
                <div className={cl.sorry}>Извините, совпадений не обнаружено</div>
            ) : (
                products.map((item) => {
                    return (
                        <Product
                            products={products}
                            product={item}
                            key={item.title}
                            setQuantityProducts={setQuantityProducts}
                            setProducts={setProducts}
                            quantityProducts={quantityProducts}
                        />
                    );
                })
            )}
        </div>
    );
};

export default ProductsList;