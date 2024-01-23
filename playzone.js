import {jobs} from "./location.js";

function milli(min) {return min * 60 * 1000;}


/*export let obj1 = [{
     eventType: "Pretrip",
     duration: jobs[0].pretrip,
     begin: jobs[0].startTime,
     end: new Date(jobs[0].startTime.getTime() + milli(jobs[0].pretrip)),
     location: store[jobs[0].startLocation].address
  },
   {
     eventType: "Travel",
     duration: jobs[0].startToLoadTime,
     begin: new Date(jobs[0].startTime.getTime() + milli(jobs[0].pretrip)),
     end: new Date(obj1[1].begin.getTime() + milli(jobs[0].startToLoadTime)),
     location: "Driving"
  },
  /* {
     eventType: "Load",
     duration: jobs[0].loadTime,
     begin: ob1[1].end,
     end: new Date(obj2.begin.getTime() + milli(jobs[0].loadTime)),
     location: jobs[0].loadSite
  },
   {
     eventType: "Travel",
     duration: jobs[0].loadToDropTime,
     begin: new Date(obj2.begin.getTime() + milli(jobs[0].loadTime)),
     end: new Date(obj3.end.getTime() + milli(jobs[0].loadToDropTime)),
     location: "Driving"
  },
   {
     eventType: "Fuel Drop",
     duration: jobs[0].loadToDropTime,
     begin: new Date(obj3.end.getTime() + milli(jobs[0].loadToDropTime)),
     end: new Date(obj4.end.getTime() + milli(jobs[0].loadToDropTime)),
     location: jobs[0].dropSite
  },
   {
     eventType: "Travel",
     duration: jobs[1].startToLoadTime,
     begin: new Date(obj4.end.getTime() + milli(jobs[0].loadToDropTime)),
     end: new Date(obj5.end.getTime() + milli(jobs[1].startToLoadTime)),
     location: "Driving"
  },
   {
     eventType: "Load",
     duration: jobs[1].loadTime,
     begin: new Date(obj5.end.getTime() + milli(jobs[1].startToLoadTime)),
     end: new Date(obj6.begin.getTime() + milli(jobs[1].loadTime)),
     location: jobs[1].loadSite
  },
   {
     eventType: "Travel",
     duration: jobs[1].loadToDropTime,
     begin: new Date(obj6.begin.getTime() + milli(jobs[1].loadTime)),
     end: new Date(obj7.end.getTime() + milli(jobs[1].loadToDropTime)),
     location: "Driving"
  },
   {
     eventType: "Fuel Drop",
     duration: jobs[1].loadToDropTime,
     begin: new Date(obj7.end.getTime() + milli(jobs[1].loadToDropTime)),
     end: new Date(obj8.end.getTime() + milli(jobs[1].loadToDropTime)),
     location: jobs[1].dropSite
  },
   {
     eventType: "Travel",
     duration: jobs[2].startToLoadTime,
     begin: new Date(obj8.end.getTime() + milli(jobs[1].loadToDropTime)),
     end: new Date(obj9.end.getTime() + milli(jobs[2].startToLoadTime)),
     location: "Driving"
  },
   {
     eventType: "Load",
     duration: jobs[2].loadTime,
     begin: new Date(obj9.end.getTime() + milli(jobs[2].startToLoadTime)),
     end: new Date(obj10.begin.getTime() + milli(jobs[2].loadTime)),
     location: jobs[2].loadSite
  },
   {
     eventType: "Travel",
     duration: jobs[2].loadToDropTime,
     begin: new Date(obj10.begin.getTime() + milli(jobs[2].loadTime)),
     end: new Date(obj11.end.getTime() + milli(jobs[2].loadToDropTime)),
     location: "Driving"
  },
   {
     eventType: "Fuel Drop",
     duration: jobs[2].loadToDropTime,
     begin: new Date(obj11.end.getTime() + milli(jobs[2].loadToDropTime)),
     end: new Date(obj12.end.getTime() + milli(jobs[2].loadToDropTime)),
     location: jobs[2].dropSite
  },
   {
     eventType: "Travel",
     duration: jobs[3].startToLoadTime,
     begin: new Date(obj12.end.getTime() + milli(jobs[2].loadToDropTime)),
     end: new Date(obj13.end.getTime() + milli(jobs[3].startToLoadTime)),
     location: "Driving"
  },
   {
     eventType: "Load",
     duration: jobs[3].loadTime,
     begin: new Date(obj13.end.getTime() + milli(jobs[3].startToLoadTime)),
     end: new Date(obj14.begin.getTime() + milli(jobs[3].loadTime)),
     location: jobs[3].loadSite
  },
   {
     eventType: "Travel",
     duration: jobs[3].loadToDropTime,
     begin: new Date(obj14.begin.getTime() + milli(jobs[3].loadTime)),
     end: new Date(obj15.end.getTime() + milli(jobs[3].loadToDropTime)),
     location: "Driving"
  },
   {
     eventType: "Fuel Drop",
     duration: jobs[3].loadToDropTime,
     begin: new Date(obj15.end.getTime() + milli(jobs[3].loadToDropTime)),
     end: new Date(obj16.end.getTime() + milli(jobs[3].loadToDropTime)),
     location: jobs[3].dropSite
  },
   {
     eventType: "Return to Terminal",
     duration: store[jobs[3].dropSite].toTerminal,
     begin: new Date(obj16.end.getTime() + milli(jobs[3].loadToDropTime)),
     end: new Date(obj17.end.getTime() + milli(store[jobs[3].dropSite].numberToTerminal)),
     location: jobs[3].dropSite
  }
  ];//end drive*/

 /*console.log(obj3.eventType);
 console.log(obj3.duration);
 console.log(f.format(obj3.begin));
 console.log(f.format(obj3.end));
 console.log(obj3.location);

 console.log(obj4.eventType);
 console.log(obj4.duration);
 console.log(f.format(obj4.begin));
 console.log(f.format(obj4.end));
 console.log(obj4.location);

 console.log(obj5.eventType);
 console.log(obj5.duration);
 console.log(f.format(obj5.begin));
 console.log(f.format(obj5.end));
 console.log(obj5.location);*/