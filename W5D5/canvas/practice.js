document.addEventListener("DOMContentLoaded", function(){
  const canvas = document.getElementById('mycanvas');
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'blue';
  ctx.fillRect(0, 0, canvas.width, canvas.length);
  // not working

  // ctx.beginPath();

});
