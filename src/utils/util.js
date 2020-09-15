export const emit = (obj, key) => {
    const {[key]: redundant, ...result} = copyObj(obj)

    return result
}

function copyObj(obj) {
    if (!obj || typeof(obj) != "object") {
        return obj;
    }

    let copy = (obj instanceof Array) ? [] : {};
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            copy[i] = copyObj(obj[i]);
        }
    }
    return copy;
}

export const parseQuery = (params = "") => {
    const rawParams = params.replace("?", "").split("&");
    return rawParams.reduce((result, item) => {
        const [key, value] = item.split("=")
        return {
            ...result,
            [key]: value
        }
    }, {});
};
