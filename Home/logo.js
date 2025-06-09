const logo= document.getElementById("logo-vid");

logo.addEventListener('mouseover',function(){
    const video=document.getElementById("logo-video");
    video.style.display="block";
    logo.addEventListener('mouseout',function(){
        video.style.display="none";
    })
})