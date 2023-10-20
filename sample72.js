function draw() {
    var canvas = document.getElementById('tutorial');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(25,25);
        ctx.lineTo(125,125)
        ctx.stroke();

        ctx.fillStyle = '#c80000';
        ctx.fillRect(150,25,100,100);
    }
}