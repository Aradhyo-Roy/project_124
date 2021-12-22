function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(560,510);

    poseNet=ml5.poseNet(video, modeLoaded);
    poseNet.on('pose', gotPoses);
}
function modeLoaded(){
    console.log("PoseNet is Initialized");
}
function gotPoses(results){
    if (result.length>0) {
        console.log(results);
    }
}