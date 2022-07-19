import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Product } from '../../interfaces/product.interface';
import { State } from '../../interfaces/state.interface';

export interface FilterByValuesProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    setState: React.Dispatch<
        React.SetStateAction<State>
    >;
    state: State;
    date: Product[];
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
    getSort:(value: string) => React.Dispatch<React.SetStateAction<string>>;
}

export interface CollectedKeys {
    producer: string[];
    numberOfCameras: string[];
    color: string[];
    popular: string[];
    [key: string]: string[]
}