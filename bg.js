const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/image_0${imgNumber + 1}.png`;
    image.classList.add("bgImage");
    body.prepend(image);
}

function genRandom(){
    const number = Math.floor(Math.random()*IMG_NUMBER);
    return number;
}

function init(){
    const randomeNumber = genRandom();
    paintImage(randomeNumber);

}

init();

/*
Math.random()에 3을곱하면~~~~
0 -> 0
0.1 -> 0.3
0.2 -> 0.6
0.3 -> 0.9
0.4 -> 1.2
0.5 -> 1.5
0.6 -> 1.8
0.7 -> 2.1
0.8 -> 2.4
0.9 -> 2.7
1
*/