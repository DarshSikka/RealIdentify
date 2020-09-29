var machine='https://teachablemachine.withgoogle.com/models/QqXnw7mPd/';
function preload(){

}
function setup(){
 canvas=createCanvas(300, 300);
 video=createCapture(VIDEO);
 canvas.set(200, 300);
 video.hide();
}
function draw(){
image(video, 0, 0, 300, 300);
}