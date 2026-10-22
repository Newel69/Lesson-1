// Function name screen

function screen() {
    Width = window.innerWidth;
    document.getElementById("size").innerHTML = Width+"px";
}

window.onload = screen; //screen is a fuction name we made
window.onresize = screen;
