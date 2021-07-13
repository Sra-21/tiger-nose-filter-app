noseX = 0;
noseY = 0;

function preload() {
    nose = loadImage('https://i.postimg.cc/Fs4TVz91/411vy4-Z7g-VL-removebg-preview.png')
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO)
    video.size(300, 300)
    video.hide()
    poseNet = ml5.poseNet(video, modelLoded);
    poseNet.on('pose', gotPoses);
}

function modelLoded() {
    console.log('poseNet is initialize')
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(nose, noseX, noseY, 40, 30)
}

function take_snapshot() {
    save('clown.png');
}