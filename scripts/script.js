const scrollDown=document.getElementById("scrollDown");
const steps=document.getElementById("steps");
const darkModeToggle=document.getElementById("darkModeToggle");
const clouds=document.querySelectorAll(".cloud");
let darkmodeStatus=false;

aRed=document.getElementById("antiCollisionRed");
aWhite=document.getElementById("antiCollisionWhite");
nRed=document.getElementById("navRed");
nGreen=document.getElementById("navGreen");

scrollDown.addEventListener("click",()=>{
    steps.scrollIntoView({ behavior: "smooth" });
})
darkModeToggle.addEventListener("click",()=>{
    darkmodeStatus=darkModeToggle.classList.toggle("clicked");
    if(darkmodeStatus){
        document.documentElement.className="darkMode";
        // aRed.style.display="block";
        aWhite.style.display="block";
        nRed.style.display="block";
        nGreen.style.display="block";

    }else{
        document.documentElement.className="";
        // aRed.style.display="none";
        aWhite.style.display="none";
        nRed.style.display="none";
        nGreen.style.display="none";
    }
})

document.addEventListener("scroll", function () {
    let scrollPos = window.scrollY;
    let plane = document.querySelector("#planeContainer");

    let moveX = scrollPos * 0.5;
    let moveY = Math.sin(scrollPos * 0.02) * 50;

    plane.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${moveY / 2}deg)`;
});

clouds.forEach((cloud)=>{
    let randLeft=Math.random()*100;
    cloud.style.left=`${randLeft}vw`;
})
function animateClouds() {
    clouds.forEach((cloud) => {
        let speed= Math.random()*5;
        let currentLeft = parseFloat(getComputedStyle(cloud).left) || 0;
        cloud.style.left = `${currentLeft + speed}px`;
        if (currentLeft > window.innerWidth) {
            cloud.style.left = "-200px"; 
        }
    });

    requestAnimationFrame(animateClouds);
}

animateClouds();

const observer= new IntersectionObserver((entries)=>{
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});
const hiddenStuff=document.querySelectorAll(".hidden");
hiddenStuff.forEach((ele)=>observer.observe(ele));


window.addEventListener("scroll", () => {
    let scrollValue = window.scrollY;
    const gLeft = document.getElementById("grassLeft");
    const gRight = document.getElementById("grassRight");
    gLeft.style.transform = `translateX(${-scrollValue}px)`;
    gRight.style.transform = `translateX(${scrollValue}px)`;
});
