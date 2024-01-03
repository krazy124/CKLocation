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

function calcDriveTime() {
  let driveTime = "";
  let load = document.getElementById("loadDisplay");
  if (load0.value == 1) {
    driveTime = store[drop0.value].terminal;
    load.innerHTML = driveTime;
  }
  if (load0.value == 2) {
    driveTime += loadSite[load0.value].toTerminal + store[drop0.value].magellan;
    load.innerHTML = driveTime;
  }
  if (load0.value == 3) {
    driveTime += loadSite[load0.value].toTerminal + store[drop0.value].motiva;
    load.innerHTML = driveTime;
  }
  if (load0.value == 4) {
    driveTime += loadSite[load0.value].toTerminal + store[drop0.value].nustar;
    load.innerHTML = driveTime;
  }
  if (load0.value == 5) {
    driveTime += loadSite[load0.value].toTerminal + store[drop0.value].aledo;
    load.innerHTML = driveTime;
  }
  if (load0.value == 6) {
    driveTime += loadSite[load0.value].toTerminal + store[drop0.value].cado;
    load.innerHTML = driveTime;
  }
}

document.getElementById("cat").addEventListener("click", calcDriveTime);
