function processData(input) {
  var num = input.split("\n");
  var t = parseInt(num[0]);
  for (var i = 1; i <= t; i++) {
    var n_temp = num[i].split(" ");
    var n = parseInt(n_temp[0]);
    var c = parseInt(n_temp[1]);
    var m = parseInt(n_temp[2]);
    var n1 = Math.floor(n/c);
    var n2 = 0, n3 = 0, n4 = 0;
    if (n1 >= m) {
      n2 = Math.floor(n1/m);
      if (n2 >= m) {
        n3 = n2 + n2 % m;
        n4 = Math.floor(n3/m);
      }
      else {
        n4 = n2 + n2 % m;
      }
    }
    var output = n1 + n4;
    console.log(output);
  }
}
processData("3\n10 2 5\n12 4 4\n6 2 2");
