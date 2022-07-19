import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface RangeSliderProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    min: number;
    max: number;
    rangeBy: string;
    getRange: (rangeBy: string, min: number, max: number ) => void;
}
