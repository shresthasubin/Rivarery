const select=document.getElementById("coming-soon-select");
const selected=document.getElementById("coming-selection");
select.addEventListener('change',function(){
    const value=select.value;
    selected.classList.remove("show-man");
    selected.classList.remove("show-woman");

    if (value==="Men"){
        selected.classList.add("show-man");
    }else if(value==="Women"){
        selected.classList.add("show-woman");
    }
});