import React from 'react';
import Product from '../../components/Product/Product';
import { ProductListProps } from './ProductList.props';
import cl from './Products.module.css';

const ProductsList = ({ setQuantityProducts, products, setDate, data, quantityProducts }: ProductListProps): JSX.Element => {
    return (
        <div className={cl.products}>
            {products.length === 0 ? (
                <div className={cl.sorry}>Извините, совпадений не обнаружено</div>
            ) : (
                products.map((item) => {
                    return (
                        <Product
                            data={data}
                            product={item}
                            key={item.title}
                            setQuantityProducts={setQuantityProducts}
                            setDate={setDate}
                            quantityProducts={quantityProducts}
                        />
                    );
                })
            )}
        </div>
    );
};

export default ProductsList;