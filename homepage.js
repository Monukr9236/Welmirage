function openNav() {
    document.getElementById("navbar").style.marginRight = "0px";
    document.getElementById("sidebarmenu2").style.opacity = "1";
    document.getElementById("sidebarmenu2").style.cursor = "pointer";
    document.getElementById("sidebarmenu").style.marginRight = "100px";
    document.getElementById("sidebarmenu2").style.marginRight = "80px";
    document.getElementById("sidebarmenu2").style.transform = "rotate(360deg)";
}
function closeNav() {
    document.getElementById("sidebarmenu").style.marginRight = "0px";
    document.getElementById("navbar").style.marginRight = "-250px";
    document.getElementById("sidebarmenu2").style.opacity = "0";
    document.getElementById("sidebarmenu2").style.cursor = "default";
    document.getElementById("sidebarmenu2").style.transform = "rotate(-360deg)";
}
var show=0;
slider(show);
function slider(num){
    var slide=document.getElementsByClassName("person");
    var circle=document.getElementsByClassName("circle");
    if(num==slide.length){
        num=0;
        show=0;
    }
    for(var a=0;a<slide.length;a++){
        slide[a].style.display="none";
        circle[a].style.background="white";
    }
    slide[num].style.display="block";
    circle[num].style.background="black";
}
setInterval(indirect,3000);
function indirect(){
    show++;
    slider(show);
}
