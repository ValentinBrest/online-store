import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { State } from '../../interfaces/state.interface';

export interface FilterByRangesProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    setState: React.Dispatch< React.SetStateAction<State>>;
}