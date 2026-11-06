let timeID = null;
let SCREEN_HEIGH = document.documentElement.clientHeight;

function startMakingBoxes() {
    timeID = setInterval(timedAction, 2000);
}

function stopMakingBoxes(){
    console.log("Stopping making boxes.");
    clearInterval(timeID);
}
function deleteBox(evt) {
    let parentDiv = evt.currentTarget.parentElement;
    parentDiv.removeChild(evt.currentTarget);
}

function timedAction () {
    let gameOver = checkGameOver();
    if (gameOver === true) {
        return;
    }

    let boxDIV = document.querySelector(".box");

    let newPara = document.createElement("p");
    newPara.textContent = "I am a box!";
    newPara.setAttribute("class", "div-green");
    newPara.addEventListener("click", deleteBox);

    boxDIV.appendChild(newPara);    
}

function checkGameOver() {
    let boxDIV = document.querySelector(".box");

    if ((boxDIV.offsetTop + boxDIV.offsetHeight) >= SCREEN_HEIGH) {
        stopMakingBoxes();
        
        let parat = document.querySelectorAll("p");
            for (let para of parat){
                para.remove();
            }
       
        boxDIV.textContent = "Peli loppuu!";
        
        return true;
    }  
    return false;
}

let startButton = document.getElementById("start");
startButton.addEventListener("click", startMakingBoxes);

let stopButton = document.getElementById("end");
stopButton.addEventListener("click", stopMakingBoxes);





