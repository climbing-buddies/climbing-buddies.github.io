var r = 0, g = 0, b = 0;

function getNewColor(oldColor){
    let sign = Math.round(Math.random()) == 0 ? -1 : 1;
    let newColor = (oldColor + sign * 20) % 256;
    if (newColor < 0) {
        newColor = 256 - newColor;
    }
    return newColor;
}

function iterateColor(oldColor, newColor){
    if (oldColor == newColor){
        return oldColor;
    } else {
        return oldColor > newColor ? --oldColor : ++oldColor;
    }
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
    }, 100);
}

window.onload = function(){
    setInterval(changeBackground, 2000);
}
