 let canvas = document.getElementById('heart');
ctx = canvas.getContext('2d');
/* Letter */
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(300, 150);
ctx.lineTo(600,0);
ctx.closePath();
ctx.stroke();

/* Heart */
let heart = {

draw: function() {
    ctx.beginPath();
    ctx.fillStyle = 'rgb(222,51,51)';
    ctx.moveTo(300,130);
    ctx.quadraticCurveTo(265, 105 , 250 , 130);
    ctx.quadraticCurveTo(240, 155 , 300 , 190);
    ctx.quadraticCurveTo(360, 155 , 350 , 130);
    ctx.quadraticCurveTo(335, 105 , 300 , 130);
    ctx.fill();
} }
heart.draw();
function text() {
    ctx.fillStyle = 'black';
    ctx.fillText('Принимая во внимание ваши достоинства,', 10,130);
    ctx.fillText('Мне бы хотелось с вами погулять', 10, 160)
}
function girl() {
    let girl = new Image();
    girl.onload = function() {
        ctx.drawImage(girl, 355, 70, 245,230);
    }
    girl.src = 'girl.png';
    
}
function pismo() {
    
    ctx.font = '20px Marck Script'
    text();
    girl();
    
}

canvas.addEventListener('click', function(e) {
    let rect = canvas.getBoundingClientRect();
    let mouseX = e.clientX - rect.left;
    let mouseY = e.clientY - rect.top;
    //console.log(rect.left, rect.top, rect);

    let heartWidth = 75;
    let heartHeight = 85;
    let heartX = 265;
    let heartY = 105;
    if (mouseX >= heartX && mouseX <= heartX + heartWidth &&
        mouseY >= heartY && mouseY <= heartY + heartHeight) {
      // The heart was clicked
      ctx.clearRect(0,0,canvas.width, canvas.height);
      pismo();
    }
})

  
