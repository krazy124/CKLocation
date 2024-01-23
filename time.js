  /*<h2> Add 30 minutes and 2 hours to the JavaScript Date object using getTime( ) method </h2>
   <p> Click on the button to add 30 minutes and 2 hours to the current date/time.</p>
   <button onclick="add()">Click Me</button>
   <p id="currentTime">Current Time : </p>
   <p id="updatedTime1">Updated Time (Adding 30 minutes): </p>
   <p id="updatedTime2">Updated Time (Adding 2 hours): </p>*/


   
   // Code the show current time
   let ct = document.getElementById("currentTime")
   setInterval(() => {
      let currentTime = new Date().getTime();
      ct.innerText = "Current Time : " + new Date(currentTime).toLocaleTimeString() }, 1000)

   // Code to add 30 minutes and 2 hours to current Time
   let ut1 = document.getElementById("updatedTime1")
   let ut2 = document.getElementById("updatedTime2")

   function add() {
      setInterval(() => {
         
         // Adding 30 minutes
         let dt1 = new Date();
         dt1 = new Date(dt1.getTime() + 30 * 60 * 1000)
         ut1.innerText = "Updated Time (Adding 30 minutes) : " + dt1.toLocaleTimeString();
   
         // Adding 2 hours
         let dt2 = new Date();
         dt2 = new Date(dt2.getTime() + 2 * 60 * 60 * 1000)
         ut2.innerText = "Updated Time (Adding 2 hours) : " + dt2.toLocaleTimeString(); 
      }, 1000)
   }
   
   const start = new Date();
   const f = new Intl.DateTimeFormat("en-us",{dateStyle: "full",})
   console.log(f.format(start));
   
   
   
     let obj14 = {
       eventType: "Travel",
       duration: jobs[3].startToLoadTime,
       begin: obj13.end,
       end: new Date(obj13.end.getTime() + milli(jobs[3].startToLoadTime)),
       location: "Driving"
     }; //end drive
   
     let obj15 = {
       eventType: "Load",
       duration: jobs[3].loadTime,
       begin: obj14.end,
       end: new Date(obj14.begin.getTime() + milli(jobs[3].loadTime)),
       location: jobs[3].loadSite
     }; //end drive
   
     let obj16 = {
       eventType: "Travel",
       duration: jobs[3].loadToDropTime,
       begin: obj15.end,
       end: new Date(obj15.end.getTime() + milli(jobs[3].loadToDropTime)),
       location: "Driving"
     }; //end drive
   
     let obj17 = {
       eventType: "Fuel Drop",
       duration: jobs[3].loadToDropTime,
       begin: obj16.end,
       end: new Date(obj16.end.getTime() + milli(jobs[3].loadToDropTime)),
       location: jobs[3].dropSite
     }; //end drive