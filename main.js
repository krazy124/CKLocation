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
};

for (var i = 0; i < 4; i++) {
  addLoadSite(i);
  addDropLocation(i);
  document.getElementById("dayDiv").innerHTML += "<br>";
}




function calcAgenda(jobNum) {
  document.getElementById('');
}




/*function callDrive() {
  calcDriveTime(1);
  calcDriveTime(2);
  calcDriveTi
  console.log(jobs[0]);
  console.log(jobs[1]);
  console.log(jobs[2]);
  console.log(jobs[3]);
}*/

document.getElementById("goButton").addEventListener("click", ()=>{calcAgenda(0);});