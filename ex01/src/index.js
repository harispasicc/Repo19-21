var xy = "";
var FcapsLock = "0";
var Fshift = "0";

function funDelete() {
  var valu = document.getElementById("display").innerHTML;
  var x = document.getElementById("display").innerHTML.length;
  var y = 1;
  var z = x - y;
  document.getElementById("display").innerHTML = valu.slice(0, z);
}

function funCapsLock() {
  if (FcapsLock == "0") {
    FcapsLock = "1";
  } else if (FcapsLock == "1") {
    FcapsLock = "0";
  }
}

function funShift() {
  if (Fshift == "0") {
    Fshift = "1";
  } else if (Fshift == "1") {
    Fshift = "0";
  }
}

function funSubmit() {
  var valu = document.getElementById("display").innerHTML;
  if (valu == "") {
    alert("Not inserted : Empty innerHTML");
  } else {
    alert("Data Inserted : " + valu);
  }
}

function funEnter() {
  var valu = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = valu + " ";
}

function funSpace() {
  var valu = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = valu + " ";
}

function funq() {
  var valu = document.getElementById("display").innerHTML;
  if (FcapsLock == "0") {
    if (Fshift == "0") {
      document.getElementById("display").innerHTML = valu + "q";
    } else if (Fshift == "1") {
      Fshift = "0";
      document.getElementById("display").innerHTML = valu + "Q";
    }
  } else if (FcapsLock == "1") {
    if (Fshift == "0") {
      document.getElementById("display").innerHTML = valu + "Q";
    } else if (Fshift == "1") {
      Fshift = "0";
      document.getElementById("display").innerHTML = valu + "q";
    }
  }
}

function funw() {
  var valu = document.getElementById("display").innerHTML;
  if (FcapsLock == "0") {
    if (Fshift == "0") {
      document.getElementById("display").innerHTML = valu + "w";
    } else if (Fshift == "1") {
      Fshift = "0";
      document.getElementById("display").innerHTML = valu + "W";
    }
  } else if (FcapsLock == "1") {
    if (Fshift == "0") {
      document.getElementById("display").innerHTML = valu + "W";
    } else if (Fshift == "1") {
      Fshift = "0";
      document.getElementById("display").innerHTML = valu + "w";
    }
  }
}

function fune() {
  var valu = document.getElementById("display").innerHTML;
  if (FcapsLock == "0") {
    if (Fshift == "0") {
      document.getElementById("display").innerHTML = valu + "e";
    } else if (Fshift == "1") {
      Fshift = "0";
      document.getElementById("display").innerHTML = valu + "E";
    }
  } else if (FcapsLock == "1") {
    if (Fshift == "0") {
      document.getElementById("display").innerHTML = valu + "E";
    } else if (Fshift == "1") {
      Fshift = "0";
      document.getElementById("display").innerHTML = valu + "e";
    }
  }
}

function funr() {
  var valu = document.getElementById("display").innerHTML;
  if (FcapsLock == "0") {
    if (Fshift == "0") {
      document.getElementById("display").innerHTML = valu + "r";
    } else if (Fshift == "1") {
      Fshift = "0";
      document.getElementById("display").innerHTML = valu + "R";
    }
  } else if (FcapsLock == "1") {
    if (Fshift == "0") {
      document.getElementById("display").innerHTML = valu + "R";
    } else if (Fshift == "1") {
      Fshift = "0";
      document.getElementById("display").innerHTML = valu + "r";
    }
  }
}

function funt() {
  var valu = document.getElementById("display").innerHTML;
  if (FcapsLock == "0") {
    if (Fshift == "0") {
      document.getElementById("display").innerHTML = valu + "t";
    } else if (Fshift == "1") {
      Fshift = "0";
      document.getElementById("display").innerHTML = valu + "T";
    }
  } else if (FcapsLock == "1") {
    if (Fshift == "0") {
      document.getElementById("display").innerHTML = valu + "T";
    } else if (Fshift == "1") {
      Fshift = "0";
      document.getElementById("display").innerHTML = valu + "t";
    }
  }
}

function funy() {
  var valu = document.getElementById("display").innerHTML;
  if (FcapsLock == "0") {
    if (Fshift == "0") {
      document.getElementById("display").innerHTML = valu + "y";
    } else if (Fshift == "1") {
      Fshift = "0";
      document.getElementById("display").innerHTML = valu + "Y";
    }
  } else if (FcapsLock == "1") {
    if (Fshift == "0") {
      document.getElementById("display").innerHTML = valu + "Y";
    } else if (Fshift == "1") {
      Fshift = "0";
      document.getElementById("display").innerHTML = valu + "y";
    }
  }
}

function funu() {
  var valu = document.getElementById("display").innerHTML;
  if (FcapsLock == "0") {
    if (Fshift == "0") {
      document.getElementById("display").innerHTML = valu + "u";
    } else if (Fshift == "1") {
      Fshift = "0";
      document.getElementById("display").innerHTML = valu + "U";
    }
  } else if (FcapsLock == "1") {
    if (Fshift == "0") {
      document.getElementById("display").innerHTML = valu + "U";
    } else if (Fshift == "1") {
      Fshift = "0";
      document.getElementById("display").innerHTML = valu + "u";
    }
  }
}

function funi() {
  var valu = document.getElementById("display").innerHTML;
  if (FcapsLock == "0") {
    if (Fshift == "0") {
      document.getElementById("display").innerHTML = valu + "i";
    } else if (Fshift == "1") {
      Fshift = "0";
      document.getElementById("display").innerHTML = valu + "I";
    }
  } else if (FcapsLock == "1") {
    if (Fshift == "0") {
      document.getElementById("display").innerHTML = valu + "I";
    } else if (Fshift == "1") {
      Fshift = "0";
      document.getElementById("display").innerHTML = valu + "i";
    }
  }
}

function funo() {
  var valu = document.getElementById("display").innerHTML;
  if (FcapsLock == "0") {
    if (Fshift == "0") {
      document.getElementById("display").innerHTML = valu + "o";
    } else if (Fshift == "1") {
      Fshift = "0";
      document.getElementById("display").innerHTML = valu + "O";
    }
  } else if (FcapsLock == "1") {
    if (Fshift == "0") {
      document.getElementById("display").innerHTML = valu + "O";
    } else if (Fshift == "1") {
      Fshift = "0";
      document.getElementById("display").innerHTML = valu + "o";
    }
  }
}

function funp() {
  var valu = document.getElementById("display").innerHTML;
  if (FcapsLock == "0") {
    if (Fshift == "0") {
      document.getElementById("display").innerHTML = valu + "p";
    } else if (Fshift == "1") {
      Fshift = "0";
      document.getElementById("display").innerHTML = valu + "P";
    }
  } else if (FcapsLock == "1") {
    if (Fshift == "0") {
      document.getElementById("display").innerHTML = valu + "P";
    } else if (Fshift == "1") {
      Fshift = "0";
      document.getElementById("display").innerHTML = valu + "p";
    }
  }
}

function funa() {
  var valu = document.getElementById("display").innerHTML;
  if (FcapsLock == "0") {
    if (Fshift == "0") {
      document.getElementById("display").innerHTML = valu + "a";
    } else if (Fshift == "1") {
      Fshift = "0";
      document.getElementById("display").innerHTML = valu + "A";
    }
  } else if (FcapsLock == "1") {
    if (Fshift == "0") {
      document.getElementById("display").innerHTML = valu + "A";
    } else if (Fshift == "1") {
      Fshift = "0";
      document.getElementById("display").innerHTML = valu + "a";
    }
  }
}

function funs() {
  var valu = document.getElementById("display").innerHTML;
  if (FcapsLock == "0") {
    if (Fshift == "0") {
      document.getElementById("display").innerHTML = valu + "s";
    } else if (Fshift == "1") {
      Fshift = "0";
      document.getElementById("display").innerHTML = valu + "S";
    }
  } else if (FcapsLock == "1") {
    if (Fshift == "0") {
      document.getElementById("display").innerHTML = valu + "S";
    } else if (Fshift == "1") {
      Fshift = "0";
      document.getElementById("display").innerHTML = valu + "s";
    }
  }
}

function fund() {
  var valu = document.getElementById("display").innerHTML;
  if (FcapsLock == "0") {
    if (Fshift == "0") {
      document.getElementById("display").innerHTML = valu + "d";
    } else if (Fshift == "1") {
      Fshift = "0";
      document.getElementById("display").innerHTML = valu + "D";
    }
  } else if (FcapsLock == "1") {
    if (Fshift == "0") {
      document.getElementById("display").innerHTML = valu + "D";
    } else if (Fshift == "1") {
      Fshift = "0";
      document.getElementById("display").innerHTML = valu + "d";
    }
  }
}

function funf() {
  var valu = document.getElementById("display").innerHTML;
  if (FcapsLock == "0") {
    if (Fshift == "0") {
      document.getElementById("display").innerHTML = valu + "f";
    } else if (Fshift == "1") {
      Fshift = "0";
      document.getElementById("display").innerHTML = valu + "F";
    }
  } else if (FcapsLock == "1") {
    if (Fshift == "0") {
      document.getElementById("display").innerHTML = valu + "F";
    } else if (Fshift == "1") {
      Fshift = "0";
      document.getElementById("display").innerHTML = valu + "f";
    }
  }
}

function fung() {
  var valu = document.getElementById("display").innerHTML;
  if (FcapsLock == "0") {
    if (Fshift == "0") {
      document.getElementById("display").innerHTML = valu + "g";
    } else if (Fshift == "1") {
      Fshift = "0";
      document.getElementById("display").innerHTML = valu + "G";
    }
  } else if (FcapsLock == "1") {
    if (Fshift == "0") {
      document.getElementById("display").innerHTML = valu + "G";
    } else if (Fshift == "1") {
      Fshift = "0";
      document.getElementById("display").innerHTML = valu + "g";
    }
  }
}

function funh() {
  var valu = document.getElementById("display").innerHTML;
  if (FcapsLock == "0") {
    if (Fshift == "0") {
      document.getElementById("display").innerHTML = valu + "h";
    } else if (Fshift == "1") {
      Fshift = "0";
      document.getElementById("display").innerHTML = valu + "H";
    }
  } else if (FcapsLock == "1") {
    if (Fshift == "0") {
      document.getElementById("display").innerHTML = valu + "H";
    } else if (Fshift == "1") {
      Fshift = "0";
      document.getElementById("display").innerHTML = valu + "h";
    }
  }
}

function funj() {
  var valu = document.getElementById("display").innerHTML;
  if (FcapsLock == "0") {
    if (Fshift == "0") {
      document.getElementById("display").innerHTML = valu + "j";
    } else if (Fshift == "1") {
      Fshift = "0";
      document.getElementById("display").innerHTML = valu + "J";
    }
  } else if (FcapsLock == "1") {
    if (Fshift == "0") {
      document.getElementById("display").innerHTML = valu + "J";
    } else if (Fshift == "1") {
      Fshift = "0";
      document.getElementById("display").innerHTML = valu + "j";
    }
  }
}

function funk() {
  var valu = document.getElementById("display").innerHTML;
  if (FcapsLock == "0") {
    if (Fshift == "0") {
      document.getElementById("display").innerHTML = valu + "k";
    } else if (Fshift == "1") {
      Fshift = "0";
      document.getElementById("display").innerHTML = valu + "K";
    }
  } else if (FcapsLock == "1") {
    if (Fshift == "0") {
      document.getElementById("display").innerHTML = valu + "K";
    } else if (Fshift == "1") {
      Fshift = "0";
      document.getElementById("display").innerHTML = valu + "k";
    }
  }
}

function funl() {
  var valu = document.getElementById("display").innerHTML;
  if (FcapsLock == "0") {
    if (Fshift == "0") {
      document.getElementById("display").innerHTML = valu + "l";
    } else if (Fshift == "1") {
      Fshift = "0";
      document.getElementById("display").innerHTML = valu + "L";
    }
  } else if (FcapsLock == "1") {
    if (Fshift == "0") {
      document.getElementById("display").innerHTML = valu + "L";
    } else if (Fshift == "1") {
      Fshift = "0";
      document.getElementById("display").innerHTML = valu + "l";
    }
  }
}

function funz() {
  var valu = document.getElementById("display").innerHTML;
  if (FcapsLock == "0") {
    if (Fshift == "0") {
      document.getElementById("display").innerHTML = valu + "z";
    } else if (Fshift == "1") {
      Fshift = "0";
      document.getElementById("display").innerHTML = valu + "Z";
    }
  } else if (FcapsLock == "1") {
    if (Fshift == "0") {
      document.getElementById("display").innerHTML = valu + "Z";
    } else if (Fshift == "1") {
      Fshift = "0";
      document.getElementById("display").innerHTML = valu + "z";
    }
  }
}

function funx() {
  var valu = document.getElementById("display").innerHTML;
  if (FcapsLock == "0") {
    if (Fshift == "0") {
      document.getElementById("display").innerHTML = valu + "x";
    } else if (Fshift == "1") {
      Fshift = "0";
      document.getElementById("display").innerHTML = valu + "X";
    }
  } else if (FcapsLock == "1") {
    if (Fshift == "0") {
      document.getElementById("display").innerHTML = valu + "X";
    } else if (Fshift == "1") {
      Fshift = "0";
      document.getElementById("display").innerHTML = valu + "x";
    }
  }
}

function func() {
  var valu = document.getElementById("display").innerHTML;
  if (FcapsLock == "0") {
    if (Fshift == "0") {
      document.getElementById("display").innerHTML = valu + "c";
    } else if (Fshift == "1") {
      Fshift = "0";
      document.getElementById("display").innerHTML = valu + "C";
    }
  } else if (FcapsLock == "1") {
    if (Fshift == "0") {
      document.getElementById("display").innerHTML = valu + "C";
    } else if (Fshift == "1") {
      Fshift = "0";
      document.getElementById("display").innerHTML = valu + "c";
    }
  }
}

function funv() {
  var valu = document.getElementById("display").innerHTML;
  if (FcapsLock == "0") {
    if (Fshift == "0") {
      document.getElementById("display").innerHTML = valu + "v";
    } else if (Fshift == "1") {
      Fshift = "0";
      document.getElementById("display").innerHTML = valu + "V";
    }
  } else if (FcapsLock == "1") {
    if (Fshift == "0") {
      document.getElementById("display").innerHTML = valu + "V";
    } else if (Fshift == "1") {
      Fshift = "0";
      document.getElementById("display").innerHTML = valu + "v";
    }
  }
}

function funb() {
  var valu = document.getElementById("display").innerHTML;
  if (FcapsLock == "0") {
    if (Fshift == "0") {
      document.getElementById("display").innerHTML = valu + "b";
    } else if (Fshift == "1") {
      Fshift = "0";
      document.getElementById("display").innerHTML = valu + "B";
    }
  } else if (FcapsLock == "1") {
    if (Fshift == "0") {
      document.getElementById("display").innerHTML = valu + "B";
    } else if (Fshift == "1") {
      Fshift = "0";
      document.getElementById("display").innerHTML = valu + "b";
    }
  }
}

function funn() {
  var valu = document.getElementById("display").innerHTML;
  if (FcapsLock == "0") {
    if (Fshift == "0") {
      document.getElementById("display").innerHTML = valu + "n";
    } else if (Fshift == "1") {
      Fshift = "0";
      document.getElementById("display").innerHTML = valu + "N";
    }
  } else if (FcapsLock == "1") {
    if (Fshift == "0") {
      document.getElementById("display").innerHTML = valu + "N";
    } else if (Fshift == "1") {
      Fshift = "0";
      document.getElementById("display").innerHTML = valu + "n";
    }
  }
}

function funm() {
  var valu = document.getElementById("display").innerHTML;
  if (FcapsLock == "0") {
    if (Fshift == "0") {
      document.getElementById("display").innerHTML = valu + "m";
    } else if (Fshift == "1") {
      Fshift = "0";
      document.getElementById("display").innerHTML = valu + "M";
    }
  } else if (FcapsLock == "1") {
    if (Fshift == "0") {
      document.getElementById("display").innerHTML = valu + "M";
    } else if (Fshift == "1") {
      Fshift = "0";
      document.getElementById("display").innerHTML = valu + "m";
    }
  }
}

function fun1() {
  var valu = document.getElementById("display").innerHTML;
  if (Fshift == "0") {
    document.getElementById("display").innerHTML = valu + "1";
  }
}

function fun2() {
  var valu = document.getElementById("display").innerHTML;
  if (Fshift == "0") {
    document.getElementById("display").innerHTML = valu + "2";
  }
}

function fun3() {
  var valu = document.getElementById("display").innerHTML;
  if (Fshift == "0") {
    document.getElementById("display").innerHTML = valu + "3";
  }
}

function fun4() {
  var valu = document.getElementById("display").innerHTML;
  if (Fshift == "0") {
    document.getElementById("display").innerHTML = valu + "4";
  }
}

function fun5() {
  var valu = document.getElementById("display").innerHTML;
  if (Fshift == "0") {
    document.getElementById("display").innerHTML = valu + "5";
  }
}

function fun6() {
  var valu = document.getElementById("display").innerHTML;
  if (Fshift == "0") {
    document.getElementById("display").innerHTML = valu + "6";
  }
}

function fun7() {
  var valu = document.getElementById("display").innerHTML;
  if (Fshift == "0") {
    document.getElementById("display").innerHTML = valu + "7";
  }
}

function fun8() {
  var valu = document.getElementById("display").innerHTML;
  if (Fshift == "0") {
    document.getElementById("display").innerHTML = valu + "8";
  }
}

function fun9() {
  var valu = document.getElementById("display").innerHTML;
  if (Fshift == "0") {
    document.getElementById("display").innerHTML = valu + "9";
  }
}

function fun0() {
  var valu = document.getElementById("display").innerHTML;
  if (Fshift == "0") {
    document.getElementById("display").innerHTML = valu + "0";
  }
}

function funSpecK1() {
  var valu = document.getElementById("display").innerHTML;
  if (Fshift == "0") {
    document.getElementById("display").innerHTML = valu + "-";
  }
}

function funSpecK2() {
  var valu = document.getElementById("display").innerHTML;
  if (Fshift == "0") {
    document.getElementById("display").innerHTML = valu + "_";
  }
}
