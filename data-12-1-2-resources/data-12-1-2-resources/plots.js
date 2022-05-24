//Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);

//Plotly.newPlot("plotArea", [{x: [5,10,15], y: [10,20,30]}]);

var trace = {
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
 };
 Plotly.newPlot("plotArea1", [trace]);


//added a tittle
 var trace = [{
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
}];
var layout = {
    title: "Luncheon Survey",
    xaxis: {title: "Food Option"},
    yaxis: {title: "Number of Respondents"}
};
Plotly.newPlot("plotArea", trace,layout);

// skill drill

var trace = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar"
   };
   var data = [trace];
   var layout = {
    title: "'Bar' Chart",
    xaxis: {title: "Drinks"},
    yaxis: {title: "% of Drinks Ordered"}
   };
   Plotly.newPlot("plotArea2", data, layout);



   //Pie chart

   var trace = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
       "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
  };
  var data = [trace];
  var layout = {
    title: "'Pie' Chart",
  };
  Plotly.newPlot("plotArea3", data, layout);


  // SKILL DRILL - Scattered plot
  var trace1 = {
    x: [1, 2, 3, 4],
    y: [10, 11, 12, 13],
    mode: 'markers',
    marker: {
      size: [40, 60, 80, 100]
    }
  };
  
  var data = [trace1];
  
  var layout = {
    title: 'Marker Size',
    showlegend: false,
    height: 600,
    width: 600
  };
  
  Plotly.newPlot('myDiv', data, layout);


//MAP function

var numbers = [1,2,3,4,5];
var doubled = numbers.map(function(num){
    return num * 2;
});
console.log("numbers dobled are as follows " + doubled);

let words = ['these','words','need' ,'capitalization'] ;
let caps = words.map(word=>word.toUpperCase());
console.log("After Capitalization the string Array looks like this -> " + caps+ " ");


// Skill Drill - Add 5 to each element on the number Array
var numbers = [0,2,4,6,8];
var addedNums = numbers.map(num=>num+5);
console.log("After adding 5 to each number in  Array looks like this -> " + addedNums);


var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];
/* var cityNames = cities.map(function(city){
    return city.City;
}); */
var cityNames = cities.map(city => city.City);
console.log("cityNames are " + cityNames);

//  SKILL DRILL - display the population
var cityPop = cities.map(city => city.population);
console.log("city population are " + cityPop);

//Filter function using arrow function
 let num = [13,22,36,54,55];
 let evenNum = num.filter(no=> no %2 === 0);
 console.log("evenNum are " + evenNum);

 var numbers = [1,2,3,4,5];

var larger = numbers.filter(function(num){
    return num > 1;
});

console.log(larger);


var familyAge = [2,3,39,37,9];
 
var olderThanFive = familyAge.filter(function(age){
    return age > 5;
});
 

// Skill drill - Filter the results to include only animals whose species name starts with the letter "s."
var StringWords = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
console.log(StringWords.filter(sword=>sword.startsWith('s')));

//During each iteration, the anonymous function, an arrow function in this case, compares one element of the array (a) with another element in the array (b). From a, it subtracts b. If the result is negative (i.e., b is larger than a) then it stays put. If the result of the subtraction is positive, the order of the two elements is reversed. Look at a modified version of this example.
var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((a,b) => a - b);
console.log(sortedAge);

// The following code sort the familyAge array in descending order
var familyAge = [3,2,39,37,9];
var sortedAge1 = familyAge.sort((a,b) => b - a);
console.log(sortedAge1);

var integers = [0,1,2,3,4,5];
var slice1 = integers.slice(0,2);
console.log("After slicing "+ slice1);

// SKILL DRILL - Use slice() to select the first three elements of the words array.
let animalNames = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
console.log("First three animals : " + animalNames.slice(0,3));

//To slice to the end of an array, you can omit the second argument:
console.log("Last elements : " + animalNames.slice(3, ));