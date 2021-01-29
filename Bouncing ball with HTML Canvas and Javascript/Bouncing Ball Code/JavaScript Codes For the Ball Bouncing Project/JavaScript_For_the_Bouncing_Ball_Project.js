var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#000000";
ctx.fillRect(0, 0, 600, 600);

 



<!--Ball that will move around the canvas-->
	
var ball_color = "#002CE6";
var ball_color2 = "#FF0000";
var ball_size = 40;
var ball_speed = 30;
var currentRefresh_Interval_Id = setInterval(draw, ball_speed);
var x = 90;
var y = 300;
var xincrement = 12;
var yincrement = 12;
function draw()
{
	//alert("i am in draw function");
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext('2d');
  ctx.fillStyle = "#000000";
 

ctx.fillRect(0, 0, 600, 600);
context.beginPath();
context.arc(x,y,ball_size,0,2*Math.PI);
context.strokeStyle = ball_color;
context.stroke();
context.fillStyle = ball_color;
context.fill();

x=x+xincrement;
y=y+yincrement;


if (x>560) {
  xincrement = xincrement - 24;

  }
if (y>560) {
yincrement = yincrement - 24;

}

if (x<50) {
	xincrement = xincrement + 12;
}

if (y<50) {
    yincrement = yincrement + 12;

}



}

function change_ball_color_red()
{


ball_color = "#FF0000";

//alert("function called!");


}

function change_ball_color_blue()
{


ball_color = "#002CE6";
}


function increase_ball_size() 
{

ball_size = 90;

}

function decrease_ball_size()
{

ball_size = 25;

}

function default_ball_size()
{


ball_size = 40;

}


function increase_ball_speed()
{
ball_speed = ball_speed - 15;
clearInterval(currentRefresh_Interval_Id);
currentRefresh_Interval_Id = setInterval(draw, ball_speed);
}

function decrease_ball_speed()
{

ball_speed = ball_speed + 20;
clearInterval(currentRefresh_Interval_Id);
currentRefresh_Interval_Id = setInterval(draw, ball_speed);

}

function default_ball_speed()
{

ball_speed = 30;
clearInterval(currentRefresh_Interval_Id);
currentRefresh_Interval_Id = setInterval(draw, ball_speed);


}

function stop()
{

yincrement = 0;

xincrement = 0;

}

function start()
{

yincrement = 12;

xincrement = 12;



}

