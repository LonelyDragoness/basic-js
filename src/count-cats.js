module.exports = function countCats(matrix) {
  let number = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let item = 0; item < matrix[i].length; item++) {
      if (matrix[i][item] === "^^") {
        number += 1;
      }
    }
  }
  return number;
};
