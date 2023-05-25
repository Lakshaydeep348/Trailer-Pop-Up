const buttonEl=document.getElementById("trailer");
const videoEl=document.getElementById("video")
const closeEl=document.getElementById("close");
const contEl=document.getElementById("container");

closeEl.addEventListener("click",()=>{
    videoEl.style.display="none";
    contEl.style.display="block";
})

buttonEl.addEventListener("click",()=>
{
   videoEl.style.display="block";
   contEl.style.display="none";
})