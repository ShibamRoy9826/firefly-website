
const darkModeToggle=document.getElementById("darkModeToggle");

let theme=localStorage.getItem("theme");
if (theme=="dark"){
    document.documentElement.className="darkMode";
    darkModeToggle.classList.add("clicked");
}else{
    document.documentElement.className="";
}

darkModeToggle.addEventListener("click",()=>{
    darkmodeStatus=darkModeToggle.classList.toggle("clicked");
    if(darkmodeStatus){
        document.documentElement.className="darkMode";
        
        localStorage.setItem("theme","dark");

    }else{
        document.documentElement.className="";
       
        localStorage.setItem("theme","light")
    }
})

