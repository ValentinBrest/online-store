import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { State } from '../../interfaces/state.interface';

export interface FilterByRangesProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    setState: React.Dispatch<React.SetStateAction<State>>;
    r1Value: number[];
    r2Value: number[];
    setR1Value: React.Dispatch<React.SetStateAction<number[]>>;
    setR2Value: React.Dispatch<React.SetStateAction<number[]>>;
}