function processData(input) {
  var num = input.split("\n");
  var t = parseInt(num[0]);
  var st = 0;
  for (var i = 0; i < t; i++) {
    var RC = num[st + 1].split(" ");
    var R = parseInt(RC[0]);// No. of rows in Larger Grid
    var C = parseInt(RC[1]);//No. of columns in Larger Grid
    console.log("No. of Rows = " + R);
    console.log("No. of cols = " + C);
    var G = [];
    for (var G_i = 0; G_i < R; G_i ++  ) {
      G[G_i] = num[st + G_i + 2];
    }
    var rc = num[st + R + 2].split(" ");
    var r = parseInt(rc[0]);// No. of rows in smaller Grid
    var c = parseInt(rc[1]);// No. of columns in smaller Grid
    console.log("No. of Rows = " + r);
    console.log("No. of cols = " + c);
    var P = [];

    for (var P_i = 0; P_i < r; P_i++) {
      P[P_i] = num[st + P_i + R + 3];
    }
    for (var G_j = 0; G_j < R; G_j++) {
      var GRow = G[G_j].split("");
      for (var G_k = 0; G_k < C; G_k++) {
        for (var P_j = 0; P_j < r; P_j++) {
          var PRow = P[P_j].split("");
          for (var P_k = 0; P_k < c; P_k++) {

          }
        }
      }
    }
    st = st + R + r + 2;
  }
}
processData("2\n10 10\n7283455864\n6731158619\n8988242643\n3830589324\n2229505813\n5633845374\n6473530293\n7053106601\n0834282956\n4607924137\n3 4\n9505\n3845\n3530\n15 15\n400453592126560\n114213133098692\n474386082879648\n522356951189169\n887109450487496\n252802633388782\n5027714849667 48\n075975207693780\n511799789562806\n404007454272504\n549043809916080\n962410809534811\n445893523733475\n768705303214174\n650629270887160\n2 2\n 99\n99");
