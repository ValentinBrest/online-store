import React from 'react';
import cl from './Product.module.css';
import Button from './../Button/Button';
import { useState } from 'react';


const Product = (props) => {
    const [isInCart, setIsInCart] = useState(false);
    const addCart = () => {
        if (!isInCart) {
            setIsInCart(true)
            props.setQuantityProducts((prevCount) => {
                return prevCount + 1
            }) 
        } else {
            setIsInCart(false)
            props.setQuantityProducts((prevCount) => {
                return prevCount - 1;
            }); 
        }
    }
	return (
        <div className={cl.product}>
            <img className={cl.img} src={props.date.img} alt="product" />
            <h2 className={cl.title}>{props.date.title}</h2>
            <div className={cl.characteristic}>
                <div className={cl.quantity}>Количество: {props.date.quantity}</div>
                <div className={cl.year}>Год выхода: {props.date.yearOfRelease} г.</div>
                <div className={cl.price}>Производитель: {props.date.producer}</div>
                <div className={cl.mileage}>Цвет: {props.date.color}</div>
                <div className={cl.mileage}>Количество камер: {props.date.numberOfCameras}</div>
                <div className={cl.mileage}>Популярный: {props.date.isPopular ? 'Да' : 'Нет'}</div>
            </div>
            <Button className={isInCart ? cl.buttonToCart : cl.button} onClick={addCart}>
                {isInCart ? 'Товар добавлен в корзину' : 'Добавить в корзину'}
            </Button>
        </div>
    );
};

export default Product;