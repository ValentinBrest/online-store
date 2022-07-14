export function sortFromA (date) {
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

export function sortFromZ (date) {
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

export function fromMoreQuant(date) {
    return date.sort(function (a, b) {
        return b.quantity - a.quantity;
    });
}

export function fromLessQuant(date) {
    return date.sort(function (a, b) {
        return a.quantity - b.quantity;
    });
}

export function fromOldYear(date) {
    return date.sort(function (a, b) {
        return a.yearOfRelease - b.yearOfRelease;
    });
}

export function fromYoungYear(date) {
    return date.sort(function (a, b) {
        return b.yearOfRelease - a.yearOfRelease;
    });
}