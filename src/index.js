
// You should implement your task here.

module.exports = function towelSort (matrix) {

  if (typeof matrix == 'undefined') {
    return []
  }

  matrix.forEach(item => {
    if (matrix.indexOf(item) % 2 != 0) {
      item.reverse();
    };
  });

  return matrix.flat();
}
