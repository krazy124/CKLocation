import { store, loadSite, jobs } from "./location.js";

function addDropLocation(i) {
  let newSelect = document.createElement("select");
  newSelect.setAttribute("id", "dropLocation" + i);
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
  //creates select and sets attributes
  let newSelect = document.createElement("select");
  newSelect.setAttribute("id", "loadLocation" + i);
  newSelect.setAttribute("class", "form-select");
  newSelect.setAttribute("aria-label", "Default select example");
  //creates 1st option and adds to select
  let newOption = document.createElement("option");
  newOption.innerHTML = "Load Location";
  newOption.setAttribute("selected", "true");
  newSelect.appendChild(newOption);
  //creates options for load locations and adds to select
  for (let i = 0; i < loadSite.length; i++) {
    let opt = document.createElement("option");
    opt.setAttribute("value", loadSite[i].value);
    opt.innerHTML = loadSite[i].facility + "-" + loadSite[i].address;
    newSelect.appendChild(opt);
  }
  let dayDiv = document.getElementById("dayDiv");
  dayDiv.appendChild(newSelect);
}

for (var i = 0; i < 4; i++) {
  addLoadSite(i);
  addDropLocation(i);
  document.getElementById("dayDiv").innerHTML += "<br>";
}

function saveLocations(jobNum) {
  let loadIt0 = document.getElementById("loadLocation0");
  let loadIt1 = document.getElementById("loadLocation1");
  let loadIt2 = document.getElementById("loadLocation2");
  let loadIt3 = document.getElementById("loadLocation3");
  let dropIt0 = document.getElementById("dropLocation0");
  let dropIt1 = document.getElementById("dropLocation1");
  let dropIt2 = document.getElementById("dropLocation2");
  let dropIt3 = document.getElementById("dropLocation3");
  jobs[0].loadSite = parseInt(loadIt0.value);
  jobs[0].dropSite = parseInt(dropIt0.value);
  jobs[1].loadSite = parseInt(loadIt1.value);
  jobs[1].dropSite = parseInt(dropIt1.value);
  jobs[2].loadSite = parseInt(loadIt2.value);
  jobs[2].dropSite = parseInt(dropIt2.value);
  jobs[3].loadSite = parseInt(loadIt3.value);
  jobs[3].dropSite = parseInt(dropIt3.value);
  console.log(jobs[0]);
  console.log(jobs[1]);
  console.log(jobs[2]);
  console.log(jobs[3]);
}

document.getElementById("goButton").addEventListener("click", () => {
  saveLocations(0);
});
