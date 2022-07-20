import React from 'react';
import cl from './Product.module.css';
import Button from '../Button/Button';
import { ProductProps } from './Product.props';


const Product = ({ setQuantityProducts, product, setDate, data, quantityProducts }: ProductProps) :JSX.Element => {
    const addCart = () => {
        if (!product.isInCart) {
           
            setDate([...data, {...product, isInCart: true}]);
            setQuantityProducts((prevCount) => {
                return prevCount + 1;
            });
        } else {
            setDate([...data, {...product, isInCart: false}]);
            setQuantityProducts((prevCount) => {
                return prevCount - 1;
            });
        }
    };

    const color =
        product.color === 'red' ? 'красный' : product.color === 'yellow' ? 'желтый' : 'белый';

    return (
        <div className={cl.product}>
            <img className={cl.img} src={product.img} alt="product" />
            <h2 className={cl.title}>{product.title}</h2>
            <div className={cl.characteristic}>
                <div className={cl.quantity}>Количество: {product.quantity}</div>
                <div className={cl.year}>Год выхода: {product.yearOfRelease} г.</div>
                <div className={cl.price}>Производитель: {product.producer}</div>
                <div className={cl.color}>Цвет: {color}</div>
                <div className={cl.cameras}>Количество камер: {product.numberOfCameras}</div>
                <div className={cl.popular}>
                    Популярный: {product.popular === 'isPopular' ? 'Да' : 'Нет'}
                </div>
            </div>
            <Button className={product.isInCart ? cl.buttonToCart : cl.button} onClick={addCart}>
                {quantityProducts >= 20 && !product.isInCart
                    ? 'Извините, все слоты заполнены'
                    : quantityProducts < 20 && !product.isInCart
                    ? 'Добавить товар в корзину'
                    : 'Товар добавлен в корзину'}
            </Button>
        </div>
    );
};

export default Product;