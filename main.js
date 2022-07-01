function preload() {
clown_nose = loadImage('https://i.postimg.cc/Hx4NR8c2/Pngtree-cartoon-gentleman-retro-mustache-beard-5456655.png');
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPose);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPose(results) {
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x-25;
        noseY = results[0].pose.nose.y-5;
        console.log("nose x =" + noseX);
        console.log("nose y =" + noseY);
    }
}

noseX=0;
noseY=0;

function draw() {
image(video,0,0,300,300);
image(clown_nose, noseX, noseY, 50,30);
}

function take_snapshot() {
    save('Clown_Image.png');
}