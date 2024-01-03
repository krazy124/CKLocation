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
  let load = document.getElementById("loadDisplay");
  if (load0.value == 2) {
    load.innerHTML = store[drop0.value].magellan;
  }
  if (load0.value == 3) {
    load.innerHTML = store[drop0.value].motiva;
  }
  if (load0.value == 4) {
    load.innerHTML = store[drop0.value].nustar;
  }
  if (load0.value == 5) {
    load.innerHTML = store[drop0.value].aledo;
  }
  if (load0.value == 6) {
    load.innerHTML = store[drop0.value].cado;
  }
}

document.getElementById("cat").addEventListener("click", calcDriveTime);
