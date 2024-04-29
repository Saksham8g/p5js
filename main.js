function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(150,150);
    video = createCapture(VIDEO);
    video.hide();


}
  function draw(){

    image(video,230 ,150,220,200);

    fill(255,0,0);
    stroke(255,0,0)

    circle(230,350,35)

    circle(220,150,35)

    circle(450,350,35)

    circle(450,150,35)

    fill(0,128,0);
    stroke(0,128,0)

    rect

    rect(400,350,30)

    rect(220,350,30)

    rect(350,230,30)

rect(150,220,30)

  }

  function take_snapshot(){
   save('myFilterImage.png');
  }

  function modelLoaded() {

    console.log('PoseNet Is Initialized');
  
  }

  
  function gotPoses(results)
  {
    if(results.length > 0)
    {
      console.log(results);
      console.log("nose x = " + results[0].pose.nose.x);
      console.log("nose y = " + results[0].pose.nose.y);
    }
  }