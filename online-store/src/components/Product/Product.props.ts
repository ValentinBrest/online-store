import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Product } from '../../interfaces/product.interface';

export interface ProductProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    setQuantityProducts: React.Dispatch<React.SetStateAction<number>>;
    product: Product;
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
    products: Product[];
    quantityProducts: number;
}
