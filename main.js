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

function calcDriveTime(dropLocationNum, loadLocationNum, display, tripNum) {
  //function calcDriveTime(dropLocationNum, loadLocationNum, display, tripNum) {



  /*if (loadLocationNum == 1) {
      fromNumber
      startToLoadTime
      loadTime
      loadToDropTime
      dropTime
      nextLocationNumber
   */
   
    /*let nextSiteLocation = ;
    jobs[tripNum+1].timeToLoadsite = store[fromNumber-1].;*//*
  }
  if (loadLocationNum == 2) {
    driveTime +=
      loadSite[loadLocationNum].toTerminal + store[dropLocationNum].magellan;
    load.innerHTML = driveTime;
    jobs[tripNum].timeToLoadsite = loadSite[loadLocationNum].toTerminal;
    jobs[tripNum].timeToDropsite = store[dropLocationNum].magellan;
    jobs[tripNum + 1].fromNumber = store[dropLocationNum].number;
  }
  if (loadLocationNum == 3) {
    driveTime +=
      loadSite[loadLocationNum].toTerminal + store[dropLocationNum].motiva;
    load.innerHTML = driveTime;
    jobs[tripNum].timeToLoadsite = 0;
    jobs[tripNum].timeToLoadsite = loadSite[loadLocationNum].toTerminal;
    jobs[tripNum].timeToDropsite = store[dropLocationNum].motiva;
    jobs[tripNum + 1].fromNumber = store[dropLocationNum].number;
  }
  if (loadLocationNum == 4) {
    driveTime +=
      loadSite[loadLocationNum].toTerminal + store[dropLocationNum].nustar;
    load.innerHTML = driveTime;
    jobs[tripNum].timeToLoadsite = 0;
    jobs[tripNum].timeToLoadsite = loadSite[loadLocationNum].toTerminal;
    jobs[tripNum].timeToDropsite = store[dropLocationNum].nustar;
    jobs[tripNum + 1].fromNumber = store[dropLocationNum].number;
  }
  if (loadLocationNum == 5) {
    driveTime +=
      loadSite[loadLocationNum].toTerminal + store[dropLocationNum].aledo;
    load.innerHTML = driveTime;
    jobs[tripNum].timeToLoadsite = loadSite[loadLocationNum].toTerminal;
    jobs[tripNum].timeToDropsite = store[dropLocationNum].aledo;
    jobs[tripNum + 1].fromNumber = store[dropLocationNum].number;
  }
  if (loadLocationNum == 6) {
    driveTime +=
      loadSite[loadLocationNum].toTerminal + store[dropLocationNum].cado;
    load.innerHTML = driveTime;
    jobs[tripNum].timeToLoadsite = loadSite[loadLocationNum].toTerminal;
    jobs[tripNum].timeToDropsite = store[dropLocationNum].cado;
  }*/
}

function callDrive() {
  calcDriveTime(dropLocation0.value, loadLocation0.value, "load0Display", 0);
  calcDriveTime(dropLocation1.value, loadLocation1.value, "load1Display", 1);
  calcDriveTime(dropLocation2.value, loadLocation2.value, "load2Display", 2);
  calcDriveTime(dropLocation23.value, loadLocation3.value, "load3Display", 3);
  console.log(jobs[0]);
  console.log(jobs[1]);
  console.log(jobs[2]);
  console.log(jobs[3]);
}

document.getElementById("goButton").addEventListener("click", callDrive);