export interface Product {
    title: string ;
    quantity: number;
    yearOfRelease: number;
    producer: string;
    color: string;
    numberOfCameras: string;
    popular: string;
    img: string;
    isInCart: boolean;
    [key: string]: any ;
}
