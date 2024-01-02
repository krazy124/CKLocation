import { store, loadSite } from "./location.js";

function addDropLocation() {
  let newSelect = document.createElement("select");
  newSelect.setAttribute("class", "form-select");
  newSelect.setAttribute("aria-label", "Default select example");
  let newOption = document.createElement("option");
  newOption.innerHTML = "Drop Location";
  newOption.setAttribute("selected", "true");
  newSelect.appendChild(newOption);
  for (let i = 0; i < store.length; i++) {
    let opt = document.createElement("option");
    opt.setAttribute("value", store[i].address);
    opt.innerHTML = store[i].city + "-" + store[i].address;
    newSelect.appendChild(opt);
  }
  document.getElementById("dayDiv").appendChild(newSelect);

}

function addLoadSite(){
  let newSelect = document.createElement("select");
  newSelect.setAttribute("class", "form-select");
  newSelect.setAttribute("aria-label", "Default select example");
  let newOption = document.createElement("option");
  newOption.innerHTML = "Load Location";
  newOption.setAttribute("selected", "true");
  newSelect.appendChild(newOption);
  for (let i = 0; i < loadSite.length; i++) {
    let opt = document.createElement("option");
    opt.setAttribute("value", store[i].number);
    opt.innerHTML = loadSite[i].facility + "-" + loadSite[i].address;
    newSelect.appendChild(opt);
  }
  document.getElementById("dayDiv").appendChild(newSelect);
}
for (var i = 0; i < 4; i++) {
  addLoadSite();
  addDropLocation();
  document.getElementById('dayDiv').innerHTML += "<br>";
}