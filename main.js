import { store, loadSite, jobs } from "./location.js";
//import { obj1 } from "./playzone.js";

//Start Section these 2 functions add all selects and add the options to those selects which includes all the load locations and stores. These 2 functions start as soo as the page opens------------------------------------
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
//End of Start Section-----------------------------------------------------------------------------------------

//Takes the optins that have been selected by the user and save them to jobs array in locations.js
//added
function saveLocations() {
  jobs[0].loadSite = parseInt(document.getElementById("loadLocation0").value);
  jobs[0].dropSite =
    parseInt(document.getElementById("dropLocation0").value) + 1;
  jobs[0].nextLocationNumber = parseInt(
    document.getElementById("loadLocation1").value
  );

  jobs[1].startLocation =
    parseInt(document.getElementById("dropLocation0").value) + 1;
  jobs[1].loadSite = parseInt(document.getElementById("loadLocation1").value);
  jobs[1].dropSite =
    parseInt(document.getElementById("dropLocation1").value) + 1;
  jobs[1].nextLocationNumber = parseInt(
    document.getElementById("loadLocation2").value
  );

  jobs[2].startLocation =
    parseInt(document.getElementById("dropLocation1").value) + 1;
  jobs[2].loadSite = parseInt(document.getElementById("loadLocation2").value);
  jobs[2].dropSite =
    parseInt(document.getElementById("dropLocation2").value) + 1;
  jobs[2].nextLocationNumber = parseInt(
    document.getElementById("loadLocation3").value
  );

  jobs[3].startLocation =
    parseInt(document.getElementById("dropLocation2").value) + 1;
  jobs[3].loadSite = parseInt(document.getElementById("loadLocation3").value);
  jobs[3].dropSite =
    parseInt(document.getElementById("dropLocation3").value) + 1;
  jobs[3].nextLocationNumber = 0;
}

//Saves option selected from loadLocation0 distance to the termainal and saves it in jobs[0] start to load time
function calculateTime() {
  jobs[0].startToLoadTime = loadSite[loadLocation0.value].toTerminal;
}

//added
function loadDropDistance() {
  for (let trip = 0; trip < 4; trip++) {
    if (jobs[trip].loadSite == 0) {
      jobs[trip].loadToDropTime = store[jobs[trip].dropSite].terminal;
      jobs[trip].loadTime = 0;
    } else if (jobs[trip].loadSite == 1) {
      jobs[trip].loadToDropTime = store[jobs[trip].dropSite].magellan;
      jobs[trip].startAddress = loadSite[1].address;
    } else if (jobs[trip].loadSite == 2) {
      jobs[trip].loadToDropTime = store[jobs[trip].dropSite].motiva;
      jobs[trip].startAddress = loadSite[2].address;
    } else if (jobs[trip].loadSite == 3) {
      jobs[trip].loadToDropTime = store[jobs[trip].dropSite].nustar;
      jobs[trip].startAddress = loadSite[3].address;
    } else if (jobs[trip].loadSite == 4) {
      jobs[trip].loadToDropTime = store[jobs[trip].dropSite].aledo;
      jobs[trip].startAddress = loadSite[4].address;
    } else if (jobs[trip].loadSite == 5) {
      jobs[trip].loadToDropTime = store[jobs[trip].dropSite].caddo;
      jobs[trip].startAddress = loadSite[5].address;
    }
  }
}

function callNumToTerm() {
  for (var i = 0; i < 4; i++) {
    numberToTerminal(i);
  }
}

function numberToTerminal(jobNum) {
  if (jobs[jobNum].loadSite == 0) {
    jobs[jobNum].startToLoadTime = 0;
  } else if (jobs[jobNum].loadSite == 1) {
    jobs[jobNum].startToLoadTime = store[jobs[jobNum].startLocation].magellan;
  } else if (jobs[jobNum].loadSite == 2) {
    jobs[jobNum].startToLoadTime = store[jobs[jobNum].startLocation].motiva;
  } else if (jobs[jobNum].loadSite == 3) {
    jobs[jobNum].startToLoadTime = store[jobs[jobNum].startLocation].nustar;
  } else if (jobs[jobNum].loadSite = 4) {
    jobs[jobNum].startToLoadTime = store[jobs[jobNum].startLocation].aledo;
  } else if (jobs[jobNum].loadSite = 5) {
    jobs[jobNum].startToLoadTime = store[jobs[jobNum].startLocation].caddo;
  }
}

//let agenda = document.getElementById('dayAgenda');
//let addDiv = document.createElement('div');
//addDiv.innerHTML = loadSite[0].address;
let agenda = [];

/*let typeEvent = [
  "Pretrip",
  "Travel",
  "FuelLoad",
  "FuelDrop",
  "FuelTruck",
  "Return",
  "Delay"];*/

const f = new Intl.DateTimeFormat("en-us", { timeStyle: "short" });

//This functions takes the information that was saved in the 3 arrays on locations.js and organzie them into one array. It is organized in the sequence they will be outputed into the aggenda later.
function makeA() {
  //Variables----
  const startTime = new Date(2024, 0, 14, 3, 0, 0, 0);

  //functions------

  function addTime(time, add) {
    return time.getTime() + add;
  }

  function makeDate(minute) {
    return new Date(startTime.getTime() + milli(minute));
  }
 
  // 
  //A's-----
  agenda[1] = startTime; //start pretrip
  agenda[2] = 25; //duration
  agenda[3] = new Date(agenda[1].getTime() + milli(agenda[2]), store[jobs[0].startLocation].address); //End pretrip
  agenda[4] = store[jobs[0].startLocation].address; //End pretrip

  agenda[5] = jobs[0].startToLoadTime; //duration
  agenda[6] = new Date(agenda[3].getTime() + milli(agenda[5])); //end drive

  agenda[7] = agenda[6]; //start load
  agenda[8] = jobs[0].loadTime; //duration
  agenda[9] = new Date(agenda[7].getTime() + milli(agenda[8])); //end load

  agenda[10] = agenda[9]; //start drive
  agenda[11] = jobs[0].loadToDropTime; //duration
  agenda[12] = new Date(agenda[10].getTime() + milli(agenda[11])); //end drive

  agenda[13] = agenda[12]; //start drop
  agenda[14] = jobs[0].dropTime; //duration
  agenda[15] = new Date(agenda[12].getTime() + milli(agenda[14])); //end drop

  agenda[16] = agenda[15]; //start drive
  agenda[17] = jobs[1].startToLoadTime; //duration
  agenda[18] = new Date(agenda[16].getTime() + milli(agenda[17])); //end drive

  agenda[19] = agenda[18]; //start load
  agenda[20] = jobs[1].loadTime; //duration
  agenda[21] = new Date(agenda[19].getTime() + milli(agenda[20])); //end drive

  agenda[22] = agenda[21]; //start drive
  agenda[23] = jobs[1].loadToDropTime; //duration
  agenda[24] = new Date(agenda[22].getTime() + milli(agenda[23])); //end drive

  agenda[25] = agenda[24]; //start drop
  agenda[26] = jobs[1].dropTime; //duration
  agenda[27] = new Date(agenda[25].getTime() + milli(agenda[26])); //end drop

  agenda[28] = agenda[27]; //start drive
  agenda[29] = jobs[2].startToLoadTime; //duration
  agenda[30] = new Date(agenda[28].getTime() + milli(agenda[29])); //end drive

  agenda[31] = agenda[30]; //start load
  agenda[32] = jobs[2].loadTime; //duration
  agenda[33] = new Date(agenda[31].getTime() + milli(agenda[32])); //end drive

  agenda[34] = agenda[33]; //start drive
  agenda[35] = jobs[2].loadToDropTime; //duration
  agenda[36] = new Date(agenda[34].getTime() + milli(agenda[35])); //end drive

  agenda[37] = agenda[36]; //start drop
  agenda[38] = jobs[2].dropTime; //duration
  agenda[39] = new Date(agenda[37].getTime() + milli(agenda[38])); //end drop

  agenda[40] = agenda[39]; //start drive
  agenda[41] = jobs[3].startToLoadTime; //duration
  agenda[42] = new Date(agenda[40].getTime() + milli(agenda[41])); //end drive

  agenda[43] = agenda[42]; //start load
  agenda[44] = jobs[3].loadTime; //duration
  agenda[45] = new Date(agenda[43].getTime() + milli(agenda[44])); //end drive

  agenda[46] = agenda[45]; //start drive
  agenda[47] = jobs[3].loadToDropTime; //duration
  agenda[48] = new Date(agenda[46].getTime() + milli(agenda[47])); //end drive

  agenda[49] = agenda[48]; //start drop
  agenda[50] = jobs[3].dropTime; //duration
  agenda[51] = new Date(agenda[49].getTime() + milli(agenda[50])); //end drop

  agenda[52] = agenda[51];
  //addDiv(obj1[0],obj1[1],obj1[2],obj1[3],obj1[4]);
  //cat.appendChild(subEntry2);

}

//Creates a new timeblock in the agneda and outputs it on the bottom of the screen
function addDiv(eventType, startTime, duration, newTime, address) {
  let timeBlock = document.createElement("div");
  timeBlock.className = "timeaddEntry";

  let subEntry = document.createElement("div");
  subEntry.className = "leftSide";
  subEntry.innerHTML = obj1[0] + "<br>" + obj1[1] + "<br>min";
  timeBlock.appendChild(subEntry);

  let subEntry2 = document.createElement("div");
  subEntry2.className = "middleTop";
  subEntry2.innerHTML = f.format(obj1[2]);
  timeBlock.appendChild(subEntry2);

  let subEntry3 = document.createElement("div");
  subEntry3.className = "middleLower";
  subEntry3.innerHTML = f.format(obj1[3]);
  timeBlock.appendChild(subEntry3);

  let subEntry4 = document.createElement("div");
  subEntry4.className = "rightSide";
  subEntry4.innerHTML = obj1[4];
  timeBlock.appendChild(subEntry4);

  document.getElementById("mainDiv").appendChild(timeBlock);
}

function showJobsArrays() {
  for (let index = 0; index < 4; index++) {
    console.log(jobs[index]);
  }
}

document.getElementById("goButton").addEventListener("click", () => {
  saveLocations();
  loadDropDistance();
  callNumToTerm();
  showJobsArrays();
  makeA();
  //console.log(obj1);
  //addDiv();
});

//addTime(start,97);