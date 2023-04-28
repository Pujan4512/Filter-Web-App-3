nose_X = 0;
nose_Y = 0;

function preload(){
    mustache = loadImage('https://i.postimg.cc/2S4zMVbh/Mustache.png');
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('Working!');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nose_X = results[0].pose.nose.x-25;
        nose_Y = results[0].pose.nose.y+3;
        console.log("nose x = " + nose_X);
        console.log("nose y = " + nose_Y);
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(mustache, nose_X, nose_Y, 50, 30);
}

function take_snapshot(){
    save('mustache.png');
}