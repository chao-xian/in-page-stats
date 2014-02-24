// console.log("Event page loaded");

// /*chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
//     console.log(message);
// });*/

// var url = "";

// chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
//     switch(request.type) {
//         case "dom-loaded":
//             // alert(request.data.myProperty);
//             url = request.data.myProperty;
//             // alert(url);
//         break;
//     }
//     return true;
// });

// chrome.runtime.getBackgroundPage(function callback) {
//     url = request.data.myProperty;
//     console.log(url);

//     var chartDiv = document.getElementById("chart");

//     chartDiv.appendChild("url");
// }

var url;
chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
  // if(message.method == 'setUrl')
  //   console.log('Setting Url: ' + message.url);
  //   url = message.url;
  // else if(message.method == 'getUrl')
  //   console.log('Getting url: ' + url);
  //   sendResponse(url);
  var urlValue = message.urlVal;
  // alert(message.urlVal);

  // alert(localStorage['urlVal']);
  // alert(message);
  // sendResponse({urlVal: urlValue, word:'FUCK!'});
  
});