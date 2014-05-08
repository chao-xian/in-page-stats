/**
 * Toggle the flyout
 */
var toggleFlyout = function() {
  console.log('Clicked');
  var boxout = document.getElementById('flyout');
  console.log(boxout.getAttribute('style'));
  if (boxout.getAttribute('style') === 'margin-left: -9999px; position: absolute' || boxout.offsetParent === null) {
    boxout.setAttribute('style', 'margin-left: 0; position: relative');
  } else {
    boxout.setAttribute('style', 'margin-left: -9999px; position: absolute');
  }
}

/**
 * Insert the chart with a given title
 */
var insertChart = function(title, dataSets) {
  // Get the body element
  var bodyElement = document.body;

  // Wrapper div for flyout
  var flyoutContainer = document.createElement('div');

  // Boxout
  var boxoutDiv = document.createElement('div');
  boxoutDiv.setAttribute('class', 'boxout6Columns left');
  boxoutDiv.setAttribute('id', 'flyout');
  boxoutDiv.setAttribute('style', 'position: absolute;');

  var boxoutTop = document.createElement('div');
  boxoutTop.setAttribute('class', 'boxoutNoTop');
  boxoutDiv.appendChild(boxoutTop);

  var boxoutContent = document.createElement('div');
  boxoutContent.setAttribute('class', 'boxoutContent');
  boxoutDiv.appendChild(boxoutContent);

  var boxoutBottom = document.createElement('div');
  boxoutBottom.setAttribute('class', 'boxoutNoBottom');
  boxoutDiv.appendChild(boxoutBottom);

  // Create a heading
  var newText = document.createTextNode('Platform stats for ' + title);
  var newElement = document.createElement('h2');
  newElement.appendChild(newText);

  // Stick the header into the container div
  boxoutContent.appendChild(newElement);

  // A thing to click on
  var label = document.createElement('span');
  label.appendChild(document.createTextNode('Click me!'));
  label.addEventListener('click', toggleFlyout, false);

  flyoutContainer.appendChild(boxoutDiv);
  flyoutContainer.appendChild(label);

  //Stick the container div into the body of the page
  bodyElement.insertBefore(flyoutContainer, bodyElement.firstChild);

  var chartElement = document.createElement('canvas');
  chartElement.setAttribute('id', 'myChart');
  chartElement.setAttribute('width', '400');
  chartElement.setAttribute('height', '400');
  boxoutContent.appendChild(chartElement);

  var context = chartElement.getContext('2d');
  new Chart(context).Pie(dataSets);
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

        // chartData.datasets = dataSets;

        insertChart(title, dataSets);

    }
};

// Work out what we're looking at and set which report to pull accordingly
var url = window.location.href;

// console.log("Url is " + url);

// Default to stats for all of the site
// var reportDataPoint = 'http://opendatapress.appspot.com/bathweb/platform.json';
// Don't show it for pages that aren't in our list
var reportDataPoint = '';
var title = " all of www.bath.ac.uk";

// Stats for the UG landing page
var ugSiteRegex = /http:\/\/www\.bath\.ac\.uk\/study\/\ug(\/|\/index.html)?$/;
if (url.match(ugSiteRegex)) {
  console.log("You're in the UG website");
  reportDataPoint = 'http://opendatapress.appspot.com/bathweb/study-ug-landing-page-platform.json';
  title = "Study UG";
}

if (reportDataPoint.length > 0) {
  xhr.open('get', reportDataPoint);
  xhr.send({});
}

