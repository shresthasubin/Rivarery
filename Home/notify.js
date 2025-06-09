const b1=document.getElementById("notify-button");
b1.addEventListener('click',function(){
    const display=document.getElementById("display-msg");
    let m1=document.getElementById("set-message");
    let e1=document.getElementById("notify-email").value;
    document.getElementById("notify-email").value="";
    if (e1 == ""){       
        m1.innerHTML="<p>Please enter the email address</p>";
        m1.style.display="block";
        display.style.display="block";
        
    } else if(e1.includes('@gmail.com')) {
        m1.innerHTML="<p>Thank you! for joining our community services</p>";
        m1.style.display="block";
        display.style.display="block";
    } else{
        m1.innerHTML="<p>Please Enter the address having domain name @gmail.com</p>";
        m1.style.display="block";
        display.style.display="block";
    }
    
});
const btn2= document.getElementById("ok-btn");

btn2.addEventListener('click',function(){
    const para=document.getElementById("display-msg");
    para.style.display="none";

    
});

