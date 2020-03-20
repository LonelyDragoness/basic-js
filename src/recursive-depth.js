module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let nestsCount = 0;
        arr = arr.filter(func => Array.isArray(func));
        arr.forEach(element => {
            nestsCount = Math.max(nestsCount, this.calculateDepth(element))
        });
        return 1 + nestsCount
    }
};
