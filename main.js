function drawContainer() {
    let container = document.getElementById('pixel-art-container');
    let empty = "<div class='empty'></div>";
    let list = "<div class='row'>"+empty.repeat(50)+"</div>";
    for (let i=0;i<20;i++){
        container.innerHTML+=list;
    }
}
drawContainer();
let currentColor = document.getElementById('current-color');
let circles = document.getElementsByClassName("pick-color");
let needColor = '#000';
function pickColor(color) {
    currentColor.style.backgroundColor = color.id;
    needColor = color.id;
}
for(let item = 0;item<circles.length;item++){
    let color = circles[item];
    circles[item].addEventListener('click',function () {
        pickColor(color);
    });
}
let emptyBlocks = document.getElementsByClassName('empty');
let clicked = false;
for (let i=0;i<emptyBlocks.length;i++){
    let item = emptyBlocks[i];
    item.addEventListener('click',function () {
       item.style.backgroundColor = needColor;
    });
    // item.onmousedown(function () {
    //     clicked =true;
    // });
    // emptyBlocks.onmouseup(function () {
    //     clicked =false;
    // });
    // item.onmousemove(function () {
    //     if (clicked===false){ // noinspection JSAnnotator
    //         continue;
    //     }
    //     item.style.backgroundColor = needColor;
    // })

}

