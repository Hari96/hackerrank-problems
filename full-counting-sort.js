function processData(input) {
  var inputArr = input.split("\n");
  var num = inputArr[0];
  var digit = 0, c = 0;
  var end = num/2 + 1;
  while (--end) {
    c++;
    digit = inputArr[c].split(" ")[0];
    inputArr[c] = digit + " -";
  }
  var sortString = [], aStr = new String(""), check = 0, finalString = "", c1 = 0;
  for (var i = 0; i < 100; i += 1) {
    for (var j = 1; j <= num; j += 1) {
      check = inputArr[j].split(" ")[0];
      if (check == i) {
        aStr = inputArr[j].split(" ")[1];
        sortString[c1] = aStr;
        c1++;
      }
    }
  }
  var finalString = sortString.join(" ");
  console.log(finalString);
}
processData("20\n0 ab\n6 cd\n0 ef\n6 gh\n4 ij\n0 ab\n6 cd\n0 ef\n6 gh\n0 ij\n4 that\n3 be\n0 to\n1 be\n5 question\n1 or\n2 not\n4 is\n2 to\n4 the");
