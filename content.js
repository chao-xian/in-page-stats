// var url = window.location.href;

// console.log("Url is " + url);


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
        console.log(chartData);

        var chartElement = document.createElement('canvas');
        chartElement.setAttribute('id', 'myChart');
        chartElement.setAttribute('width', '400');
        chartElement.setAttribute('height', '400');
        boxoutContent.appendChild(chartElement);

        var context = chartElement.getContext('2d');
        new Chart(context).Pie(dataSets);

    }
};

// Send the AJAX request with no data
xhr.open('get', 'http://opendatapress.appspot.com/bathweb/platform.json');
xhr.send({});

// Get the body element
var bodyElement = document.body;


// Boxout
var boxoutDiv = document.createElement('div');
boxoutDiv.setAttribute('class', 'boxout6Columns left');
boxoutDiv.setAttribute('style', 'position: absolute;');

var boxoutTop = document.createElement('div');
boxoutTop.setAttribute('class', 'boxoutNoTop');
boxoutDiv.appendChild(boxoutTop);

var boxoutContent = document.createElement('div');
boxoutContent.setAttribute('class', 'boxoutContent');
boxoutDiv.appendChild(boxoutContent);

var boxoutBottom = document.createElement('div');
boxoutBottom.setAttribute('class', 'boxoutNoBottom');
boxoutContent.appendChild(boxoutBottom);

// Create a heading
var newText = document.createTextNode('Does this bit work?');
var newElement = document.createElement('h2');
newElement.appendChild(newText);

// Stick the header into the container div
boxoutContent.appendChild(newElement);

//Stick the container div into the body of the page
bodyElement.insertBefore(boxoutDiv, bodyElement.firstChild);