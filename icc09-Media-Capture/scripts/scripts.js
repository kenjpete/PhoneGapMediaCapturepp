document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    document.getElementById("DivButtons").style.display = "block";
    }
    document.getElementById("BtnAudio").addEventListener("click", function () {
    // start audio capture
        navigator.device.capture.captureAudio(captureSuccess, captureError, { limit: 3 });
    });

    document.getElementById("BtnImage").addEventListener("click", function () {
        // start image capture
        navigator.device.capture.captureImage(captureSuccess, captureError, {limit:3});
    });

     document.getElementById("BtnVideo").addEventListener("click", function () {
         // start video capture
         navigator.device.capture.captureVideo(captureSuccess, captureError, {limit:3});
});

// capture callback
var captureSuccess = function (mediaFiles) {
    var i, path, len, html;
    html = "";
    for (i = 0, len = mediaFiles.length; i < len; i += 1) {
        path = mediaFiles[i].fullPath;
        html += "<p>" + path + "</p>";
    }
    document.getElementById("DivOutput").innerHTML = html;
};

// capture error callback
var captureError = function (error) {
    document.getElementById("DivOutput").innerHTML = 'Capture Error: ' + error.code;
};