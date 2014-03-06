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

        console.log(data);

        // Iterate over each item in the JSON object and shove into our container div
        // data.data.forEach(function(object) {
        for (var i=0; i < 6; i++) {
            var dataElement = document.createElement('p');
            // var dataText = document.createTextNode(object.institution);
            var dataText = document.createTextNode(data.data[i].institution);
            dataElement.appendChild(dataText);
            boxoutContent.appendChild(dataElement);
        }
    }
};

// Send the AJAX request with no data
xhr.open('get', 'http://opendatapress.appspot.com/craig552uk/uk-uni-social-media-accounts.json');
xhr.send({});

// Get the body element
var bodyElement = document.body;
/*if (!bodyElement) {
    bodyElement = document.getElementsByClassName('basicPage')[0];
}*/


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


// Chart
var data = {
    labels : ["January","February","March","April","May","June","July"],
    datasets : [
        {
            fillColor : "rgba(220,220,220,0.5)",
            strokeColor : "rgba(220,220,220,1)",
            pointColor : "rgba(220,220,220,1)",
            pointStrokeColor : "#fff",
            data : [65,59,90,81,56,55,40]
        },
        {
            fillColor : "rgba(151,187,205,0.5)",
            strokeColor : "rgba(151,187,205,1)",
            pointColor : "rgba(151,187,205,1)",
            pointStrokeColor : "#fff",
            data : [28,48,40,19,96,27,100]
        }
    ]
}

var chartElement = document.createElement('canvas');
chartElement.setAttribute('id', 'myChart');
chartElement.setAttribute('width', '400');
chartElement.setAttribute('height', '400');
boxoutContent.appendChild(chartElement);

var context = chartElement.getContext('2d');
new Chart(context).Line(data);


// window.addEventListener("load", function() {
//     console.log('Sending Url: ' + url);
//     chrome.runtime.sendMessage({url: 'what the bloodclot'}, function() {
//         return window.location.href;
//     });
// });

// chrome.runtime.sendMessage({urlVal: window.location.href}, function() {
//     // localStorage.urlVal = window.location.href;
// });

// /*chrome.runtime.sendMessage("The URL is " + url, function() {
//     console.log("Send URL as message from content.js");
// });*/

// window.addEventListener("load", function() {
// // document.addEventListener('DOMContentLoaded', function () {

//     console.log("Loaded");

//     var url = window.location.href;

//     console.log("Url is " + url);

//     // chrome.extension.sendMessage({
//     //     type: "dom-loaded",
//     //     data: {
//     //         myProperty: url
//     //     }
//     // });
    
//     var chartDiv = document.getElementById("chart");

//     chartDiv.appendChild("url");

// });