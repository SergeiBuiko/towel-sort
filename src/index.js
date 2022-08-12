
// You should implement your task here.

module.exports = function towelSort (matrix) {
  
  if (matrix === undefined || matrix === [] || matrix === null || matrix.length === 0) 
  { return [] }
  for (let i = 0; i < matrix.length; i += 2) {
    matrix[i].reverse()   
  }

  let arr = matrix.map((item) => item.reverse())
  let str = arr.join(',')
  let arr2 = str.split(',')
  let lengths = arr2.map(item => Number(item));
  
  //arr = arr.concat(matrix)
  return lengths //.sort(function(a, b) { return a - b; });
}
 


