const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(receivedData => console.log(receivedData));


const url1 = "https://api.spacexdata.com/v2/launchpads";
d3.json(url1).then(data => console.log(data));
console.log("only the first element in the array returned from the API call.")
d3.json(url).then(spaceXResults => console.log(spaceXResults[0]));
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

d3.json(url).then(spaceXResults =>
    console.log("latitude "+spaceXResults[0].location.latitude));


alert("Skill Drill Begins")    
d3.json(url).then(spaceXResults => 
   console.log( "Latitude " + spaceXResults.Map(loc => loc.location.latitude)));    

d3.json(url).then(spaceXResults => 
    console.log( "Longitude " + spaceXResults.Map(loc => loc.location.longitude)));   