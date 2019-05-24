let changeColor = function () {
  let hexaList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let hexaCode = [];
  let rdm1 = 0;

  for (i in hexaList) {
    rdm1 = Math.floor(Math.random()*16);
    hexaCode.push(hexaList[rdm1].toString());
  }

  let myHexaCode = "#" + hexaCode[0] + hexaCode[1] + hexaCode[2] + hexaCode[3] + hexaCode[4] + hexaCode[5];

  document.getElementById("myElement").style.backgroundColor = myHexaCode;
}

let changeSay = function () {
  let julienList = ["C'est gagné!", "Oui oui oui oui!", "C'est la mer noire", "C'est parti", "Oui Jacqueline", "Ouais ouais ouais ouais"]
  let rdm2 = Math.floor(Math.random()*6);

  let whatJulienSays = julienList[rdm2];

  document.getElementById("julienSays").textContent = whatJulienSays;
}
