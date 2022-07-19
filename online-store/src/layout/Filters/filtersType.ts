import { Producer, Camera, Color, Popular } from '../../interfaces/filter.interface';

export const filterProducer: Producer[] = [
    {
        id: 'Apple',
        img: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
    },
    {
        id: 'Samsung',
        img: 'https://i.pinimg.com/736x/e5/cb/66/e5cb66fe655e53d607210abe8015a7b0.jpg',
    },
    {
        id: 'Xiaomi',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiaomi_logo_%282021-%29.svg/2048px-Xiaomi_logo_%282021-%29.svg.png',
    },
];

export const filterCameras: Camera[] = [
    {
        id: '1',
        numberOfCameras: '1',
    },
    {
        id: '2',
        numberOfCameras: '2',
    },
    {
        id: '3',
        numberOfCameras: '3',
    },
];

export const filterColor: Color[] = [
    {
        id: 'white',
        color: 'white',
    },
    {
        id: 'yellow',
        color: 'yellow',
    },
    {
        id: 'red',
        color: 'red',
    },
];

export const filterPopular: Popular[] = [
    {
        id: 'popular',
        value: false,
        isPopular: 'isPopular',
    },
];
