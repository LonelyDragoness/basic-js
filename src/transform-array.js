module.exports = function transform(arr) {
    if(Array.isArray(arr)) {
        if (arr === []) { return arr}
        if(arr[0] === "--discard-prev"|| arr[0] === "--double-prev") {
            arr.shift()
        }
        if (arr[arr.length - 1] === "--double-next"|| arr[arr.length - 1] === "--discard-next") {
            arr.pop()
        }
        let result = [];

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === "--discard-next") {
                i += 1;
            } else if (arr[i] === "--discard-prev") {
                result.pop()
            } else if (arr[i] === "--double-next") {
                result.push(arr[i + 1])
            } else if (arr[i] === "--double-prev") {
                result.push(arr[i - 1])
            } else {
                result.push(arr[i]);
            }
        }
        return result
    } else {throw Error("This is not an array.")}
};
