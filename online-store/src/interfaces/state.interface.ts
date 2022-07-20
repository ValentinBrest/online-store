export interface State {
    filters: {
        sort: Sort;
        search: Search;
        range: Range;
        producer: ProducerAll;
        numberOfCameras: NumberOfCameras;
        color: Color;
        popular: Popular;
        [key: string]: Sort | Search | Range | ProducerAll | NumberOfCameras | Color | Popular  ;
    };
}

export type Sort = {
    sortBy: string;
};

export type Search = {
    inputTerm: string;
};

export type Range = {
    quantityInStock: number[];
    yearOfRelease: number[];
};

export type ProducerAll = {
    [key: string]: boolean;
    Apple: boolean;
    Samsung: boolean;
    Xiaomi: boolean;
};

export type NumberOfCameras = {
    [key: string]: boolean;
    1: boolean;
    2: boolean;
    3: boolean;
};

export type Color = {
    [key: string]: boolean;
    white: boolean;
    yellow: boolean;
    red: boolean;
};

export type Popular = {
    [key: string]: boolean;
    isPopular: boolean;
};