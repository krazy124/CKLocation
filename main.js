import { store, loadSite } from "./location.js";

function addDropLocation(i) {
  let newSelect = document.createElement("select");
  newSelect.setAttribute("id", "drop" + i);
  newSelect.setAttribute("class", "form-select");
  newSelect.setAttribute("aria-label", "Default select example");
  let newOption = document.createElement("option");
  newOption.innerHTML = "Drop Location";
  newOption.setAttribute("selected", "true");
  newSelect.appendChild(newOption);

  for (let i = 0; i < store.length; i++) {
    let opt = document.createElement("option");
    opt.setAttribute("value", store[i].number - 1);
    opt.innerHTML = store[i].city + "-" + store[i].address;
    newSelect.appendChild(opt);
  }

  document.getElementById("dayDiv").appendChild(newSelect);
}

function addLoadSite(i) {
  let newSelect = document.createElement("select");
  newSelect.setAttribute("id", "load" + i);
  newSelect.setAttribute("class", "form-select");
  newSelect.setAttribute("aria-label", "Default select example");
  let newOption = document.createElement("option");
  newOption.innerHTML = "Load Location";
  newOption.setAttribute("selected", "true");
  newSelect.appendChild(newOption);
  for (let i = 0; i < loadSite.length; i++) {
    let opt = document.createElement("option");
    opt.setAttribute("value", loadSite[i].value);
    opt.innerHTML = loadSite[i].facility + "-" + loadSite[i].address;
    newSelect.appendChild(opt);
  }
  document.getElementById("dayDiv").appendChild(newSelect);
}
for (var i = 0; i < 4; i++) {
  addLoadSite(i);
  addDropLocation(i);
  document.getElementById("dayDiv").innerHTML += "<br>";
}

function calcDriveTime(dropNum, loadNum, display) {
  let cat = display;
  let loadValue = loadNum;
  let dropValue = dropNum;
  let driveTime = "";
  let load = document.getElementById(cat);
  if (loadValue == 1) {
    driveTime = store[dropValue].terminal;
    load.innerHTML = driveTime;
  }
  if (loadValue == 2) {
    driveTime += loadSite[loadValue].toTerminal + store[dropValue].magellan;
    load.innerHTML = driveTime;
  }
  if (loadValue == 3) {
    driveTime += loadSite[loadValue].toTerminal + store[dropValue].motiva;
    load.innerHTML = driveTime;
  }
  if (loadValue == 4) {
    driveTime += loadSite[loadValue].toTerminal + store[dropValue].nustar;
    load.innerHTML = driveTime;
  }
  if (loadValue == 5) {
    driveTime += loadSite[loadValue].toTerminal + store[dropValue].aledo;
    load.innerHTML = driveTime;
  }
  if (loadValue == 6) {
    driveTime += loadSite[loadValue].toTerminal + store[dropValue].cado;
    load.innerHTML = driveTime;
  }
}

function callDrive() {
  calcDriveTime(drop0.value, load0.value, "load0Display");
  calcDriveTime(drop1.value, load1.value, "load1Display");
  calcDriveTime(drop2.value, load2.value, "load2Display");
  calcDriveTime(drop3.value, load3.value, "load3Display");
}

document.getElementById("goButton").addEventListener("click", callDrive);
