import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Product } from '../../interfaces/product.interface';


export interface ProductsListProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    setQuantityProducts: React.Dispatch<React.SetStateAction<number>>;
    products: Product[];
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
    data: Product[];
    quantityProducts: number;
}
