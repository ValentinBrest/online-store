import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Product } from '../../interfaces/product.interface';

export interface ProductProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    setQuantityProducts: React.Dispatch<React.SetStateAction<number>>;
    product: Product;
    setDate:([]) =>  React.Dispatch<React.SetStateAction<Product[]>>;
    data: Product[];
    quantityProducts: number;
}
