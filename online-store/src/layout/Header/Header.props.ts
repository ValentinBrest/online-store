import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Product } from '../../interfaces/product.interface';


export interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    quantityProducts: number;
}
