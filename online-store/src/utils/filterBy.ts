import { Product } from '../interfaces/product.interface';

export function sortFromA (date: Product[]) {
	return date.sort(function (a, b) {
        if (a.title > b.title) {
            return 1;
        }
        if (a.title < b.title) {
            return -1;
        }
        return 0;
    });
}

export function sortFromZ(date: Product[]) {
    return date.sort(function (a, b) {
        if (a.title < b.title) {
            return 1;
        }
        if (a.title > b.title) {
            return -1;
        }
        return 0;
    });
}

export function fromMoreQuant(date: Product[]) {
    return date.sort(function (a, b) {
        return b.quantity - a.quantity;
    });
}

export function fromLessQuant(date: Product[]) {
    return date.sort(function (a, b) {
        return a.quantity - b.quantity;
    });
}

export function fromOldYear(date: Product[]) {
    return date.sort(function (a, b) {
        return a.yearOfRelease - b.yearOfRelease;
    });
}

export function fromYoungYear(date: Product[]) {
    return date.sort(function (a, b) {
        return b.yearOfRelease - a.yearOfRelease;
    });
}