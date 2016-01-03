function processData(input) {
  var a = input.split("\n");//takes account of way data is input on hackerrank
  var T = parseInt(a[0]);
  var c1 = 1, c2 = 0, output = "";
  for (var i = 1; i <= T; i++) {
    var n = parseInt(a[i]);
    if (n < 3 || n === 4 || n === 7) {
      console.log(-1);
    }
    else if (n === 3) {
      console.log(555);
    }
    else if (n === 5) {
      console.log(33333);
    }
    else if (n%3 === 0) {
        c2 = n/3;
        for (var m = 1; m <= c2; m++) {
          output += "555";
        }
        console.log(output);
        output = "";
        c2 = 0;
      }
      else {
      while (n > 5) {
        n -= 5;
        c1++;
        if (n === 5) {
          for (var j = 1; j <= c1; j++) {
            output += "33333";
          }
          console.log(output);
          output = "";
        }
        else if (n%3 === 0) {
          c2 = n/3;
          for (var k = 1; k <= c2; k++) {
            output += "555";
          }
          for (var l = 1; l <= c1 - 1; l++) {
            output += "33333";
          }
          console.log(output);
          output = "";
          n = 0;
        }

      }
      c1 = 1;
      c2 = 0;
    }
  }
}
processData("5\n1\n3\n5\n11\n83");
