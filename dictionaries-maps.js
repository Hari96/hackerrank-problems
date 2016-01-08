function processData(input) {
  var num = input.split("\n");
  var n = parseInt(num[0]);
  var res = new Object;
  var output = "";
  for (var i =  1; i <= 2*n; i+=2) {
    res[num[i]] = num[i + 1];
  }
  for (var j = 2*n + 1; j <= 3*n; j++) {
    output = num[j] + "=" + res[num[j]];
    if (res[num[j]] === undefined) {
      output = "Not found";
    }
    console.log(output);
  }
}
processData("3\n'sam'\n99912222\n'tom'\n11122222\n'harry'\n12299933\n'sam'\n'edward'\n'harry'");
