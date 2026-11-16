// Loading value from localstorage
function loadNum(key, defaultValue) {
    const value = localStorage.getItem(key);
    return value !== null ? parseFloat(value):defaultValue;
}

//localstorage
function saveState(){
    localStorage.setItem("placeholder", coins);
}

//Loading global variables
let placeholder = loadNum("placeholer", 0);

//Interval for saving
setInterval(function(){
    saveState();
    alert("Test")
},1000);

//bg music
const music = new Audio('../sounds/alchemy_lab.mp3')
music.volume = 0.4
music.loop = true
music.play();

