import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Product } from '../../interfaces/product.interface';


export interface ProductListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    setQuantityProducts: React.Dispatch<React.SetStateAction<number>>;
    products: Product[];
    setDate: ([]) => Product;
    data: Product[];
    quantityProducts: number;
}
