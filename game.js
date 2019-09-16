var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d')
var fish = document.getElementById('image');
var bg = document.getElementById('bg');
var fg = document.getElementById('fg');
var pillar1 = document.getElementById("pillar1");
var pillar2 = document.getElementById("pillar2");
var gap = 90;
var spacebtw = pillar1.height + gap;
var fishx = 50;
var fishy = 150;
var gravity = 1;
var win = new Audio();
win.src="the-simpsons-nelsons-haha.mp3"
document.addEventListener("keydown", moving);
function moving() {
    fishy -= 20;

}
var pill = [];
pill[0] = {
    x: canvas.width,
    y: 0
}
var score =0;
function draw() {
    ctx.drawImage(bg, 0, 0, 500, 500);
    for (var i = 0; i < pill.length; i++) {
        ctx.drawImage(pillar1, pill[i].x, pill[i].y);
        ctx.drawImage(pillar2, pill[i].x, pill[i].y + spacebtw);
        pill[i].x--;
        if (pill[i].x ==  240) {
            pill.push({
                x: canvas.width,
                y: Math.floor(Math.random() * pillar1.height) - pillar1.height
            });
        }
        if (fishx + fish.width >= pill[i].x && fishx <= pill[i].x + pillar1.width && (fishy <= pill[i].y + pillar1.height || fishy + fish.height >= pill[i].y + spacebtw) || fishy >=canvas.height - fg.height){
            alert('game over your score is : '+score)
            location.reload();
        }
        if(pill[i].x == 5){
            score++;
            win.play();

        }
    }
    fishy += gravity;
    
    ctx.drawImage(fg, 0, canvas.height - fg.height);

    ctx.drawImage(fish, fishx, fishy, 50, 50);
    ctx.fillStyle="#802";
    ctx.font='100px';
    ctx.fillText("score : "+score,250,canvas.height-20);
    requestAnimationFrame(draw);
}
draw();