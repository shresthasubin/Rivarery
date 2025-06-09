const button=document.getElementById("show-full");
button.addEventListener("click",function(){
    const cont1=document.getElementById("sub-container");
    const cont2=document.getElementById("comboContainer");
    if(button.classList.contains("open2")){
        button.className="close2";
        cont1.className="container-detail-close";
        cont2.className="combo-container-close";
    }else{
        button.className="open2";
        cont1.className="container-detail-open";
        cont2.className="combo-container-open";

    }

});
const button1=document.getElementById("show-full1");
button1.addEventListener("click",function(){
    const cont1=document.getElementById("sub-container1");
    const cont2=document.getElementById("comboContainer1");
    if(button1.classList.contains("open1")){
        button1.className="close1";
        cont1.className="container-detail-close";
        cont2.className="combo-container-close";
    }else{
        button1.className="open1";
        cont1.className="container-detail-open";
        cont2.className="combo-container-open";

    }

});
const button2=document.getElementById("show-full2");
button2.addEventListener("click",function(){
    const cont1=document.getElementById("sub-container2");
    const cont2=document.getElementById("comboContainer2");
    if(button2.classList.contains("open2")){
        button2.className="close2";
        cont1.className="container-detail-close";
        cont2.className="combo-container-close";
    }else{
        button2.className="open2";
        cont1.className="container-detail-open";
        cont2.className="combo-container-open";

    }

});