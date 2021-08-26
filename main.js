//Create a reference for canvas 
canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

//Give specific height and width to the car image
greencar_height = 100
greencar_width = 75


background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
greencar_x = 5
greencar_x = 225

background_image = "parkingLot.jpg"
greencar_image = "car2.png"


function add() {

	//upload car, and background images on the canvas.
	function add(){
		background_imgTag= new Image() ;
		background_imgTag.onload=uploadBackground;
		background_imgTag.src=background_image;
	  
		greencar_imgTag= new Image() ;
		greencar_imgTag.onload=uploadgreencar();
		greencar_imgTag.src=greencar_image;
	  
	  }
	  
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height)
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}



	//Define function to move the car upward
	function up(){
		if(greencar_y>=0){
			greencar_y-=10;
			console.log("when up is pressed x = " + greencar_x + "and y =" greencar_y);
			uploadBackground();
			uploadgreencar();
		}
	}


function down()
{
	//Define function to move the car downward
	if(greencar_y<=500){
		greencar_y+=10;
		console.log("when down is pressed x = " + greencar_x + "and y =" greencar_y);
		uploadBackground();
		uploadgreencar()};

}

function left()
{
	//Define function to move the car left side
	if(greencar_x>=0){
		greencar_x - = 10;
		console.log("when left is pressed x = " + greencar_x + "and y =" greencar_y);
		uploadBackground();
		uploadgreencar();}

}

function right()
{
	//Define function to move the car right side
	if(greencar_x<=300){
		greencar_x-=10;
		console.log("when right is pressed x = " + greencar_x + "and y =" greencar_y);
		uploadBackground();
		uploadgreencar();}



}
