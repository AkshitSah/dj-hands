song="";
leftwristx=0;
leftwristy=0;
rightwristx=0;
rightwristy=0;
function preload()
{
    song=loadSound("music.mp3");
}
function setup()
{
Canvas=createCanvas(500,400);
Canvas.center();

video=createCapture(VIDEO);
video.hide();

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotposes);
}
function modelLoaded()
{
    console.log("Posenet is Initialized");
}
function gotposes(results)
{
if(results.length>0);
{
    console.log(results);
    leftwristx=results[0].pose.leftWrist.x;
    leftwristy=results[0].pose.leftWrist.y;
console.log("leftwristX="+leftwristx+"leftWristY="+leftwristy);

rightwristx=results[0].pose.rightWrist.x;
    rightwristy=results[0].pose.rightWrist.y;
console.log("rightwristX="+rightwristx+"righWristY="+rightwristy);
}
}
function draw(){
image(video,0,0,500,400);
}
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1)
}
