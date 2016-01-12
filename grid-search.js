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
      G[G_i] = num[st + G_i + 2].split("");
      console.log(G[G_i]);
    }// stored each row of large grid in G and split into array
    console.log(G[1][3]);
    var rc = num[st + R + 2].split(" ");
    var r = parseInt(rc[0]);// No. of rows in smaller Grid
    var c = parseInt(rc[1]);// No. of columns in smaller Grid
    console.log("No. of Rows = " + r);
    console.log("No. of cols = " + c);
    var P = [];
    for (var P_i = 0; P_i < r; P_i++) {
      P[P_i] = num[st + P_i + R + 3].split("");// stored each row of small grid in P and split into array
      console.log(P[P_i]);
    }// stored each row of small grid in P
    st = st + R + r + 2;// moves on to next set of grids
    // checking if small grid fits into large grid
    var end = false, output = "", c1 = 0, c2 = 0, c3 = 0, c4 = 0, c5 = 0;
    while (end == false) {
      console.log(c3);
    //  if (c3 == (R - r) && c4 == (C - c) && P[c1][c2] != G[c3][c4]) {
      //  output = "NO";
    //    end = true;
    //  }
      //if (c2 == c - 1 && c1 == r - 1 && P[c1][c2] == G[c3][c4]) {
      //  output = "YES";
        //console.log("c1 = " + c1 + "c2 = " + c2 + "c3 = " + c3 + "c4 = " + c4);
        //end = true;
    //  }
      if (c3 == R - r) {
        c4++;
        c3 = 0;
      }
      if (c1 == r) {
        c2++;
        c1 = 0;
      }
      if (P[c1][c2] == G[c3][c4]) {
        if (c1 == r - 1 && c2 == c - 1 && c5 == c + r) {
          output = "YES";
          end = true;
        }
        else if (c3 == (R - r) && c4 == (C - c)) {
          console.log("c5 = " + c5 + " c3 = " + c3 + " c4 = " + c4);
          output = "NO";
          end = true;
        }
        c1++;
        c3++;
        c5++;
      }
      else {
        c3++;
        c1 = 0;
        c5 = 0;
      }

    }
    if (output != "") {
      console.log(output);
    }
  }
}
processData("1\n4 5\n84635\n12109\n76530\n41229\n2 2\n30\n29");
//processData("2\n10 10\n7283455864\n6731158619\n8988242643\n3830589324\n2229505813\n5633845374\n6473530293\n7053106601\n0834282956\n4607924137\n3 4\n9505\n3845\n3530\n15 15\n400453592126560\n114213133098692\n474386082879648\n522356951189169\n887109450487496\n252802633388782\n5027714849667 48\n075975207693780\n511799789562806\n404007454272504\n549043809916080\n962410809534811\n445893523733475\n768705303214174\n650629270887160\n2 2\n99\n99");
