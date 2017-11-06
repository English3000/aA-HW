document.addEventListener("DOMContentLoaded", function(){
  const canvas = document.getElementById("myCanvas");
  canvas.width = 500;
  canvas.height = 500;
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "blue";
  ctx.fillRect(0, 0, 500, 500);
  // not working

  ctx.beginPath();
  ctx.arc(250, 250, 100, 45, 45, true);
  ctx.strokeStyle = "gold";
  ctx.lineWidth = 2;
  ctx.stroke();
  // not working
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.moveTo(250, 125);
  ctx.lineTo(125, 250);
  ctx.lineTo(250, 375);
  ctx.lineTo(375, 250);
  ctx.fillStyle = "purple";
  ctx.fill();
});
