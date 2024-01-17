import { store, loadSite, jobs } from "./location.js";

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

function numberToTerminal(input) {
  if ((input = 0)) {
    return "terminal";
  } else if ((input = 1)) {
    return "magellan";
  } else if ((input = 2)) {
    return "motiva";
  } else if ((input = 3)) {
    return "nustar";
  } else if ((input = 4)) {
    return "aledo";
  } else if ((input = 5)) {
    return "caddo";
  }
}

function startToLoadCombo() {
  for (let index = 0; index < 4; index++) {
    let daSite = numberToTerminal(jobs[i].nextLocationNumber);
    console.log("daSite is: " + daSite);
    let loadLoc = "aledo";
    let dist2Alledo = store[1].loadLoc;
    console.log("d to A " + dist2Alledo);
    let theEval = eval(`"Distance to Aledo is: "+${dist2Alledo}`);
    console.log(theEval);
    //jobs[i].startToLoadTime = store[jobs[i].startLocation];
  }
}

function startToLoadCalc() {
  for (var i = 0; i < 4; i++) {
    let veri = numberToTerminal(jobs[i].loadSite);

    jobs[i].startToLoadTime = eval(`store[${i}].${veri}`);
  }
}
function addTime(timeIn, change) {
  const start2 = new Date(timeIn);
  start2.setMinutes(start2.getMinutes() + change);
  console.log(f.format(start2));
}

//let agenda = document.getElementById('dayAgenda');
//let addDiv = document.createElement('div');
//addDiv.innerHTML = loadSite[0].address;

//This fumctions takes the information that was saved in the 3 arrays on locations.js and organzie them into one array. It is organized in the sequence they will be outputed into the aggenda later.
function makeA() {
  //Variables----
  const f = new Intl.DateTimeFormat("en-us", { timeStyle: "short" });
  const startTime = new Date(2024, 0, 14, 3, 0, 0, 0);
  const pretripTime = 28;
  let agenda = [];

  //functions------
  function milli(min) {
    return min * 60 * 1000;
  }
  function addTime(time, add) {
    return time.getTime() + add;
  }
  function makeDate(minute) {
    return new Date(startTime.getTime() + milli(minute));
  }
  //A's-----
  agenda.a1 = startTime; //start pretrip
  agenda.a2 = milli(32); //duration
  agenda.a3 = new Date(agenda.a1.getTime() + agenda.a2); //End pretrip
  console.log(f.format(agenda.a1) + ":" + f.format(agenda.a3));

  agenda.a4 = agenda.a3; //start drive
  agenda.a5 = milli(jobs[0].startToLoadTime); //duration
  agenda.a6 = new Date(agenda.a4.getTime() + agenda.a5); //end drive
  console.log(f.format(agenda.a4) + ":" + f.format(agenda.a6));

  agenda.a7 = agenda.a6; //start load
  agenda.a8 = milli(jobs[0].loadTime); //duration
  agenda.a9 = new Date(agenda.a7.getTime() + agenda.a8); //end drive
  console.log(f.format(agenda.a7) + ":" + f.format(agenda.a9));

  agenda.a10 = agenda.a9; //start drive
  agenda.a11 = milli(jobs[0].loadToDropTime); //duration
  agenda.a12 = new Date(agenda.a10.getTime() + agenda.a11); //end drive
  console.log(f.format(agenda.a10) + ":" + f.format(agenda.a12));

  agenda.a13 = agenda.a12; //start drop
  agenda.a14 = milli(jobs[0].dropTime); //duration
  agenda.a15 = new Date(agenda.a12.getTime() + agenda.a14); //end drop
  console.log(f.format(agenda.a13) + ":" + f.format(agenda.a15));

  agenda.a16 = agenda.a15; //start drive
  agenda.a17 = milli(jobs[1].startToLoadTime); //duration
  agenda.a18 = new Date(agenda.a16.getTime() + agenda.a17); //end drive
  console.log(f.format(agenda.a16) + ":" + f.format(agenda.a18));

  agenda.a19 = agenda.a18; //start load
  agenda.a20 = milli(jobs[1].loadTime); //duration
  agenda.a21 = new Date(agenda.a19.getTime() + agenda.a20); //end drive
  console.log(f.format(agenda.a19) + ":" + f.format(agenda.a20));

  agenda.a22 = agenda.a21; //start drive
  agenda.a23 = milli(jobs[1].loadToDropTime); //duration
  agenda.a24 = new Date(agenda.a22.getTime() + agenda.a23); //end drive
  console.log(f.format(agenda.a22) + ":" + f.format(agenda.a24));

  agenda.a25 = agenda.a24; //start drop
  agenda.a26 = milli(jobs[1].dropTime); //duration
  agenda.a27 = new Date(agenda.a25.getTime() + agenda.a26); //end drop
  console.log(f.format(agenda.a25) + ":" + f.format(agenda.a27));

  agenda.a28 = agenda.a27; //start drive
  agenda.a29 = milli(jobs[2].startToLoadTime); //duration
  agenda.a30 = new Date(agenda.a28.getTime() + agenda.a29); //end drive
  console.log(f.format(agenda.a28) + ":" + f.format(agenda.a30));

  agenda.a31 = agenda.a30; //start load
  agenda.a32 = milli(jobs[2].loadTime); //duration
  agenda.a33 = new Date(agenda.a31.getTime() + agenda.a32); //end drive
  console.log(f.format(agenda.a31) + ":" + f.format(agenda.a33));

  agenda.a34 = agenda.a33; //start drive
  agenda.a35 = milli(jobs[2].loadToDropTime); //duration
  agenda.a36 = new Date(agenda.a34.getTime() + agenda.a35); //end drive
  console.log(f.format(agenda.a34) + ":" + f.format(agenda.a36));

  agenda.a37 = agenda.a36; //start drop
  agenda.a38 = milli(jobs[2].dropTime); //duration
  agenda.a39 = new Date(agenda.a37.getTime() + agenda.a38); //end drop
  console.log(f.format(agenda.a37) + ":" + f.format(agenda.a39));

  agenda.a40 = agenda.a39; //start drive
  agenda.a41 = milli(jobs[3].startToLoadTime); //duration
  agenda.a42 = new Date(agenda.a40.getTime() + agenda.a41); //end drive
  console.log(f.format(agenda.a40) + ":" + f.format(agenda.a42));

  agenda.a43 = agenda.a42; //start load
  agenda.a44 = milli(jobs[3].loadTime); //duration
  agenda.a45 = new Date(agenda.a43.getTime() + agenda.a44); //end drive
  console.log(f.format(agenda.a43) + ":" + f.format(agenda.a45));

  agenda.a46 = agenda.a45; //start drive
  agenda.a47 = milli(jobs[3].loadToDropTime); //duration
  agenda.a48 = new Date(agenda.a46.getTime() + agenda.a47); //end drive
  console.log(f.format(agenda.a46) + ":" + f.format(agenda.a48));

  agenda.a49 = agenda.a48; //start drop
  agenda.a50 = milli(jobs[3].dropTime); //duration
  agenda.a51 = new Date(agenda.a49.getTime() + agenda.a50); //end drop
  console.log(f.format(agenda.a49) + ":" + f.format(agenda.a51));

  agenda.a52 = agenda.a51;
  console.log(
    "Return to terminal" + f.format(agenda.a51) + ":" + f.format(agenda.a54)
  );

  //cat.appendChild(subEntry2);

  /*function notSure(){
  let subEntry3 = document.createElement('div');
  subEntry3.className = 'middleLower';
  subEntry3.innerHTML = "bird";
  cat.appendChild(subEntry3);

  let subEntry4 = document.createElement('div');
  subEntry4.className = 'rightSide';
  subEntry4.innerHTML = "frog";
  cat.appendChild(subEntry4);

  document.getElementById('mainDiv').appendChild(cat);
  }*/
}

//Creates a new timeblock in the agneda and outputs it on the bottom of the screen
function addDiv() {
  let timeBlock = document.createElement("div");
  timeBlock.className = "timeaddEntry";

  let subEntry = document.createElement("div");
  subEntry.className = "leftSide";
  subEntry.innerHTML = `cat<br>min`;
  timeBlock.appendChild(subEntry);

  let subEntry2 = document.createElement("div");
  subEntry2.className = "middleTop";
  subEntry2.innerHTML = "dog";
  timeBlock.appendChild(subEntry2);

  let subEntry3 = document.createElement("div");
  subEntry3.className = "middleLower";
  subEntry3.innerHTML = "bird";
  timeBlock.appendChild(subEntry3);

  let subEntry4 = document.createElement("div");
  subEntry4.className = "rightSide";
  subEntry4.innerHTML = "frog";
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
  //startToLoadCalc();
  //startToLoadCombo();
  showJobsArrays();

  console.log(jobs[0].loadSite);
  console.log(numberToTerminal(1));
  console.log(eval(`store[0].magellan`));
  // use later
  //makeA();
  //addDiv();
});
//addTime(start,97);
/*test.setMinutes(test.getMinutes()+90);
console.log(f.format(test));*/
