var box= document.getElementById("box");
const myElement = document.getElementById("demo");
box.style.color = "red";

box.addEventListener("click",(e)=>{
    console.log("box clicked-->",e);
});
