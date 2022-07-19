import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Product } from '../../interfaces/product.interface';


export interface FilterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
    date: Product[];
}
