var url = window.location.href;

console.log("Url is " + url);

var xhr = new XMLHttpRequest();
var data;
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
        // console.log(xhr.responseText);
        data = JSON.parse(xhr.responseText);

        console.log(data);

        data.data.forEach(function(object) {
            var dataElement = document.createElement('p');
            var dataText = document.createTextNode(object.institution);
            dataElement.appendChild(dataText);
            bodyElement.appendChild(dataElement);
        });
    }
}
xhr.open('get', 'http://opendatapress.appspot.com/craig552uk/uk-uni-social-media-accounts.json');
xhr.send({});

var bodyElement = document.getElementById('wrapper');
if (!bodyElement) {
    bodyElement = document.getElementsByClassName('basicPage')[0];
}
var newText = document.createTextNode('Does this bit work?');
var newElement = document.createElement('p');

newElement.appendChild(newText);
bodyElement.appendChild(newElement);

var chartElement = document.createElement('canvas');
bodyElement.appendChild(chartElement);

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