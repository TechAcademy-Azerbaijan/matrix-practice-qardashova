const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
  var n = parseInt(result.input)
  var matrix = [];
  for (let i = 0; i < n; i++) {
    matrix.push(new Array(n).fill('*'))
  }
  for(n of matrix){
    console.log(n.join(' '));
  }
  
});
