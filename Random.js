// Random Number Generator

const Button = document.getElementById("no");
const myLabel=document.getElementById("myLabel");
let randomNum;
Button.onclick=function(){
    randomNum=Math.floor(Math.random()*100)+1;
    myLabel.textContent=randomNum;
}
