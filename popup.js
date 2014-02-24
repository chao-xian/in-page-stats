

/*chrome.runtime.sendMessage("The URL is " + url, function() {
    console.log("Send URL as message from content.js");
});*/

// window.addEventListener("load", function() {
document.addEventListener('DOMContentLoaded', function () {

    console.log("Loaded");

    // var url = window.location.href;

    // console.log("Url is " + url);

    // chrome.extension.sendMessage({
    //     type: "dom-loaded",
    //     data: {
    //         myProperty: url
    //     }
    // });
    // var xhr = new XMLHttpRequest();
    // xhr.open('get', 'http://www.google.com/', true);
    // xhr.send({});
    
    chrome.runtime.sendMessage({method:'getUrl'}, function(response){
        console.log('Response received: ');
        console.log(response);
        var urlValue = response.urlVal;
        console.log('Url received: ' + response.urlVal);
        console.log('Word received: ' + response.word);


        // var chartDiv = document.body.getElementsByTagName('div')[0];

        // chartDiv.appendChild("response");
    });
    
    // var url = request.data.myProperty;

    // console.log('URL received: ' + url);
    
    var chartDiv = document.getElementById("chart");

    var newText = document.createTextNode('Does this bit work?');

    var newElement = document.createElement('p');

    newElement.appendChild(newText);

    chartDiv.appendChild(newElement);   
    

});
