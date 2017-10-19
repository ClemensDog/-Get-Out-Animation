let bg = document.querySelector(".box");
let enter = document.querySelector(".action")
let tyrone1 = document.querySelector(".tyrone");
let music1= document.querySelector(".hiphop");
let music2 = document.querySelector(".pinkfloyd");
let jumptyrone = document.querySelector(".jump");
let fliptyrone = document.querySelector(".flip");
let villain = document.querySelector(".theman");
let signbutton = document.querySelector(".signhere");

    enter.addEventListener('animationend', TyroneJumps);

function TyroneJumps(){
    console.log("TyroneJump");
    tyrone1.classList.add("jumptyrone");
    tyrone1.addEventListener('animationend', musicStops);
}

function musicStops(){
    console.log("MusicStops");
    music1.pause();
    music2.play();
    music1.addEventListener('pause', TyroneFlips);
}
    function TyroneFlips(){
    console.log('TyroneFlips');
    tyrone1.classList.replace("jumptyrone","fliptyrone");
    tyrone1.addEventListener('animationend', ManAppears);
    }

function ManAppears(){
    console.log("Man Appears");
    villain.classList.toggle("theman");
    villain.style.opacity="1";
    villain.addEventListener("animationstart", Sign);
}

function Sign(){
    console.log("Sign Here");
    signbutton.style.opacity="1";
}

/*
function SignContract(){
let x = document.getElementsByClassName("box").querySelectorAll(".box");
}
*/
