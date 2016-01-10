function processData(input) {
  var num = input.split("\n");
  var t = parseInt(num[0]);
  for (var i = 0; i < t; i++) {
    var RC = num[1].split(" ");
    var R = parseInt(RC[0]);
    var C = parseInt(RC[1]);
    var G = [];
    for (var G_i = 0; G_i < R; G_i ++  ) {
      G[G_i] = num[G_i + 2];
    }
    var rc = num[R + 2].split(" ");
    var r = parseInt(rc[0]);
    var c = parseInt(rc[1]);
    var P = [];
    for (var P_i = 0; P_i < r; P_i++) {
      P[P_i] = num[P_i + R + 3];
    }

  }
}
processData("2\n10 10\n7283455864\n6731158619\n8988242643\n3830589324\n2229505813\n5633845374\n6473530293\n7053106601\n0834282956\n4607924137\n3 4\n9505\n3845\n3530\n1515\n400453592126560\n114213133098692\n474386082879648\n522356951189169\n887109450487496\n252802633388782\n502771484966748\n075975207693780\n511799789562806\n404007454272504\n549043809916080\n962410809534811\n445893523733475\n768705303214174\n650629270887160\n2 2\n99\n99");
