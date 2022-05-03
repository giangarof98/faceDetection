// const video = document.getElementById('video');
var constraints = { video: { width: 1280, height: 720 } };

Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri('./models'),
    // faceapi.nets.faceLandMark68Net.loadFromUri('./models'),
    // faceapi.nets.faceRecognitionNet.loadFromUri('./models'),
    // faceapi.nets.faceExpressionNet.loadFromUri('./models'),
]);

// function startVideo(){
//     navigator.mediaDevices.getUserMedia(constraints,
//         stream => video.srcObject = stream,
//         err => console.error(err)
//     )
// }
// startVideo()

navigator.mediaDevices.getUserMedia(constraints)
.then(function(mediaStream) {
    var video = document.getElementById('video');
    video.srcObject = mediaStream;
    video.onloadedmetadata = function(e) {
      video.play();
    };
  })
.catch(function(err) { console.log(err.name + ": " + err.message); })
