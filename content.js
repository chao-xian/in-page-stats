var boxoutContent;

/**
 * Insert the chart with a given title
 */
var insertChart = function(title) {
  // Get the body element
  var bodyElement = document.body;

  // Boxout
  var boxoutDiv = document.createElement('div');
  boxoutDiv.setAttribute('class', 'boxout6Columns left');
  boxoutDiv.setAttribute('style', 'position: absolute;');

  var boxoutTop = document.createElement('div');
  boxoutTop.setAttribute('class', 'boxoutNoTop');
  boxoutDiv.appendChild(boxoutTop);

  boxoutContent = document.createElement('div');
  boxoutContent.setAttribute('class', 'boxoutContent');
  boxoutDiv.appendChild(boxoutContent);

  var boxoutBottom = document.createElement('div');
  boxoutBottom.setAttribute('class', 'boxoutNoBottom');
  boxoutContent.appendChild(boxoutBottom);

  // Create a heading
  var newText = document.createTextNode('Platform stats for ' + title);
  var newElement = document.createElement('h2');
  newElement.appendChild(newText);

  // Stick the header into the container div
  boxoutContent.appendChild(newElement);

  //Stick the container div into the body of the page
  bodyElement.insertBefore(boxoutDiv, bodyElement.firstChild);
};

// Setup our AJAX request to the API
var xhr = new XMLHttpRequest();
var data;
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
        // console.log(xhr.responseText);

        // Parse the data into JSON
        data = JSON.parse(xhr.responseText);

        var chartData = {};

        var dataSets = [];

        dataSets.push(
            {
                label: "Mobile",
                value: parseInt(data.data[0].mobile, 10),
                color: "#F38630",
                labelColor : 'white',
                labelFontSize : '16'
            },
            {
                label: "Tablet",
                value: parseInt(data.data[0].tablet, 10),
                color : "#E0E4CC",
                labelColor : 'white',
                labelFontSize : '16'
            },
            {
                label: "Desktop",
                value: parseInt(data.data[0].desktop, 10),
                color : "#69D2E7",
                labelColor : 'white',
                labelFontSize : '16'
            }
        );

        chartData.datasets = dataSets;

        var chartElement = document.createElement('canvas');
        chartElement.setAttribute('id', 'myChart');
        chartElement.setAttribute('width', '400');
        chartElement.setAttribute('height', '400');
        boxoutContent.appendChild(chartElement);

        var context = chartElement.getContext('2d');
        new Chart(context).Pie(dataSets);

    }
};

// Work out what we're looking at and set which report to pull accordingly
var url = window.location.href;

// console.log("Url is " + url);

// Default to stats for all of the site
var reportDataPoint = 'http://opendatapress.appspot.com/bathweb/platform.json';
var title = " all of www.bath.ac.uk";

// Stats for the UG landing page
var ugSiteRegex = /http:\/\/www\.bath\.ac\.uk\/study\/\ug(\/|\/index.html)?$/;
if (url.match(ugSiteRegex)) {
  console.log("You're in the UG website");
  reportDataPoint = 'http://opendatapress.appspot.com/bathweb/study-ug-landing-page-platform.json';
  title = "Study UG";
}

insertChart(title);

xhr.open('get', reportDataPoint);
xhr.send({});

