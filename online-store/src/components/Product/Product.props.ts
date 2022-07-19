import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ProductProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    setQuantityProducts: React.Dispatch<React.SetStateAction<number>>;
    product: Product;
    setDate: ([]) => Product;
    data: Product[];
    quantityProducts: number;
}

export interface Product {
    title: string;
    quantity: number;
    yearOfRelease: number;
    producer: string;
    color: string;
    numberOfCameras: string;
    popular: string;
    img: string;
    isInCart: boolean;
}
