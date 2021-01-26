var r = 0, g = 0, b = 0;

function getNewColor(oldColor){
    return (oldColor + Math.round(Math.random()) * 20) % 256;
}

function iterateColor(oldColor, newColor){
    let step = oldColor > newColor ? -1 : 1;
    return oldColor + step;
}

function changeBackground () {
    new_r = getNewColor(r);
    new_g = getNewColor(g);
    new_b = getNewColor(b);

    timer = setInterval(function(){
        if (r != new_r || g != new_g || b != new_b){
            r = iterateColor(r, new_r);
            g = iterateColor(g, new_g);
            b = iterateColor(b, new_b);
            document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
            if ((r + b + g) / 3 < 128){
                document.getElementById("game").style.color = "white";
            } else {
                document.getElementById("game").style.color = "black";
            }
        } else {
            clearInterval(timer);
        }
    }, 30   );
}

window.onload = function(){
    setInterval(changeBackground, 500);
}
