var op1 = "", op2 = "", op = "";
var btnRes = document.getElementById("res");
var btnSum = document.getElementById("btnSum");
var btnSub = document.getElementById("btnSub");
var btnMul = document.getElementById("btnMul");
var btnDiv = document.getElementById("btnDiv");
var btnEql = document.getElementById("btnEql");
var btnClr = document.getElementById("btnClr");
var btn0 = document.getElementById("btn0");
var btn1 = document.getElementById("btn1");
btnSum.onclick = function() {
 op = "+";
 btnRes.innerHTML+= "+";
}
btnSub.onclick = function() {
 op = "-";
 btnRes.innerHTML+= "-";
}
btnMul.onclick = function() {
 op = "*";
 btnRes.innerHTML+= "*";
}
btnDiv.onclick = function() {
 op = "/";
 btnRes.innerHTML+= "/";
}
btn0.onclick = function() {
  if (op == "") {
    op1 = op1 + "0";
    btnRes.innerHTML += "0";
  }
  else {
    op2 = op2 + "0";
    btnRes.innerHTML += "0";
  }
};
btn1.onclick = function() {
  if (op == "") {
    op1 = op1 + "1";
    btnRes.innerHTML += 1;
  }
  else {
    op2 = op2 + "1";
    btnRes.innerHTML += 1;
  }
};
btnEql.onclick = function() {
  op1 = parseInt(op1, 2);
  op2 = parseInt(op2, 2);
  switch(op) {
    case "+":
      var res = op1 + op2;
      break;
    case "-":
      var res = op1 - op2;
      break;
    case "*":
      var res = op1 * op2;
      break;
    case "/":
      var res = Math.floor(op1/op2);
      break;
  }
  op = "";
  res = res.toString(2);
  btnRes.innerHTML = res;
};
btnClr.onclick = function() {
  btnRes.innerHTML = "";
  op = "";
  op1 = "";
  op2 = "";
  res = 0;
};
