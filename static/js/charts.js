function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("samples.json").then((data) => {
    var sampleNames = data.names;

    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    var firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
  
}

// Demographics Panel 
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

  });
}





  // 1. Create the buildCharts function.
  function buildCharts(sample) {
  // 2. Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
    
    // 3. Create a variable that holds the samples array. 
    var sampleArray = data.samples;
    
    // 4. Create a variable that filters the samples for the object with the desired sample number.
    var res = sampleArray.filter(element => element.id == sample);
    //console.log("Inside buildCharts" + res);

   
    //  5. Create a variable that holds the first sample in the array.
    var firstSample = res[0];
    console.log(firstSample);

    // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    var PANEL = d3.select("#sample-metadata");
    var otu_ids = firstSample.otu_ids;
    var otu_labels = firstSample.otu_labels;
    var sample_values = firstSample.sample_values;  

    // 7. Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids and map them in descending order  
    //  so the otu_ids with the most bacteria are last. 

    var yticks = otu_ids.map(sampleObj => "OTU" + sampleObj).slice(0,10).reverse();
    //console.log("yticks  ");
    console.log(yticks);

    // 8. Create the trace for the bar chart. 
    var trace = 
      {
        y: yticks,
        x: sample_values.slice(0, 10).reverse(),
        text: otu_labels.slice(0, 10).reverse(),
        type: "bar",
        orientation: "h",
      } ;
      
      var barData =[trace];
    

    // 9. Create the layout for the bar chart. 
     var barLayout = {
        title: "<b>Top 10 Bacteria Cultures</b>",
        xaxis: { title: "<b>Sample values</b>" },
        yaxis: { title: " <b>OTU IDs</b> " },
        width: 500, height: 500
        
      };
    
    // 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot("bar", barData, barLayout);







// **** Code for the bubble chart Starts *****//

// Deliverable 1 Step 10. Use Plotly to plot the data with the layout. 
 

// 1. Create the trace for the bubble chart.
var trace2 = 
     {
        x: otu_ids,
        y: sample_values,
        text: otu_labels,
        mode: "markers",
        marker: {
          size: sample_values,
          color: otu_ids,
          colorscale: "Jet"
        }
      
     };
var bubbleData = [trace2];

// 2. Create the layout for the bubble chart.

var bubbleLayout = {
  title: "<b>Top 10 Bacteria Cultures per Sample</b>",
  //margin: { t: 0 },
  yaxis: { title: "<b>Sample values</b>" },
  xaxis: { title: " <b>OTU IDs</b> " },
  width: 600, 
  height: 600,
  hovermode: "closest"
};

      
// 3. Use Plotly to plot the data with the layout.
Plotly.newPlot("bubble", bubbleData, bubbleLayout);







// *************** Code for Gauge Chart starts ************************
 // 1. Create a variable that filters the metadata array for the object with the desired sample number.
 var metadata = data.metadata;
 // console.log("Data MetaData looks like this =>" + data.metadata);
  var metadataArray = metadata.filter(element => element.id == sample);  
 // console.log("metadataArray => " + metadataArray)


  // 2. Create a variable that holds the first sample in the metadata array.  
   var firstMetaData =  metadataArray[0];
   console.log("firstMetaData => " + firstMetaData);

    // 3. Create a variable that holds the washing frequency.
   var wfreq = firstMetaData.wfreq;
   console.log("washing frequency : " + firstMetaData);
    
    // 4. Create the trace for the gauge chart.
    var gaugeData = [
      {
        domain: { x: [0, 1], y: [0, 1] },
        value: wfreq,
        title: { text: "<b> Belly Button Washing Frequency </b><br>Scrubs per Week" },
        type: "indicator",
        mode: "gauge+number",
        gauge: {
          axis: { range: [null, 10], tickwidth: 2, tickcolor: "black" },
          bar: { color: "black" },
          steps: [
            {range: [0, 2], color: "red"},
          {range: [2, 4], color: "orange"},
          {range: [4, 6], color: "yellow"},
          {range: [6, 8], color: "lightgreen"},
          {range: [8, 10], color: "green"}
          ],
          threshold: {
            //line: { color: "red", width: 4 },
            thickness: 0.75,
            value: wfreq
        }
      },
  }];
    
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = { 
      width: 600, 
      height: 500, 
      margin: { t: 0, b: 0 },
      font: { color: "black"}
    };

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot("gauge", gaugeData, gaugeLayout);
 

  });
}

