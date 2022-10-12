rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;
song = "";

function preload() {
    song = loadSound("music.mp3");
}

function setup() {
    Canvas = createCanvas(600, 600);
    Canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results) {
    if (results.length > 0) {
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWrist = " + leftWristX + " leftWristY = " + leftWristY);
    }
}

function play() {
    song.play();
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function play() {
    song.pllay();
    song.setVolume(1);
    song.race(1);
}