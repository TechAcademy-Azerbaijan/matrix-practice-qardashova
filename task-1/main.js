  let matrix = [
    [4, -2, 5],
    [1, -4, -12],
    [0, 1, -3]
  ]
  let counter = 0;
  var sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] < 0 && matrix[i][j] % 2 == 0) {
        counter++
        sum = sum + matrix[i][j]
      }
    }
  }
  console.log(counter);
  console.log(sum);
