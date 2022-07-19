import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface FilterByRangesProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    setState: React.Dispatch<
        React.SetStateAction<{
            filters: {
                sort: {
                    sortBy: string;
                };
                search: {
                    inputTerm: string;
                };
                range: {
                    quantityInStock: number[];
                    yearOfRelease: number[];
                };
                producer: {
                    Apple: boolean;
                    Samsung: boolean;
                    Xiaomi: boolean;
                };
                numberOfCameras: {
                    1: boolean;
                    2: boolean;
                    3: boolean;
                };
                color: {
                    white: boolean;
                    yellow: boolean;
                    red: boolean;
                };
                popular: {
                    isPopular: boolean;
                };
            };
        }>
    >;
}